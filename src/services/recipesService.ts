import axios from "axios"
import { CategoriesResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../schemas"
import { Filter } from "../types"

export const getCategories = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const  { data }  = await axios(url)
    const response = CategoriesResponseSchema.safeParse(data['drinks'])
    if(response.success){
        return response.data
    }
}

export async function getRecipes(filter: Filter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter.category}&i=${filter.name}`
    const { data } = await axios(url)
    const result = DrinksAPIResponse.safeParse(data['drinks'])
    if(result.success){
        return result.data
    }
}

export async function getIngredients(id: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data['drinks'][0])
    if(result.success){
        return result.data
    }
}