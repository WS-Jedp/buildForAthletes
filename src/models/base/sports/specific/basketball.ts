import { Sport }  from '../base'
import { TeamSportsSkills, TeamSport, IndividualSportSkills } from '../types/all'

type BasketballGeneralSkills = TeamSportsSkills & IndividualSportSkills

class Basketball extends Sport<BasketballGeneralSkills> {
    public constructor() {
        super({
            name: 'Basketball',
            types: [TeamSport.getName()],
            description: 'The sport who most represent the art',
            generalSkills: {
                communication: 90,
                resilience: 80
            }
        }, )
    }
}

const basketball = new Basketball()

export default basketball

export {
    Basketball,
    BasketballGeneralSkills
}