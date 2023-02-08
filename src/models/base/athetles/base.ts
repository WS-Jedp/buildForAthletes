import { User } from '../users'
import { ConditionalCapabilities, ConditionalCapabilitiesProperties } from '../athleticism/base/conditionalCapabilities'
import { CoordinativeCapabilities, CoordinativeCapabilitiesProperties } from '../athleticism/base/coordinativeCapabilities'
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

    public compareCapability(currentCapabilityValue: number, capabilityValueToCompare: number): number {
        return Math.abs(currentCapabilityValue - capabilityValueToCompare)
    }


    // ------------------------------------------
    // COMPARE CONDITIONAL CAPABILITES METHDOS 
    // ------------------------------------------
    public compareSpecificConditionalCapability(capability: string, conditionalCapabilitesToCompare: ConditionalCapabilities): number | null {
        const athleteConditionalCapabilities = this.conditionalCapabilities.getObject()
        const athleteToCompare = conditionalCapabilitesToCompare.getObject()
        if(!athleteToCompare[capability]) {
            return null
        }

        return this.compareCapability(athleteConditionalCapabilities[capability] || 0, athleteToCompare[capability] || 0)
    }

    public compareAllConditionalCapabilites(conditionalCapabilitesToCompare: ConditionalCapabilities): ConditionalCapabilitiesProperties {
        const comparedConditionalCapabilities: ConditionalCapabilitiesProperties = new ConditionalCapabilities({}).getObject() 
        const athleteConditionalCapabilities = this.conditionalCapabilities.getObject()
        const athleteToCompareConditionalCapabilities = conditionalCapabilitesToCompare.getObject()
        for(const capability of Object.keys(athleteConditionalCapabilities)) {
            comparedConditionalCapabilities[capability] = this.compareCapability(athleteConditionalCapabilities[capability] || 0, athleteToCompareConditionalCapabilities[capability] || 0)
        }
        return comparedConditionalCapabilities
    }

    // ------------------------------------------
    // COMPARE COORDINATIVE CAPABILITES METHDOS 
    // ------------------------------------------
    public compareSpecificCoordinativeCapability(capability: string, coordinativeCapabilities: CoordinativeCapabilities): number | null {
        const athleteCoordinativeCapabilities = this.coordinativeCapabilities.getObject()
        const athleteToCompare = coordinativeCapabilities.getObject()
        if(!athleteToCompare[capability]) {
            return null
        }
        return this.compareCapability(athleteCoordinativeCapabilities[capability] || 0, athleteToCompare[capability] || 0)
    }

    public compareAllCoordinativeCapabilities(coordinativeCapabilitiesToCompare: CoordinativeCapabilities): CoordinativeCapabilitiesProperties {
        const comparedCoordinativeCapabilities: CoordinativeCapabilitiesProperties = new CoordinativeCapabilities({}).getObject() 
        const athleteCoordinativeCapabilities = this.coordinativeCapabilities.getObject()
        const athleteToCompareCoordinativeCapabilities = coordinativeCapabilitiesToCompare.getObject()
        for(const capability of Object.keys(athleteCoordinativeCapabilities)) {
            comparedCoordinativeCapabilities[capability] = this.compareCapability(athleteCoordinativeCapabilities[capability] || 0, athleteToCompareCoordinativeCapabilities[capability] || 0)
        }
        return comparedCoordinativeCapabilities;
    }
}

export {
    Athlete,
    AthleteProperties
}