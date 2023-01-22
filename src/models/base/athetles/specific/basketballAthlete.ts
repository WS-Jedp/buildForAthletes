import { ConditionalCapabilities, ConditionalCapabilitiesProperties } from 'models/base/athleticism/base/conditionalCapabilities'
import { CoordinativeCapabilities, CoordinativeCapabilitiesProperties } from 'models/base/athleticism/base/coordinativeCapabilities';
import { User } from 'models/base/users'
import { Athlete } from '../base'

class BasketballAthlete implements Athlete {

    public user: User
    public conditionalCapabilities?: ConditionalCapabilities | undefined;
    public coordinativeCapabilities?: CoordinativeCapabilities | undefined;

    public constructor(user: User, capabilities?: {
        conditional?: ConditionalCapabilitiesProperties,
        coordinatives?: CoordinativeCapabilitiesProperties
    }) {
        this.user = user
        this.conditionalCapabilities = capabilities?.conditional && new ConditionalCapabilities(capabilities.conditional)
        this.coordinativeCapabilities = capabilities?.coordinatives && new CoordinativeCapabilities(capabilities?.coordinatives)
    }
}

export {
    BasketballAthlete
}