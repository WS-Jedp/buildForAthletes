import { User } from '../users'
import { ConditionalCapabilities, ConditionalCapabilitiesProperties } from '../athleticism/base/conditionalCapabilities'
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

    public compareConditionalCapability(currentCapabilityValue: number, capabilityValueToCompare: number): number {
        return Math.abs(currentCapabilityValue - capabilityValueToCompare)
    }

    public compareSpecificConditionalCapability(capability: string, conditionalCapabilitesToCompare: ConditionalCapabilities): number | null {
        const athleteConditionalCapabilities = this.conditionalCapabilities.getObject()
        const athleteToCompare = conditionalCapabilitesToCompare.getObject()
        if(!athleteToCompare[capability]) {
            return null
        }

        return this.compareConditionalCapability(athleteConditionalCapabilities[capability] || 0, athleteToCompare[capability] || 0)
    }

    public compareAllConditionalCapabilites(conditionalCapabilitesToCompare: ConditionalCapabilities): ConditionalCapabilitiesProperties {
        const comparedConditionalCapabilities: ConditionalCapabilitiesProperties = new ConditionalCapabilities({}).getObject() 
        const athleteConditionalCapabilities = this.conditionalCapabilities.getObject()
        const athleteToCompareConditionalCapabilities = conditionalCapabilitesToCompare.getObject()
        for(const capability of Object.keys(athleteConditionalCapabilities)) {
            comparedConditionalCapabilities[capability] = this.compareConditionalCapability(athleteConditionalCapabilities[capability] || 0, athleteToCompareConditionalCapabilities[capability] || 0)
        }
        return comparedConditionalCapabilities;
    }
}

export {
    Athlete,
    AthleteProperties
}