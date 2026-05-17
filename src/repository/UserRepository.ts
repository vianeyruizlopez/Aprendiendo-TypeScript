import type { IUserRepository, User } from "@server/TypeScript/UsersType.js";

export class userRepository implements IUserRepository{
    private users:User[]=[]

    async create(data: User): Promise<User> {
        this.users.push(data)
        return data
    }
    async find(): Promise<User[]> {
        return this.users
    }
}