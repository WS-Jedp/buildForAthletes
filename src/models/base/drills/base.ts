import { CONDITIONAL_CAPABILITIES_NAMES } from "../athleticism/base/conditionalCapabilities"
import { COORDINATIVE_CAPABILITIES_NAMES } from "../athleticism/base/coordinativeCapabilities"
import { Sport } from "../sports/base"
import { User } from "../users"

type relatedCapabilities = (COORDINATIVE_CAPABILITIES_NAMES | CONDITIONAL_CAPABILITIES_NAMES)

enum EXPERTISE_LEVEL {
    ROOKIE = "ROOKIE",
    MEDIUM = "MEDIUM",
    SENIOR = "SENIOR",
    ADVANCED = "ADVANCED",
    EXPERT = "EXPERT",
    MASTER = "MASTER"
}

class Drill {
    public name: string
    public description: string
    public relatedToCapabilites: relatedCapabilities[]
    public uploadedBy: User[]

    public level: EXPERTISE_LEVEL

    public relatedSports: Sport[]
    public relatedToSkills: string[]

    public multimedia: string[] // Links

}