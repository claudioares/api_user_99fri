import { Router } from "express";
import { UserUseCase } from "../usecases/user.usecase";

export const userUpdate = Router();

userUpdate.patch("/update", async (req, res)=>{

    try {
        const {name, password} = req.body;
        const { authorization } = req.headers;

        const userUserCase = new UserUseCase();
        const resultUseUseCase = await userUserCase.update({name, password, hash:authorization})


        return res.json(resultUseUseCase)
    } catch (error) {
        console.error('Error during process:', error);
        return res.status(500).json({ error: "Error during process!"});
    }
})