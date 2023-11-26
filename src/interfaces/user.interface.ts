export interface IUser {
    id: string,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updateAt: Date,
}

export interface ICreateUser {
    name: string,
    email: string,
    password: string,
}

export interface ILoginUser {
    email: string,
}

export interface IUpdateUser {
    id: string,
    name: string,
    password: string,
}

export interface IUserMethods {
    create({name, email, password}:ICreateUser):Promise<IUser>
    login({email }:ILoginUser):Promise<IUser | null | string>
    update({ id, name, password }:IUpdateUser):Promise<IUser | null>
}