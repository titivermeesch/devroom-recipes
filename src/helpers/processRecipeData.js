import buildIngredients from './buildIngredients.js'
import createValidYoutubeLink from './createValidYoutubeLink.js'

/**
 * Returns a more readable version of the recipe data
 *
 * @param recipe
 * @returns {{area: *, instructions: T[], image: *, ingredients: *[], video: (string|null), source: *, title: *, category: *, tags: *}}
 */
const processRecipeData = recipe => ({
    title: recipe.strMeal,
    category: recipe.strCategory,
    area: recipe.strArea,
    instructions: recipe.strInstructions.split('\r\n').filter(el => el !== ''),
    image: recipe.strMealThumb,
    tags: recipe.strTags,
    video: createValidYoutubeLink(recipe.strYoutube),
    ingredients: buildIngredients(recipe),
    source: recipe.strSource
})

export default processRecipeData