
import { IndividualSport, IndividualSportSkills, TeamSport, TeamSportsSkills } from '../../types/all'
import { SPORT_TECHNICAL_SKILL_CATEGORIES, SportTechnicalSkill } from '../../techincalSkills'

type BasketballGeneralSkills = TeamSportsSkills & IndividualSportSkills
const BASKETBALL_SPORT_TYPES = [TeamSport.getName(), IndividualSport.getName()]

const basketballGeneralSkills: BasketballGeneralSkills = {
    communication: 90,
    resilience: 80
}

type BasketballTechnicalSkills = {
    shooting: SportTechnicalSkill & {
        midRange: number
        threePoint: number
        freeThrow: number
    }
    finishing: SportTechnicalSkill & {
        closeShot: number
        layup: number
        dunk: number
        postControl: number
    }
    playmaking: SportTechnicalSkill & {
        passAccuracy: number
        ballHandling: number
        speedWithBall: number
        vision: number
    }
    defense: SportTechnicalSkill & {
        interiorDefense: number
        perimeterDefense: number
        steal: number
        block: number
        offensiveRebounding: number
        defensiveRebounding: number
    }
}

const basketballTechnicalSkills:BasketballTechnicalSkills = {
    shooting: {
        category: SPORT_TECHNICAL_SKILL_CATEGORIES.ACCURACY,
        midRange: 100,
        freeThrow: 100,
        threePoint: 100,
        overall: 100
    },
    finishing: {
        category: SPORT_TECHNICAL_SKILL_CATEGORIES.ACCURACY,
        closeShot: 100,
        dunk: 100,
        layup: 100,
        postControl: 100,
        overall: 100
    },
    playmaking: {
        category: SPORT_TECHNICAL_SKILL_CATEGORIES.GENERAL,
        ballHandling: 100,
        passAccuracy: 100,
        speedWithBall: 100,
        vision: 100,
        overall: 100,
    },
    defense: {
        category: SPORT_TECHNICAL_SKILL_CATEGORIES.GENERAL,
        interiorDefense: 100,
        perimeterDefense: 100,
        steal: 100,
        block: 100,
        offensiveRebounding: 100,
        defensiveRebounding: 100,
        overall: 100
    }
}

type BasketballPhysicalSkills = {
    verticalJump: number
    horizontalJump: number
    acceleration: number
    footWork: number
}

const basketballPhysicalSkills: BasketballPhysicalSkills = {
    verticalJump: 100,
    horizontalJump: 100,
    acceleration: 100,
    footWork: 100,
}

export {
    BasketballPhysicalSkills, 
    BasketballTechnicalSkills, 
    BasketballGeneralSkills,
    basketballPhysicalSkills, 
    basketballTechnicalSkills, 
    BASKETBALL_SPORT_TYPES, 
    basketballGeneralSkills
}