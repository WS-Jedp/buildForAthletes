import { SpeedAthlete } from 'models/base/athetles/archetypes'
import { newBasketballGeneralSkills, newBasketballPhysicalSkills, newBasketballTechnicalSkills } from 'models/base/sports/specific/basketball/skills'
import { BasketballAthleteArchetype } from '../base'

class ShooterArchetype extends BasketballAthleteArchetype {
    public constructor() {
        super("SHOOTER" ,[SpeedAthlete], {
            general: newBasketballGeneralSkills({
                communication: 60,
                resilience: 90
            }),
            physical: newBasketballPhysicalSkills({
                acceleration: 80,
                footWork: 80,
                horizontalJump: 50,
                verticalJump: 50
            }),
            technical: newBasketballTechnicalSkills({
                defense: {},
                finishing: {
                    postControl: 90
                },
                playmaking: {
                    ballHandling: 70,
                    speedWithBall: 81,
                },
                shooting: {
                    freeThrow: 90,
                    midRange: 99,
                    threePoint: 90,
                    overall: 90,
                }
            })
        })
    }
}

const shooter = new ShooterArchetype()

export default shooter
export {
    ShooterArchetype
}