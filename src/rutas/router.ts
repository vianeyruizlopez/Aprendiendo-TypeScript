import { userRepository } from "@server/repository/UserRepository.js";
import { UserService } from "@server/service/UserService.js";
import type { IUserRepository, IUserService, User } from "@server/TypeScript/UsersType.js"; 
import { Router } from "express";

const router = Router();

const myUserRepository: IUserRepository = new userRepository();

const myUserService: IUserService = new UserService(myUserRepository);

export default () => {
    router.get("/health", (req, res) => {
        res.send("api ¡¡¡¡¡¡"); 
    });

    router.get("/users",async(req,res)=>{
        const users = await myUserService.findUsers();
        res.json(users)
    })

    router.post("/users",async(req,res)=>{
        const newUser:User = req.body;
        const result = await myUserService.createUser(newUser);
        res.json(result);
    });
    return router;
};