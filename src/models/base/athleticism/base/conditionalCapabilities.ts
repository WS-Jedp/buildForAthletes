type ConditionalCapabilitiesProperties = {
    [key: string]: number | undefined
    strength?: number,
    endurance?: number,
    flexibility?: number,
    speed?: number
}

class ConditionalCapabilities {
    public strength?: number
    public endurance?: number
    public flexibility?: number
    public speed?: number

    public constructor(capabilities: ConditionalCapabilitiesProperties) {
        this.strength = capabilities.strength
        this.endurance = capabilities.endurance
        this.flexibility = capabilities.flexibility
        this.speed = capabilities.speed
    }

    public getObject(): ConditionalCapabilitiesProperties {
        return {
            endurance: this.endurance,
            flexibility: this.flexibility,
            speed: this.speed,
            strength: this.strength
        }
    }
}

export {
    ConditionalCapabilities,
    ConditionalCapabilitiesProperties
}