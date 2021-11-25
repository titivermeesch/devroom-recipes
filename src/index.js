import express from 'express'
import pug from 'pug'
import getRecipe from './helpers/getRecipe.js'
import processRecipeData from './helpers/processRecipeData.js'

const app = express()

app.get('/', async (req, res) => {
    try {
        const recipe = await getRecipe()
        const processedRecipe = processRecipeData(recipe)

        const compiledFunction = pug.compileFile('./src/templates/meal.pug')
        res.send(compiledFunction(processedRecipe))
    } catch (err) {
        console.error(err)
        res.send("<p>Failed to fetch a recipe. Please try again</p>")
    }

})

app.listen(3000, () => console.log('HTTP server running on port 3000'))