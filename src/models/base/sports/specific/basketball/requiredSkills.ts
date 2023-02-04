import { BasketballGeneralSkills, BasketballPhysicalSkills, BasketballTechnicalSkills, newBasketballGeneralSkills, newBasketballPhysicalSkills, newBasketballTechnicalSkills } from './skills'

const basketballGeneralSkills: BasketballGeneralSkills = newBasketballGeneralSkills({
    communication: 90,
    resilience: 80
}) 

const basketballTechnicalSkills:BasketballTechnicalSkills = newBasketballTechnicalSkills({
    defense: {},
    finishing: {},
    playmaking: {},
    shooting: {}
})


const basketballPhysicalSkills: BasketballPhysicalSkills = newBasketballPhysicalSkills({
    acceleration: 90,
    footWork: 90,
    horizontalJump: 60,
    verticalJump: 70
})

export {
    basketballGeneralSkills,
    basketballPhysicalSkills,
    basketballTechnicalSkills
}