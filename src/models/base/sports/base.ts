
class Sport<SportGeneralSkills> {
    protected name: string
    protected description: string
    protected types: string[] = []
    protected sportGeneralSkills: SportGeneralSkills

    public constructor(properties: {
        name: string,
        description: string,
        types: string[]
        generalSkills: SportGeneralSkills
    } ) {
        this.name = properties.name
        this.description = properties.description
        this.types = properties.types
        this.sportGeneralSkills = properties.generalSkills
    }

    public getName():string { return this.name }
    public getDescription():string { return this.description }
    public getTypes():string[] { return this.types }

    public get skills():SportGeneralSkills { return this.sportGeneralSkills }

    public isType(possibleType: string): boolean {
        return this.types.some(type => type === possibleType)
    }
  
}

export { Sport }