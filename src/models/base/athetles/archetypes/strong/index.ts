import { ConditionalCapabilities } from "models/base/athleticism/base/conditionalCapabilities";
import { CoordinativeCapabilities } from "models/base/athleticism/base/coordinativeCapabilities";
import { AthleteArchetype, AthleteArchetypeNames } from "../base";

const heightRange: [number, number] = [170, 210]
const weightRange: [number, number] = [80, 90]

const conditionalCapabilities = new ConditionalCapabilities({
    endurance: 60,
    flexibility: 40,
    speed: 60,
    strength: 99
})

const coordinativeCapabilites = new CoordinativeCapabilities({
    adaptation: 30,
    agility: 30,
    balance: 60,
    coordination: 60,
    diferentation: 90,
    externalAnticipation: 50,
    motorLearning: 60,
    movementControl: 90,
    orientation: 50,
    rhythm: 60,
    selfAnticipation: 60
})

class StrongAthlete extends AthleteArchetype {
    public constructor() {
        super({
            name: AthleteArchetypeNames.STRONG_ATHLETE,
            heightRange,
            weightRange,
            conditionalCapabilities,
            coordinativeCapabilites
        })
    }
}

const strongAthlete = new StrongAthlete()

export default strongAthlete
export {
    StrongAthlete
}