enum SPORT_TECHNICAL_SKILL_CATEGORIES {
    TIME = "TIME",
    ACCURACY = "ACCURACY",
    REPETITION = "REPETITION",
    GENERAL = "GENERAL"
}

type SportTechnicalSkill = {
    overall?: number
    category?: SPORT_TECHNICAL_SKILL_CATEGORIES
}

export {
    SPORT_TECHNICAL_SKILL_CATEGORIES,
    SportTechnicalSkill
}