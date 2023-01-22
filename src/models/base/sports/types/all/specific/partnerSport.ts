import { SportType } from '../../base'

type PartnerSportSkills = {
    communication: number
} 

class PartnerSport extends SportType<PartnerSportSkills> {
    public constructor() {
        super('PARTNER_SPORT', {
            communication: 60
        })
    }
}

export {
    PartnerSport,
    PartnerSportSkills
}
