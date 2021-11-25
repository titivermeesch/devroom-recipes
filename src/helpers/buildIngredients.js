/**
 * Get a full list of ingredients along with the measurements for each ingredient
 *
 * @param recipe
 * @returns {*[]}
 */
const buildIngredients = recipe => {
    const ingredients = []

    for (let i = 1; i <= 20; i++) {
        const ingredientVarName = `strIngredient${i}`
        const measureVarName = `strMeasure${i}`

        if (recipe[ingredientVarName]) {
            ingredients.push(`${recipe[measureVarName]} ${recipe[ingredientVarName]}`)
        }
    }

    return ingredients
}

export default buildIngredients