import { ConditionalCapabilities } from '../athleticism/base/conditionalCapabilities'
import { CoordinativeCapabilities } from '../athleticism/base/coordinativeCapabilities'

class Sport<SportGeneralSkills, SportTechnicalSkills, SportPhysicalSkills> {
    protected name: string
    protected description: string

    protected requiredConditionalCapabilities: ConditionalCapabilities
    protected requiredCoordinativeCapabilities: CoordinativeCapabilities

    protected types: string[] = []
    protected sportGeneralSkillsRequired: SportGeneralSkills
    protected sportTechnicalSkillsRequired: SportTechnicalSkills
    protected sportPhysicalSkillsRequired: SportPhysicalSkills

    public constructor(properties: {
        name: string,
        description: string,
        types: string[],
        conditionalCapabilites: ConditionalCapabilities,
        coordinativeCapabitlies: CoordinativeCapabilities,
        generalSkills: SportGeneralSkills,
        technicalSkills: SportTechnicalSkills,
        physicalSkils: SportPhysicalSkills,
    } ) {
        this.name = properties.name
        this.description = properties.description

        this.requiredConditionalCapabilities = properties.conditionalCapabilites
        this.requiredCoordinativeCapabilities = properties.coordinativeCapabitlies

        this.types = properties.types
        this.sportGeneralSkillsRequired = properties.generalSkills
        this.sportTechnicalSkillsRequired = properties.technicalSkills
        this.sportPhysicalSkillsRequired = properties.physicalSkils
    }

    public getName():string { return this.name }
    public getDescription():string { return this.description }
    public getTypes():string[] { return this.types }

    public get conditionalCapabilitiesRequired(): ConditionalCapabilities { return this.requiredConditionalCapabilities }
    public get coordinativeCapabilitiesRequired(): CoordinativeCapabilities { return this.requiredCoordinativeCapabilities }
    public get generalSkillsRequired():SportGeneralSkills { return this.sportGeneralSkillsRequired }
    public get technicalSkillsRequired():SportTechnicalSkills { return this.sportTechnicalSkillsRequired }
    public get physicalSkillsRequired():SportPhysicalSkills { return this.sportPhysicalSkillsRequired }

    public isType(possibleType: string): boolean {
        return this.types.some(type => type === possibleType)
    }
}

export { Sport }