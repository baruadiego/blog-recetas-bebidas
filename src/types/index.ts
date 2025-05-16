import { z } from "zod"
import { CategorySchema, CategoriesResponseSchema, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponseSchema } from "../schemas"

export type Category = z.infer<typeof CategorySchema>
export type Categories = z.infer<typeof CategoriesResponseSchema>
export type Filter = {
    name: string,
    category: string,
}
export type Drink = z.infer<typeof DrinkAPIResponse>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>