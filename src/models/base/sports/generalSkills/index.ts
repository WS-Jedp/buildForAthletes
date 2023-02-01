enum SPORT_GENERAL_SKILL_CATEGORIES {
    RANGE = "RANGE",
    OVERALL = "OVERALL"
}

type SportGeneralSkill = {
    value?: number
    category: SPORT_GENERAL_SKILL_CATEGORIES
}

export {
    SPORT_GENERAL_SKILL_CATEGORIES,
    SportGeneralSkill
}