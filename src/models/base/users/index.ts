import { Athlete } from '../athetles/base'
import { Person } from '../people'

class User extends Person {
    username: string
    nickname?: string
    email: string
    password: string
    protected athlete?: Athlete

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

    public setAthlete(athleteData: Athlete) {
        this.athlete = athleteData
    }
    public getAthlete(): Athlete | null {
        if(!this.athlete) return null
        return this.athlete
    }
 }

export {
    User
}