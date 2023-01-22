import { ConditionalCapabilities } from '../../../athleticism/base/conditionalCapabilities'
import { CoordinativeCapabilities } from '../../../athleticism/base/coordinativeCapabilities'

const basketballConditionalCapabilities = new ConditionalCapabilities({
    strength: 80,
    endurance: 100,
    flexibility: 70,
    speed: 90
})

const basketballCoordinativeCapabilities = new CoordinativeCapabilities({
    movementControl: 100,
    adaptation: 100,
    orientation: 100,
    balance: 90,
    rhythm: 90,
    selfAnticipation: 90,
    externalAnticipation: 90,
    diferentation: 60,
    coordination: 100,
    agility: 90,
    motorLearning: 100
})

export {
    basketballConditionalCapabilities,
    basketballCoordinativeCapabilities
}