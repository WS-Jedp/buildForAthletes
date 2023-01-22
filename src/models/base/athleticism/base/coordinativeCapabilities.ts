enum COORDINATIVE_CAPABILITIES_CATEGORIES {
  GENERAL = "GENERAL",
  SPECIAL = "SPECIAL",
  COMPLEX = "COMPLEX",
}

type CoordinativeCapability = {
  category: COORDINATIVE_CAPABILITIES_CATEGORIES
  value: number
}

type CoordinativeCapabilitiesProperties = {
  movementControl: number
  adaptation: number
  orientation: number
  balance: number
  rhythm: number
  selfAnticipation: number
  externalAnticipation: number
  diferentation: number
  coordination: number
  agility: number
  motorLearning: number
}

class CoordinativeCapabilities {
  // General capabilities
  public movementControl: CoordinativeCapability
  public adaptation: CoordinativeCapability

  // Special capabilities
  public orientation: CoordinativeCapability
  public balance: CoordinativeCapability
  public rhythm: CoordinativeCapability
  public selfAnticipation: CoordinativeCapability
  public externalAnticipation: CoordinativeCapability
  public diferentation: CoordinativeCapability
  public coordination: CoordinativeCapability

  // Complex capabilites
  public agility: CoordinativeCapability
  public motorLearning: CoordinativeCapability

  public constructor(capabilities: CoordinativeCapabilitiesProperties) {
    this.movementControl = {
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.GENERAL,
      value: capabilities.movementControl,
    }
    this.adaptation = {
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.GENERAL,
      value: capabilities.adaptation,
    }

    // Special
    this.orientation = {
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
      value: capabilities.orientation,
    }
    this.balance = {
        category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
        value: capabilities.balance,
    }
    this.rhythm = {
        category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
        value: capabilities.rhythm,
    }
    this.selfAnticipation = {
        category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
        value: capabilities.selfAnticipation,
    }
    this.externalAnticipation = {
        category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
        value: capabilities.externalAnticipation,
    }
    this.diferentation = {
        category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
        value: capabilities.movementControl,
    }
    this.coordination = {
        category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
        value: capabilities.coordination,
    }

    // Complex
    this.agility = {
        category: COORDINATIVE_CAPABILITIES_CATEGORIES.COMPLEX,
        value: capabilities.agility,
    }
    this.motorLearning = {
        category: COORDINATIVE_CAPABILITIES_CATEGORIES.COMPLEX,
        value: capabilities.agility,
    }
  }
}

export {
  CoordinativeCapabilities,
  COORDINATIVE_CAPABILITIES_CATEGORIES,
  CoordinativeCapability,
  CoordinativeCapabilitiesProperties
}
