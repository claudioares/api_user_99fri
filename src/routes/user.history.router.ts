import { Router } from "express";
import { UserHistoryUserCase } from "../usecases/user.history.user.case";

export const userHistory = Router();


userHistory.get("/user/history", async (req, res)=>{
    try {
        const { authorization } = req.headers;

        const historyUserCase = new UserHistoryUserCase();
        const reuslt = await historyUserCase.getHistory({token:authorization})

        return res.json({
            messege: reuslt
        })

    } catch (error) {
        console.error('Error during process:', error);
        return res.status(500).json({ error: "Error during process!"});
    }
})