import { User } from '../users'
import { ConditionalCapabilities } from '../athleticism/base/conditionalCapabilities'
import { CoordinativeCapabilities } from '../athleticism/base/coordinativeCapabilities'
import { BasketballAthlete } from './specific/basketball/basketballAthlete'

type AthleteProperties = {
    conditional: ConditionalCapabilities,
    coordinative: CoordinativeCapabilities
}
class Athlete {
    protected user?: User
    conditionalCapabilities: ConditionalCapabilities
    coordinativeCapabilities: CoordinativeCapabilities
    sports: {
        basketball?: BasketballAthlete
        voleyball?: undefined
    } = {}

    public constructor(capabilities: AthleteProperties, user?: User) {
        this.conditionalCapabilities = capabilities.conditional
        this.coordinativeCapabilities = capabilities.coordinative
    }

    public setUser(user: User) { this.user = user }
    public getUser(): User | undefined { return this.user }
}

export {
    Athlete,
    AthleteProperties
}