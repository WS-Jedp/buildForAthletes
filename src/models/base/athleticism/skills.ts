type MainAthleticismSkills = {
    agility: number
    balance: number
    coordination: number
}

class AthleticismSkills {
    public agility: number
    public balance: number
    public coordination: number

    public constructor(skills: MainAthleticismSkills) {
        this.agility = skills.agility
        this.balance = skills.balance
        this.coordination = skills.coordination
    }
}