import { ConditionalCapabilities } from "models/base/athleticism/base/conditionalCapabilities";
import { CoordinativeCapabilities } from "models/base/athleticism/base/coordinativeCapabilities";
import { AthleteArchetype, AthleteArchetypeNames } from "../base";

const heightRange: [number, number] = [170, 210]
const weightRange: [number, number] = [70, 90]

const conditionalCapabilities = new ConditionalCapabilities({
    endurance: 72,
    flexibility: 60,
    speed: 99,
    strength: 72
})

const coordinativeCapabilites = new CoordinativeCapabilities({
    adaptation: 72,
    agility: 80,
    balance: 80,
    coordination: 90,
    diferentation: 60,
    externalAnticipation: 50,
    motorLearning: 60,
    movementControl: 90,
    orientation: 70,
    rhythm: 90,
    selfAnticipation: 60
})

class SpeedAthlete extends AthleteArchetype {
    public constructor() {
        super({
            name: AthleteArchetypeNames.RUNNER_ATHLETE,
            heightRange,
            weightRange,
            conditionalCapabilities,
            coordinativeCapabilites
        })
    }
}

const speedAthlete = new SpeedAthlete()

export default speedAthlete
export {
    SpeedAthlete
}