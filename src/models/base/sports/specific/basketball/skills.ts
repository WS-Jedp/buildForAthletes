
import { IndividualSport, IndividualSportSkills, TeamSport, TeamSportsSkills } from '../../types/all'
import { SPORT_TECHNICAL_SKILL_CATEGORIES, SportTechnicalSkill, OverallSportTechnicalSkill } from '../../techincalSkills'
import { SportGeneralSkill, SPORT_GENERAL_SKILL_CATEGORIES } from '../../generalSkills'
import { SPORT_PHYSICAL_SKILL_CATEGORIES, SPORT_PHYSICAL_MEASURE_FORMAT, SportPhysicalSkill } from '../../physicalSkills'

type BasketballGeneralSkills = {
    [key: string]: SportGeneralSkill
} & TeamSportsSkills & IndividualSportSkills
const BASKETBALL_SPORT_TYPES = [TeamSport.getName(), IndividualSport.getName()]


type newBasketballSkillsParameters = { communication: number, resilience: number }
function newBasketballGeneralSkills( skills: newBasketballSkillsParameters): BasketballGeneralSkills {
    return {
        communication: {
            category: SPORT_GENERAL_SKILL_CATEGORIES.RANGE,
            value: skills.communication
        },
        resilience: {
            category: SPORT_GENERAL_SKILL_CATEGORIES.RANGE,
            value: skills.resilience
        },
    }
}


type BasketballTechnicalSkills = {
    [key: string]: OverallSportTechnicalSkill & {
        [key: string]: SportTechnicalSkill | any
    }
} & {
    shooting: OverallSportTechnicalSkill & {
        midRange?: SportTechnicalSkill
        threePoint?: SportTechnicalSkill
        freeThrow?: SportTechnicalSkill
    }
    finishing: OverallSportTechnicalSkill & {
        closeShot?: SportTechnicalSkill
        layup?: SportTechnicalSkill
        dunk?: SportTechnicalSkill
        postControl?: SportTechnicalSkill
        floater?: SportTechnicalSkill
    }
    playmaking: OverallSportTechnicalSkill & {
        passAccuracy?: SportTechnicalSkill
        ballHandling?: SportTechnicalSkill
        speedWithBall?: SportTechnicalSkill
        vision?: SportTechnicalSkill
    }
    defense: OverallSportTechnicalSkill & {
        interiorDefense?: SportTechnicalSkill
        perimeterDefense?: SportTechnicalSkill
        steal?: SportTechnicalSkill
        block?: SportTechnicalSkill
        offensiveRebounding?: SportTechnicalSkill
        defensiveRebounding?: SportTechnicalSkill
    }
}


type newBasketballTechnicalSkillsParameters = {
    shooting: {
        overall?: number
        midRange?: number
        threePoint?: number
        freeThrow?: number
    }
    finishing:  {
        overall?: number
        closeShot?: number
        layup?: number
        dunk?: number
        postControl?: number
        floater?: number
    }
    playmaking: {
        overall?: number
        passAccuracy?: number
        ballHandling?: number
        speedWithBall?: number
        vision?: number
    }
    defense: {
        overall?: number
        interiorDefense?: number
        perimeterDefense?: number
        steal?: number
        block?: number
        offensiveRebounding?: number
        defensiveRebounding?: number
    }
}
function newBasketballTechnicalSkills( skills: newBasketballTechnicalSkillsParameters): BasketballTechnicalSkills {
    return {
        defense: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL,
            overall: skills.defense.overall,
            block: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.defense.block
            },
            defensiveRebounding: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.defense.defensiveRebounding
            },
            offensiveRebounding: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.defense.offensiveRebounding
            },
            interiorDefense: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.defense.interiorDefense
            },
            perimeterDefense: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.defense.perimeterDefense
            },
            steal: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.defense.steal
            }
        },
        shooting: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL,
            overall: skills.shooting.overall,
            freeThrow: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.shooting.freeThrow
            },
            midRange: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.shooting.midRange,
            },
            threePoint: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.shooting.threePoint
            }
        },
        finishing: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL,
            overall: skills.finishing.overall,
            closeShot: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.finishing.closeShot,
            },
            dunk: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.finishing.dunk,
            },
            floater: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.finishing.floater,
            },
            layup: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.finishing.layup,
            },
            postControl: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.finishing.postControl,
            }
        },
        playmaking: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL,
            overall: skills.playmaking.overall,
            ballHandling: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.playmaking.ballHandling,
            },
            passAccuracy: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.ACCURACY,
                value: skills.playmaking.passAccuracy
            },
            speedWithBall: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.playmaking.speedWithBall
            },
            vision: {
                category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
                value: skills.playmaking.vision
            },
            
        }
    }
}

type BasketballPhysicalSkills = {
    [key: string]: SportPhysicalSkill 
} & {
    verticalJump?: SportPhysicalSkill
    horizontalJump?: SportPhysicalSkill
    acceleration?: SportPhysicalSkill
    footWork?: SportPhysicalSkill
}

type newBasketballPhysicalSkillsParameters = {
    verticalJump?: number
    horizontalJump?: number
    acceleration?: number
    footWork?: number
}
function newBasketballPhysicalSkills( skills: newBasketballPhysicalSkillsParameters): BasketballPhysicalSkills {
    return {
        verticalJump: {
            category: SPORT_PHYSICAL_SKILL_CATEGORIES.ACCURACY,
            measureFormat: SPORT_PHYSICAL_MEASURE_FORMAT.CENTIMETERS,
            value: skills.verticalJump,
        },
        horizontalJump: {
            category: SPORT_PHYSICAL_SKILL_CATEGORIES.ACCURACY,
            measureFormat: SPORT_PHYSICAL_MEASURE_FORMAT.CENTIMETERS,
            value: skills.horizontalJump,
        },
        acceleration: {
            category: SPORT_PHYSICAL_SKILL_CATEGORIES.ACCURACY,
            measureFormat: SPORT_PHYSICAL_MEASURE_FORMAT.KM_PER_HOUR,
            value: skills.acceleration,
        },
        footWork: {
            category: SPORT_PHYSICAL_SKILL_CATEGORIES.ACCURACY,
            measureFormat: SPORT_PHYSICAL_MEASURE_FORMAT.RANGE,
            value: skills.footWork
        }
    }
}


export {
    BasketballPhysicalSkills, 
    BasketballTechnicalSkills, 
    BasketballGeneralSkills,
    BASKETBALL_SPORT_TYPES, 
    newBasketballGeneralSkills,
    newBasketballSkillsParameters,
    newBasketballPhysicalSkills,
    newBasketballPhysicalSkillsParameters,
    newBasketballTechnicalSkills,
    newBasketballTechnicalSkillsParameters
}