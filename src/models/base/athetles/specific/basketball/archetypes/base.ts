import AthleteArchetype from "models/base/athetles/archetypes";
import { BasketballGeneralSkills, BasketballPhysicalSkills, BasketballTechnicalSkills } from "models/base/sports/specific/basketball/skills";

type BasketballArchetypeSkills = {
    general: BasketballGeneralSkills,
    technical: BasketballTechnicalSkills,
    physical: BasketballPhysicalSkills
}

class BasketballAthleteArchetype  {
    protected _name: string
    protected _generalSkills: BasketballGeneralSkills
    protected _technicalSkills: BasketballTechnicalSkills
    protected _physicalSkills: BasketballPhysicalSkills
    protected _athleticArchetypes: AthleteArchetype[] = []

    public constructor(name: string, athleteArchetypes: AthleteArchetype[], skills: BasketballArchetypeSkills) {
        this._name = name
        this._generalSkills = skills.general
        this._technicalSkills = skills.technical
        this._physicalSkills = skills.physical
        this._athleticArchetypes = athleteArchetypes
    }

    public get name(): string { return this._name }
    public get generalSkills(): BasketballGeneralSkills { return this._generalSkills }
    public get technicalSkills(): BasketballTechnicalSkills { return this._technicalSkills }
    public get physicalSkills(): BasketballPhysicalSkills { return this._physicalSkills }
}

export {
    BasketballAthleteArchetype,
    BasketballArchetypeSkills
}