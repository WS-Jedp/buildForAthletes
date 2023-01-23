import { Athlete } from 'models/base/athetles/base'
import { BasketballAthlete } from 'models/base/athetles/specific/basketballAthlete'
import { ConditionalCapabilities } from 'models/base/athleticism/base/conditionalCapabilities'
import { CoordinativeCapabilities } from 'models/base/athleticism/base/coordinativeCapabilities'
import { Basketball } from './models/base/sports'
import { User } from './models/base/users'

(() => {
    const Juanes = new User({
        username: 'Jedp',
        email: 'jedp082@gmail.com',
        password: 'Jedp0502201',
        name: 'Juan',
        lastname: 'Deossa'
    })
    const JuanesAthleteData = new Athlete({
        conditional: new ConditionalCapabilities({
            endurance: 80,
            flexibility: 60,
            speed: 86,
            strength: 40
        }),
        coordinative: new CoordinativeCapabilities({
            adaptation: 70,
            agility: 90,
            balance: 81,
            coordination: 81,
            diferentation: 72,
            externalAnticipation: 72,
            motorLearning: 99,
            movementControl: 85,
            orientation: 90,
            rhythm: 90,
            selfAnticipation: 90
        })
    })
    return Basketball.getDescription()
})
