type ConditionalCapabilitiesProperties = {
    strength: number,
    endurance: number,
    flexibility: number,
    speed: number
}

class ConditionalCapabilities {
    public strength: number
    public endurance: number
    public flexibility: number
    public speed: number

    public constructor(capabilities: ConditionalCapabilitiesProperties) {
        this.strength = capabilities.strength
        this.endurance = capabilities.endurance
        this.flexibility = capabilities.flexibility
        this.speed = capabilities.speed
    }
}

export {
    ConditionalCapabilities,
    ConditionalCapabilitiesProperties
}