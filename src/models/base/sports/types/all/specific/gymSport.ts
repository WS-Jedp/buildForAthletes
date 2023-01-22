import { SportType } from '../../base'

type GymSportSkills = {
    strength: number
    flexibility: number
    agility: number
    balance: number
} 

class GymSport extends SportType<GymSportSkills> {
    public constructor() {
        super('TEAM_SPORT', {
            strength: 100,
            flexibility: 60,
            agility: 90,
            balance: 70,
        })
    }
}

export {
    GymSport,
    GymSportSkills
}
