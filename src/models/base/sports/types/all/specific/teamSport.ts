import { SportType } from '../../base'

type TeamSportsSkills = {
    communication: number
} 

class TeamSport extends SportType<TeamSportsSkills> {
    public constructor() {
        super('TEAM_SPORT', {
            communication: 100
        })
    }
}

export {
    TeamSport,
    TeamSportsSkills
}
