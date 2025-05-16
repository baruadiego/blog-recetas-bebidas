import { StateCreator } from "zustand";
import { Category, Drinks, Filter, Recipe } from "../types";
import { getCategories, getIngredients, getRecipes } from "../services/recipesService";

export type recipeSliceType = {
    categories: Category[],
    recipes: Drinks,
    activeId: string,
    ingredients: Recipe,
    fetchCategories: () => Promise<void>,
    findDrinks: (filter: Filter) => Promise<void>,
    openModal: (id: string) => Promise<void>,
    closeModal: () => void
}

export const createRecipeSlice: StateCreator<recipeSliceType> = (set) => ({
    categories: [],
    recipes: {} as Drinks,
    activeId: '',
    ingredients: {} as Recipe,
    async findDrinks (filter: Filter) {
        const data = await getRecipes(filter)
        set((state) => ({
            ...state,
            recipes: data
        }))
    },
    fetchCategories: async () => {
        const data = await getCategories()
        set((state) => ({
            ...state,
            categories: data
        }))
    },
    openModal: async (id: string) => {
        const ingredients = await getIngredients(id)
        set((state) => ({
            ...state,
            activeId: id,
            ingredients: ingredients
        }))
    },
    closeModal: () => {
        set((state) => ({
            ...state,
            activeId: ''
        }))
    },
    
})