

class ConditionalCapabilities {
    public strength: number
    public endurance: number
    public flexibility: number
    public speed: number

    public constructor(capabilities: {
        strength: number,
        endurance: number,
        flexibility: number,
        speed: number
    } ) {
        this.strength = capabilities.strength
        this.endurance = capabilities.endurance
        this.flexibility = capabilities.flexibility
        this.speed = capabilities.speed
    }
}

export {
    ConditionalCapabilities
}