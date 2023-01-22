import { SportType } from '../../base'

type IndividualSportSkills = {
    resilience: number
} 

class IndividualSport extends SportType<IndividualSportSkills> {
    public constructor() {
        super('INDIVIDUAL_SPORT', {
            resilience: 100
        })
    }
}

export {
    IndividualSport,
    IndividualSportSkills
}
