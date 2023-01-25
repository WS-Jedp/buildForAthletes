import { Sport }  from '../../base'
import { basketballConditionalCapabilities, basketballCoordinativeCapabilities } from './capabilities'
import {
    basketballGeneralSkills, 
    BASKETBALL_SPORT_TYPES, 
    basketballTechnicalSkills, 
    BasketballPhysicalSkills, 
    BasketballGeneralSkills, 
    BasketballTechnicalSkills, 
    basketballPhysicalSkills 
} from './skills'

class Basketball extends Sport<BasketballGeneralSkills, BasketballTechnicalSkills, BasketballPhysicalSkills> {
    public constructor() {
        super({
            name: 'Basketball',
            description: 'The sport who most represent the art',
            conditionalCapabilites: basketballConditionalCapabilities,
            coordinativeCapabitlies: basketballCoordinativeCapabilities,
            types: BASKETBALL_SPORT_TYPES,
            generalSkills: basketballGeneralSkills,
            technicalSkills: basketballTechnicalSkills,
            physicalSkils: basketballPhysicalSkills
        })
    }
}

const basketball = new Basketball()

export default basketball