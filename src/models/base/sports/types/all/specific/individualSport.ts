import { SportType } from '../../base'
import { SportGeneralSkill, SPORT_GENERAL_SKILL_CATEGORIES } from '../../../generalSkills'

type IndividualSportSkills = {
    resilience: SportGeneralSkill
} 

class IndividualSport extends SportType<IndividualSportSkills> {
    public constructor() {
        super('INDIVIDUAL_SPORT', {
            resilience: {
                category: SPORT_GENERAL_SKILL_CATEGORIES.RANGE,
                value: 100
            }
        })
    }
}

export {
    IndividualSport,
    IndividualSportSkills
}
