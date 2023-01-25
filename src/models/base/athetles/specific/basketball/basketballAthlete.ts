import { ConditionalCapabilities } from 'models/base/athleticism/base/conditionalCapabilities'
import { CoordinativeCapabilities } from 'models/base/athleticism/base/coordinativeCapabilities'
import { User } from 'models/base/users'
import { BasketballGeneralSkills, BasketballPhysicalSkills, BasketballTechnicalSkills } from '../../../sports/specific/basketball/skills'
import { Athlete, AthleteProperties } from '../../base'
import { BasketballAthleteArchetype } from './archetypes/base'

class BasketballAthlete {

    protected athleteBasketballGeneralSkills: BasketballGeneralSkills
    protected athleteBasketballTechnicalSkills: BasketballTechnicalSkills
    protected athleteBasketballPhysicalSkills: BasketballPhysicalSkills
    protected basketballArchetypeToFollow?: BasketballAthleteArchetype

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

    public getAthlete():Athlete | undefined { return this.athlete }
    public setAthlete(athlete: Athlete) { this.athlete = athlete }

    public setArchetype(archetype: BasketballAthleteArchetype) { this.basketballArchetypeToFollow = archetype }
    public getArchetype(): BasketballAthleteArchetype | undefined { return this.basketballArchetypeToFollow }
}

// const juan = new BasketballAthlete()

export {
    BasketballAthlete
}