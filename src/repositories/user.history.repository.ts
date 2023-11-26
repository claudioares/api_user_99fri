import { prisma } from "../database/prisma.config";
import { IGetHistory, IUserHIstoryMethods, IUserHistory } from "../interfaces/user.history.interface";

export class UserHistoryRepositorie implements IUserHIstoryMethods {
    async getHitory(userId:string | undefined): Promise<string | IUserHistory | null> {
        const userHistorie = await prisma.userHistory.findMany({
            where: {
                userId
            }
        });

        return userHistorie as unknown as IUserHistory;
    }

    async getUser (id:string) {
        const dataUser = await prisma.user.findFirst({
            where:{
                id
            }
        })

        return dataUser;
    }
}