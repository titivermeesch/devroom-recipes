import fetch from 'node-fetch'

/**
 * Fetch themealdb to receive a random recipe
 *
 * @returns {Promise<*>}
 */
const getRecipe = async () => {
    const recipe = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const data = await recipe.json()

    return data.meals[0]
}

export default getRecipe