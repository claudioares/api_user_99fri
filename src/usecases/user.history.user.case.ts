import { IGetHistory, IJwtPeload } from "../interfaces/user.history.interface";
import { UserHistoryRepositorie } from "../repositories/user.history.repository";
import { UserRepository } from "../repositories/user.repoisitory";
import jwt from "jsonwebtoken";


export class UserHistoryUserCase {
    private userHistoryRepositorie:UserHistoryRepositorie
    private useRepository: UserRepository
    constructor(){
        this.userHistoryRepositorie = new UserHistoryRepositorie()
        this.useRepository = new UserRepository()
    }


    async getHistory ({token}:IGetHistory) {

        if(!token) { throw new Error ("Token is required!")};

        const userToken = token.split(" ")[1];

        const { id:_id } = jwt.verify(userToken, process.env.HASHTOKEN ?? '') as IJwtPeload;
        const verifyToken = await this.useRepository.verifyId(_id.toString());
        if(!verifyToken){throw new Error("Fail authentication!")};

        const user = await this.userHistoryRepositorie.getUser(_id.toString());

        const resultRepository = await this.userHistoryRepositorie.getHitory(user?.id);


        return resultRepository;
    }
}