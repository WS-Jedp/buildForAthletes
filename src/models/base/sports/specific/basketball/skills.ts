
import { IndividualSport, IndividualSportSkills, TeamSport, TeamSportsSkills } from '../../types/all'
import { SPORT_TECHNICAL_SKILL_CATEGORIES, SportTechnicalSkill, OverallSportTechnicalSkill } from '../../techincalSkills'
import { SPORT_GENERAL_SKILL_CATEGORIES } from '../../generalSkills'
import { SPORT_PHYSICAL_SKILL_CATEGORIES, SPORT_PHYSICAL_MEASURE_FORMAT, SportPhysicalSkill } from '../../physicalSkills'

type BasketballGeneralSkills = TeamSportsSkills & IndividualSportSkills
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

const basketballGeneralSkills: BasketballGeneralSkills = {
    communication: {
        category: SPORT_GENERAL_SKILL_CATEGORIES.RANGE,
        value: 90
    },
    resilience: {
        category: SPORT_GENERAL_SKILL_CATEGORIES.RANGE,
        value: 80
    },
}


type BasketballTechnicalSkills = {
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

const basketballTechnicalSkills:BasketballTechnicalSkills = {
    shooting: {
        category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL,
        overall: 100,
        freeThrow: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        midRange: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 100
        },
        threePoint: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
    },
    finishing: {
        category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL,
        overall: 100,
        closeShot: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        dunk: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        layup: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        postControl: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        floater: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
    },
    playmaking: {
        category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL,
        overall: 100,
        ballHandling: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        passAccuracy: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.ACCURACY,
            value: 99
        },
        speedWithBall: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        vision: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
    },
    defense: {
        category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL,
        overall: 100,
        interiorDefense: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        perimeterDefense: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        steal: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        block: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        offensiveRebounding: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
        defensiveRebounding: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.RANGE,
            value: 99
        },
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
        },
        shooting: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL,
        },
        finishing: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL,

        },
        playmaking: {
            category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL,
        }
    }
}

type BasketballPhysicalSkills = {
    verticalJump?: SportPhysicalSkill
    horizontalJump?: SportPhysicalSkill
    acceleration?: SportPhysicalSkill
    footWork?: SportPhysicalSkill
}

const basketballPhysicalSkills: BasketballPhysicalSkills = {
    verticalJump: {
        category: SPORT_PHYSICAL_SKILL_CATEGORIES.ACCURACY,
        measureFormat: SPORT_PHYSICAL_MEASURE_FORMAT.CENTIMETERS,
        value: 120
    },
    horizontalJump: {
        category: SPORT_PHYSICAL_SKILL_CATEGORIES.ACCURACY,
        measureFormat: SPORT_PHYSICAL_MEASURE_FORMAT.CENTIMETERS,
        value: 120
    },
    acceleration: {
        category: SPORT_PHYSICAL_SKILL_CATEGORIES.ACCURACY,
        measureFormat: SPORT_PHYSICAL_MEASURE_FORMAT.KM_PER_HOUR,
        value: 72
    },
    footWork: {
        category: SPORT_PHYSICAL_SKILL_CATEGORIES.RANGE,
        value: 99
    },
}

type newBasketballPhysicalSkillsParameters = {
    verticalJump: {
        value?: number
    }
    horizontalJump:  {
        value?: number
    }
    acceleration: {
        value?: number
    }
    footWork: {
        value?: number
    }
}
function newBasketballPhysicalSkills( skills: newBasketballPhysicalSkillsParameters): BasketballPhysicalSkills {
    return {
        verticalJump: {
            category: SPORT_PHYSICAL_SKILL_CATEGORIES.ACCURACY,
            measureFormat: SPORT_PHYSICAL_MEASURE_FORMAT.CENTIMETERS,
            value: skills.verticalJump.value,
        },
        horizontalJump: {
            category: SPORT_PHYSICAL_SKILL_CATEGORIES.ACCURACY,
            measureFormat: SPORT_PHYSICAL_MEASURE_FORMAT.CENTIMETERS,
            value: skills.horizontalJump.value,
        },
        acceleration: {
            category: SPORT_PHYSICAL_SKILL_CATEGORIES.ACCURACY,
            measureFormat: SPORT_PHYSICAL_MEASURE_FORMAT.KM_PER_HOUR,
            value: skills.acceleration.value,
        },
        footWork: {
            category: SPORT_PHYSICAL_SKILL_CATEGORIES.ACCURACY,
            measureFormat: SPORT_PHYSICAL_MEASURE_FORMAT.RANGE,
            value: skills.footWork.value
        }
    }
}


export {
    BasketballPhysicalSkills, 
    BasketballTechnicalSkills, 
    BasketballGeneralSkills,
    basketballPhysicalSkills, 
    basketballTechnicalSkills, 
    BASKETBALL_SPORT_TYPES, 
    basketballGeneralSkills,
    newBasketballGeneralSkills,
    newBasketballSkillsParameters,
    newBasketballPhysicalSkills,
    newBasketballPhysicalSkillsParameters,
    newBasketballTechnicalSkills,
    newBasketballTechnicalSkillsParameters
}