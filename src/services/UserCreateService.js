const { hash} = require("bcryptjs")
const AppError = require("../utils/AppError")

class UserCreateService{
    constructor(userRepositories){
        this.userRepositories = userRepositories
    }

    async execute({ name, email, password }){

        const checkIfUserExist = await this.userRepositories.findByEmail(email)

        if(checkIfUserExist){
            throw new AppError('Este e-mail já está em uso.')
        };

        const hashedPassword = await hash(password, 8);

        const userCreated = await this.userRepositories.create({ name, email, password: hashedPassword})

        return userCreated
    }
}
module.exports = UserCreateService