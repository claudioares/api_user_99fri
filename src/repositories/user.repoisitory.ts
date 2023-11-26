import { prisma } from "../database/prisma.config";
import { ICreateUser, ILoginUser, IUpdateUser, IUser, IUserMethods } from "../interfaces/user.interface";

export class UserRepository implements IUserMethods {
    async create({ name, email, password }: ICreateUser ): Promise<IUser> {
        
        const user = await prisma.user.create({
            data: {
                name, email, password
            }
        });

        return user;
    }
    async login({ email }: ILoginUser): Promise<IUser | null | string > {

        const userVerify = await prisma.user.findUnique({
            where:{
                email
            }
        }) as IUser      

        return userVerify;
    }
    async update({ id, name, password  }: IUpdateUser): Promise<IUser | null> {
        
        const user = await prisma.user.update({
            where: {
                id
            },
            data: {
                name, password
            }
        })

        return user;
    }

    async verifyId(id:string):Promise<boolean> {

        const verifyId = await prisma.user.findUnique({
            where:{
                id
            }
        });

        return Boolean(verifyId);
    }
}