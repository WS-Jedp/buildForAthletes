enum SPORT_TECHNICAL_SKILL_CATEGORIES {
    TIME = "TIME",
    ACCURACY = "ACCURACY",
    PERCENTAGE = "PERCENTAGE",
    REPETITION = "REPETITION",
    RANGE = "RANGE",
    OVERALL = "OVERALL"
}

type OverallSportTechnicalSkill = {
    overall?: number
    category: SPORT_TECHNICAL_SKILL_CATEGORIES.OVERALL
}
type SportTechnicalSkill = {
    value?: number
    category?: SPORT_TECHNICAL_SKILL_CATEGORIES
}

export {
    SPORT_TECHNICAL_SKILL_CATEGORIES,
    OverallSportTechnicalSkill,
    SportTechnicalSkill
}