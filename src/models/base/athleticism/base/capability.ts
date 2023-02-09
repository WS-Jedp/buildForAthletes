import { CONDITIONAL_CAPABILITIES_NAMES } from './conditionalCapabilities'
import { COORDINATIVE_CAPABILITIES_NAMES, COORDINATIVE_CAPABILITIES_CATEGORIES } from './coordinativeCapabilities'

type CAPABILITIES_NAMES = COORDINATIVE_CAPABILITIES_NAMES | CONDITIONAL_CAPABILITIES_NAMES

type CapabilityProperties = {
    name: CAPABILITIES_NAMES
    category?: COORDINATIVE_CAPABILITIES_CATEGORIES
    value?: number
}

class Capability {
    protected _name: CAPABILITIES_NAMES
    protected _value?: number | undefined
    protected _category?: COORDINATIVE_CAPABILITIES_CATEGORIES

    public constructor(capabilityProperties: CapabilityProperties) {
        this._name = capabilityProperties.name
        this._value = capabilityProperties.value
        this._category = capabilityProperties.category
    }

    public get name(): string { return this._name }
    public set setName(name:CAPABILITIES_NAMES) { this._name = name }

    public get value(): number | undefined { return this._value }
    public set setValue(value:number) { this._value = value }

    public get category(): COORDINATIVE_CAPABILITIES_CATEGORIES | undefined { return this._category }
    public set setCategory(category:COORDINATIVE_CAPABILITIES_CATEGORIES) { this._category = category } 
}

export default Capability
export {
    Capability,
    CapabilityProperties,
    CAPABILITIES_NAMES
}
