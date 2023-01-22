type MainAthleticismComponents = {
    strength: number
    endurance: number
    flexibility: number
    speed: number
}

class AthleticismComponents {
    public strength: number
    public endurance: number
    public flexibility: number
    public speed: number

    public constructor(athleticismComponents: MainAthleticismComponents) {
        this.strength = athleticismComponents.strength
        this.endurance = athleticismComponents.endurance
        this.flexibility = athleticismComponents.flexibility
        this.speed = athleticismComponents.speed
    }
}