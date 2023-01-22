enum SportType__TEST {
    // By modality
    TEAM_SPORT = 'TEAM_SPORT',
    PARTNER_SPORT = 'PARTNER_SPORT',
    INDIVIDUAL_SPORT = 'INDIVIDUAL_SPORT',

    // By conditions
    // EXTREME_SPORT = 'EXTREME_SPORT',
    // COMBAT_SPORT = 'COMBAT_SPORT',
    // MIND_SPORT = 'MIND_SPORT',
    // MINDFUL_SPORT = 'MINDFUL_SPORT',
    // CHESS_SPORT = 'CHESS_SPORT',
    GYM_SPORT = 'GYM_SPORT',

    // By zones
    // AIR_SPORT = 'AIR_SPORT',
    LAND_SPORT = 'LAND_SPORT',
    WATER_SPORT = 'WATER_SPORT',
    // WINTER_SPORT = 'WINTER_SPORT',
    MOUNTAIN_SPORT = 'MOUNTAIN_SPORT',

    // By skills
    // PRECISION_SPORT = 'PRECISION_SPORT',
    STRENGTH_SPORT = 'STRENGTH_SPORT',
    // FLEXIBILITY_SPORT = 'FLEXIBILITY_SPORT',
    COORDINATION_SPORT = 'COORDINATION_SPORT',
    ATHLETIC_SPORT = 'ATHLETIC_SPORT',

    // By tools
    BALL_SPORT = 'BALL_SPORT',
    // MOTOR_SPORT = 'MOTOR_SPORT',
    BIKE_SPORT = 'BIKE_SPORT',
    // RAQUET_SPORT = 'RAQUET_SPORT'

}

class SportType<SportTypeSkils> {
    protected name: string
    protected sportTypeSkills: SportTypeSkils

    public constructor(name: string, skills: SportTypeSkils) {
        this.name = name
        this.sportTypeSkills = skills
    }

    public static getName():string { return this.name }
    public getSkills(): SportTypeSkils { return this.sportTypeSkills }
}
 
export {
    SportType
}
