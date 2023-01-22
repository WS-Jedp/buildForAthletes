import { Person } from '../people'

class User extends Person {
    username: string
    nickname?: string
    email: string
    password: string

    public constructor(user: {
        username: string
        email: string,
        password: string,
        name: string,
        lastname: string
    }) {
        super({
            name: user.name,
            lastName: user.lastname,
        })

        this.username = user.name
        this.email = user.email
        this.password = user.password
    }
}

export {
    User
}