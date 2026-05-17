import { type Repository } from "./RepositoryType.js";
export interface User {
    id:string;
    name:string;
    userName:string;
    email:string;
}

export interface IUserRepository extends Repository<User>{}

export interface IUserService{
    createUser(user: User): Promise<User>;
    findUsers():Promise<User[]>;
}