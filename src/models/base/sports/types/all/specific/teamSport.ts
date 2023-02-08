import { SportType } from '../../base'
import { SportGeneralSkill, SPORT_GENERAL_SKILL_CATEGORIES } from '../../../generalSkills'

type TeamSportsSkills = {
    communication: SportGeneralSkill
} 

class TeamSport extends SportType<TeamSportsSkills> {
    public constructor() {
        super('TEAM_SPORT', {
            communication: {
                category: SPORT_GENERAL_SKILL_CATEGORIES.RANGE,
                value: 100
            }
        })
    }
}

export {
    TeamSport,
    TeamSportsSkills
}
