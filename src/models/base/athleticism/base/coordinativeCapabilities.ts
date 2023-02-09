import { Capability } from './capability'
enum COORDINATIVE_CAPABILITIES_CATEGORIES {
  GENERAL = "GENERAL",
  SPECIAL = "SPECIAL",
  COMPLEX = "COMPLEX",
}

enum COORDINATIVE_CAPABILITIES_NAMES {
  MOVEMENT_CONTROL = "MOVEMENT_CONTROL",
  ADAPTATION = "ADAPTATION",
  ORIENTATION = "ORIENTATION",
  BALANCE = "BALANCE",
  RHYTHM = "RHYTHM",
  SELF_ANTICIPATION = "SELF_ANTICIPATION",
  EXTERNAL_ANTICIPATION = "EXTERNAL_ANTICIPATION",
  DIFERENTATION = "DIFERENTATION",
  COORDINATION = "COORDINATION",
  AGILITY = "DIFERENTATION",
  MOTOR_LEARNING = "MOTOR_LEARNING"
}

type CoordinativeCapabilitiesProperties = {
  [key: string]: number | undefined
  movementControl?: number
  adaptation?: number
  orientation?: number
  balance?: number
  rhythm?: number
  selfAnticipation?: number
  externalAnticipation?: number
  diferentation?: number
  coordination?: number
  agility?: number
  motorLearning?: number
}

class CoordinativeCapabilities {
  // General capabilities
  public movementControl: Capability
  public adaptation: Capability

  // Special capabilities
  public orientation: Capability
  public balance: Capability
  public rhythm: Capability
  public selfAnticipation: Capability
  public externalAnticipation: Capability
  public diferentation: Capability
  public coordination: Capability

  // Complex capabilites
  public agility: Capability
  public motorLearning: Capability

  public constructor(capabilities: CoordinativeCapabilitiesProperties) {
    this.movementControl = new Capability({
      name: COORDINATIVE_CAPABILITIES_NAMES.MOVEMENT_CONTROL,
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.GENERAL,
      value: capabilities.movementControl
    })

    this.adaptation = new Capability({
      name: COORDINATIVE_CAPABILITIES_NAMES.ADAPTATION,
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.GENERAL,
      value: capabilities.adaptation,
    })

    // Special
    this.orientation = new Capability({
      name: COORDINATIVE_CAPABILITIES_NAMES.ORIENTATION,
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
      value: capabilities.orientation,
    })
    this.balance = new Capability({
      name: COORDINATIVE_CAPABILITIES_NAMES.BALANCE,
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
      value: capabilities.balance,
  })
    this.rhythm = new Capability({
      name: COORDINATIVE_CAPABILITIES_NAMES.RHYTHM,
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
      value: capabilities.rhythm,
  })
    this.selfAnticipation = new Capability({
      name: COORDINATIVE_CAPABILITIES_NAMES.SELF_ANTICIPATION,
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
      value: capabilities.selfAnticipation,
  })
    this.externalAnticipation = new Capability({
      name: COORDINATIVE_CAPABILITIES_NAMES.EXTERNAL_ANTICIPATION,
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
      value: capabilities.externalAnticipation,
  })
    this.diferentation = new Capability({
      name: COORDINATIVE_CAPABILITIES_NAMES.DIFERENTATION,
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
      value: capabilities.movementControl,
  })
    this.coordination = new Capability({
      name: COORDINATIVE_CAPABILITIES_NAMES.COORDINATION,
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.SPECIAL,
      value: capabilities.coordination,
  })

    // Complex
    this.agility = new Capability({
      name: COORDINATIVE_CAPABILITIES_NAMES.AGILITY,
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.COMPLEX,
      value: capabilities.agility,
  })
    this.motorLearning = new Capability({
      name: COORDINATIVE_CAPABILITIES_NAMES.MOTOR_LEARNING,
      category: COORDINATIVE_CAPABILITIES_CATEGORIES.COMPLEX,
      value: capabilities.agility,
    })
  }

  public getObject(): CoordinativeCapabilitiesProperties {
    return {
        adaptation: this.adaptation.value,
        agility: this.adaptation.value,
        balance: this.balance.value,
        coordination: this.coordination.value,
        diferentation: this.diferentation.value,
        externalAnticipation: this.externalAnticipation.value,
        motorLearning: this.motorLearning.value,
        movementControl: this.movementControl.value,
        orientation: this.orientation.value,
        rhythm: this.rhythm.value,
        selfAnticipation: this.selfAnticipation.value
    }
  }

  public getCapabilitiesName() {
    return {
      adaptation: this.adaptation.name,
      agility: this.adaptation.name,
      balance: this.balance.name,
      coordination: this.coordination.name,
      diferentation: this.diferentation.name,
      externalAnticipation: this.externalAnticipation.name,
      motorLearning: this.motorLearning.name,
      movementControl: this.movementControl.name,
      orientation: this.orientation.name,
      rhythm: this.rhythm.name,
      selfAnticipation: this.selfAnticipation.name
    }
  }
}

export {
  CoordinativeCapabilities,
  COORDINATIVE_CAPABILITIES_CATEGORIES,
  CoordinativeCapabilitiesProperties,
  COORDINATIVE_CAPABILITIES_NAMES
}
