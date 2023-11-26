export interface IUserHistory {
    id: string,
    userName: string,
    timestamp: string,
    action: string,

    userId: string,
}

export interface IJwtPeload {
    id: number
}

export interface IGetHistory {
    token: string | undefined, 
}

export interface IUserHIstoryMethods {
    getHitory(userId:string | undefined):Promise<IUserHistory | null | string>
}