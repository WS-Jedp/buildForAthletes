import { ConditionalCapabilities } from 'models/base/athleticism/base/conditionalCapabilities'
import { CoordinativeCapabilities } from 'models/base/athleticism/base/coordinativeCapabilities'
import { User } from 'models/base/users'
import { BasketballGeneralSkills, BasketballPhysicalSkills, BasketballTechnicalSkills } from '../../sports/specific/basketball/skills'
import { Athlete, AthleteProperties } from '../base'

class BasketballAthlete {

    protected athleteBasketballGeneralSkills?: BasketballGeneralSkills
    protected athleteBasketballTechnicalSkills?: BasketballTechnicalSkills
    protected athleteBasketballPhysicalSkills?: BasketballPhysicalSkills

    protected athlete?: Athlete

    public constructor( skills: {
        general: BasketballGeneralSkills,
        technical: BasketballTechnicalSkills,
        physical: BasketballPhysicalSkills
    }, athlete?: Athlete) {
        this.athleteBasketballGeneralSkills = skills.general
        this.athleteBasketballTechnicalSkills = skills.technical
        this.athleteBasketballPhysicalSkills = skills.physical
        this.athlete = athlete
    }
}

// const juan = new BasketballAthlete()

export {
    BasketballAthlete
}