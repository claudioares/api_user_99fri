import { Router } from "express";
import { UserUseCase } from "../usecases/user.usecase";

export const userLogin = Router();

type BodyRequire = {
    email: string,
    password: string,
}


userLogin.get('/login', async (req, res)=>{
    try {
        const {email, password}:BodyRequire = req.body as BodyRequire;

        const userUserCase = new UserUseCase();
        const dataResult = await userUserCase.login(email, password);


        return res.json({messege: dataResult})
        
    } catch (error) {
        console.error('Error during process:', error);
        return res.status(500).json({ error: "Error during process!"});
    }
})