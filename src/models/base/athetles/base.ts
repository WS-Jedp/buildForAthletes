import { User } from '../users'
import { ConditionalCapabilities } from '../athleticism/base/conditionalCapabilities'
import { CoordinativeCapabilities } from '../athleticism/base/coordinativeCapabilities'

interface Athlete {
    user: User
    conditionalCapabilities?: ConditionalCapabilities
    coordinativeCapabilities?: CoordinativeCapabilities
}

export {
    Athlete
}