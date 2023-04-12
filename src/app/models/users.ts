export class Users {
    id: number;
    name: string;
    lastname: string;
    username:string;
    phone: number;
    email:string;
    constructor(id:number, name: string, lastname: string, username:string, phone:number, email:string)
    {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.username = username;
        this.phone = phone;
        this.email = email;
    }
}
