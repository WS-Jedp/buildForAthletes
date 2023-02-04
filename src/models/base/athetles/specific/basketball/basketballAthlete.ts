import { ConditionalCapabilities } from 'models/base/athleticism/base/conditionalCapabilities'
import { CoordinativeCapabilities } from 'models/base/athleticism/base/coordinativeCapabilities'
import { User } from 'models/base/users'
import { BasketballGeneralSkills, BasketballPhysicalSkills, BasketballTechnicalSkills, newBasketballGeneralSkills, newBasketballPhysicalSkills, newBasketballTechnicalSkills } from '../../../sports/specific/basketball/skills'
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


    /**
     * COMPARE METHODS
     * 
     * All these methods will help us to know the difference between some skill or multiple skills between an athlete and other 
     * 
     */

    // Simple compare method
    public compareSkill(athleteSkill: number, skillToCompare: number): number {
        return Math.abs(athleteSkill - skillToCompare)
    }


    // ------------------------------------------
    // COMPARE GENERAL SKILLS METHDOS 
    // ------------------------------------------
    public compareSpecificGeneralSkill(skill: string, skillsToCompare: BasketballGeneralSkills): number | null {
        if(!this.athleteBasketballGeneralSkills[skill]) return null
        return this.compareSkill(this.athleteBasketballGeneralSkills[skill].value || 0, skillsToCompare[skill].value || 0)
    }

    public compareAllGeneralSkills(athleteSkillsToCompare: BasketballGeneralSkills) {
        const comparedGeneralSkills: BasketballGeneralSkills = newBasketballGeneralSkills({
            communication: 0,
            resilience: 0
        })
        for(const skill of Object.keys(athleteSkillsToCompare)) {
            comparedGeneralSkills[skill].value = this.compareSkill(this.athleteBasketballGeneralSkills[skill].value || 0, athleteSkillsToCompare[skill].value || 0)
        }
        return comparedGeneralSkills
    }


    // ------------------------------------------
    // COMPARE PHYSICAL SKILLS METHDOS 
    // ------------------------------------------
    public compareSpecificPhysicalSkill(skill: string, skillsToCompare: BasketballPhysicalSkills): number | null {
        if(!this.athleteBasketballPhysicalSkills[skill]) return null
        return this.compareSkill(this.athleteBasketballPhysicalSkills[skill].value || 0, skillsToCompare[skill].value || 0)
    }

    public compareAllPhysicalSkills(athleteSkillsToCompare: BasketballPhysicalSkills): BasketballPhysicalSkills {
        const comparedPhysicalSkills: BasketballPhysicalSkills = newBasketballPhysicalSkills({})
        for(const skill of Object.keys(athleteSkillsToCompare)) {
            comparedPhysicalSkills[skill].value = this.compareSkill(this.athleteBasketballPhysicalSkills[skill].value || 0, athleteSkillsToCompare[skill].value || 0)
        }
        return comparedPhysicalSkills
    }


    // ------------------------------------------
    // COMPARE TECHNICAL SKILLS METHDOS 
    // ------------------------------------------
    public compareSpecificTechnicalSkill(skill: string, skillsToCompare: BasketballPhysicalSkills): number | null {
        if(!this.athleteBasketballPhysicalSkills[skill]) return null
        return this.compareSkill(this.athleteBasketballPhysicalSkills[skill].value || 0, skillsToCompare[skill].value || 0)
    }

    public compareAllTechnicalSkills(athleteSkillsToCompare: BasketballTechnicalSkills): BasketballTechnicalSkills {
        const comparedTechnicalSkills: BasketballTechnicalSkills = newBasketballTechnicalSkills({
            defense: {},
            finishing: {},
            playmaking: {},
            shooting: {}
        })

        for(const skill of Object.keys(athleteSkillsToCompare)) {
            for(const specificSkill of Object.keys(comparedTechnicalSkills[skill])) {
                comparedTechnicalSkills[skill][specificSkill].value = this.compareSkill(this.athleteBasketballTechnicalSkills[skill][specificSkill].value || 0, athleteSkillsToCompare[skill][specificSkill].value || 0)
            }
            comparedTechnicalSkills[skill].overall = this.compareSkill(comparedTechnicalSkills[skill].overall || 0, athleteSkillsToCompare[skill].overall || 0)
        }
        return comparedTechnicalSkills
    }
}


export {
    BasketballAthlete
}