import { prisma } from "../database/prisma.config";

type CreatedRegisterType = {
    id: string,
    name: string,
    action: string,
}

export async function createdResister ({id, name, action}:CreatedRegisterType) {
    const userId = id;
    const userName = name;

    await prisma.userHistory.create({
        data:{
            action,
            userId: userId,
            userName: userName,
        }
    })
}