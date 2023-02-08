import { ConditionalCapabilities } from "models/base/athleticism/base/conditionalCapabilities"
import { CoordinativeCapabilities } from "models/base/athleticism/base/coordinativeCapabilities"

enum AthleteArchetypeNames {
    FULL_ATHLETE = "FULL_ATHLETE",
    STRONG_ATHLETE = "STRONG_ATHLETE",
    RUNNER_ATHLETE = "RUNNER_ATHLETE",
    AGILE_ATHLETE = "AGILE_ATHLETE"
}

type AthleteArchetypeProperties = {
    name: AthleteArchetypeNames
    heightRange: [number, number]
    weightRange: [number, number]
    coordinativeCapabilites: CoordinativeCapabilities
    conditionalCapabilities: ConditionalCapabilities
}

class AthleteArchetype {

    protected _name: AthleteArchetypeNames
    protected _heightRange: [number, number]
    protected _weightRange: [number, number]

    protected _conditionalCapabilities: ConditionalCapabilities
    protected _coordinativeCapabilities: CoordinativeCapabilities

    public constructor(archetypeProperties: AthleteArchetypeProperties) {
        this._name = archetypeProperties.name
        this._heightRange = archetypeProperties.heightRange
        this._weightRange = archetypeProperties.weightRange
        this._conditionalCapabilities = archetypeProperties.conditionalCapabilities
        this._coordinativeCapabilities = archetypeProperties.coordinativeCapabilites
    }

    public get name():string { return this._name }
    public get heightRange():[number, number] { return this._heightRange }
    public get weightRange():[number, number] { return this._weightRange }
    public get conditionalCapabilities():ConditionalCapabilities { return this._conditionalCapabilities }
    public get coordinativeCapabilities():CoordinativeCapabilities { return this._coordinativeCapabilities }
}

export {
    AthleteArchetype,
    AthleteArchetypeProperties,
    AthleteArchetypeNames
}