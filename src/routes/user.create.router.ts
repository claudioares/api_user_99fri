import { Router } from "express";
import { ICreateUser } from "../interfaces/user.interface";
import { UserUseCase } from "../usecases/user.usecase";


export const userCreate = Router();

userCreate.post('/create', async (req, res)=>{
    
    try {
        const {name, email, password}:ICreateUser = req.body as ICreateUser;

        const userUserCase = new UserUseCase();
        const result = await userUserCase.create({name, email, password});

        const {password:_, ...userDetail}:ICreateUser = result as ICreateUser;

        return res.status(201).json({messege: userDetail})
    } catch (error) {
        console.error('Error during process:', error);
        return res.status(500).json({ error: "Error during process!"});
    }
})