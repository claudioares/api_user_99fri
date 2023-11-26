import { createdResister } from "../ middlewares/created.resister";
import { ICreateUser, IUpdateUser, IUser } from "../interfaces/user.interface";
import { UserRepository } from "../repositories/user.repoisitory";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


type LoginType = {
    token: string; 
    id: string; 
    name: string; 
    email: string; 
    createdAt: Date; 
    updateAt: Date;
}
type JwtPeload = {
    id: number;
}
type UserUpdateType = {
    name:string,
    password: string,
    hash: string | undefined,
}
export class UserUseCase {
    private useRepository:UserRepository
    constructor(){
        this.useRepository = new UserRepository()
    }

    async create({ name, email, password }: ICreateUser):Promise<IUser | string> {
        if(!name  || !email || !password) {
            throw new Error("All requisits required!")
        };
        const hashPassword = await bcrypt.hash(password, 10);

        const userCreated = await this.useRepository.create({name, email, password:hashPassword});

        createdResister({id:userCreated.id, name: userCreated.name, action:"Created new user"});

        return userCreated;
    }
    async login(email:string, password:string): Promise<IUser | string | LoginType> {

        if(!email || !password){throw new Error("All requisits required!")}

        const userVerifyEmail:IUser = await this.useRepository.login({email}) as IUser;        
        if(userVerifyEmail === null) {
            throw new Error("Email or password is invalid!")
        }

        const passwordVerify:boolean = await bcrypt.compare(password, userVerifyEmail.password)
        if(!passwordVerify) {
            createdResister({id:userVerifyEmail.id, name: userVerifyEmail.name, action:"Unsuccessful sign-in"});
            throw new Error("Email or password is invalid!")
        }

        const {password:_, ...user} = userVerifyEmail;

        const token = jwt.sign({id: userVerifyEmail.id}, process.env.HASHTOKEN ?? '', {expiresIn: '8h'});

        const userDatails = {...user, token};

        createdResister({id:userVerifyEmail.id, name: userVerifyEmail.name, action:"Created new login"});
        return userDatails;

    }
    async update({ name, password, hash }:UserUpdateType ): Promise<IUser | null | string> {

        if(!name || !password) {throw new Error("Email or password invalid!") };

        const hashPassword = await bcrypt.hash(password, 10);
    
        if(!hash){throw new Error ("Fail authentication!")}

        const token = hash.split(" ")[1];
      
        const { id:_id } = jwt.verify(token, process.env.HASHTOKEN ?? '') as JwtPeload;
        const verifyId = await this.useRepository.verifyId(_id.toString())
        if(!verifyId){throw new Error("Fail authentication!")}

        const id = _id.toString()

        const updateUser = await this.useRepository.update({id, name, password:hashPassword})

        const {password:_, ...user} = updateUser as IUser;

        createdResister({id:user.id, name: user.name, action:"Created new update"});
        return user as IUser;
    }
}