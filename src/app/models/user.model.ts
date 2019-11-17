

export class UserModel{
    emailId: string
    password: string
    userName: string
    constructor(data: {
        emailId?: string,
        password?: string,
        userName?: string,
    } = {}){
        this.emailId = data.emailId
        this.password = data.password
        this.userName = data.userName
    }
}