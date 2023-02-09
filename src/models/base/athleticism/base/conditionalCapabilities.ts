import Capability from "./capability"

type ConditionalCapabilitiesProperties = {
    [key: string]: number | undefined
    strength?: number,
    endurance?: number,
    flexibility?: number,
    speed?: number
}

enum CONDITIONAL_CAPABILITIES_NAMES {
    STRENGTH = "STRENGTH",
    ENDURANCE = "ENDURANCE",
    FLEXIBILITY = "FLEXIBILITY",
    SPEED = "SPEED",
}

class ConditionalCapabilities {
    public strength: Capability
    public endurance: Capability
    public flexibility: Capability
    public speed: Capability

    public constructor(capabilities: ConditionalCapabilitiesProperties) {
        this.strength = new Capability({
            name: CONDITIONAL_CAPABILITIES_NAMES.STRENGTH,
            value: capabilities.strength
        })
        this.endurance = new Capability({
            name: CONDITIONAL_CAPABILITIES_NAMES.ENDURANCE,
            value: capabilities.endurance
        })
        this.flexibility = new Capability({
            name: CONDITIONAL_CAPABILITIES_NAMES.FLEXIBILITY,
            value: capabilities.flexibility
        })
        this.speed = new Capability({
            name: CONDITIONAL_CAPABILITIES_NAMES.SPEED,
            value: capabilities.speed
        })
    }

    public getObject(): ConditionalCapabilitiesProperties {
        return {
            endurance: this.endurance.value,
            flexibility: this.flexibility.value,
            speed: this.speed.value,
            strength: this.strength.value
        }
    }

    public getCapabilitesNames() {
        return {
            endurance: this.endurance.name,
            flexibility: this.flexibility.name,
            speed: this.speed.name,
            strength: this.strength.name
        }
    }
}

export {
    ConditionalCapabilities,
    ConditionalCapabilitiesProperties,
    CONDITIONAL_CAPABILITIES_NAMES
}