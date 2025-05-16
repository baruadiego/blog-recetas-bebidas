import { StateCreator } from "zustand"
import { Drink } from "../types"
import { recipeSliceType } from "./recipeSlice";
import { notificacionSliceType } from "./notificacionSlice";

export type favouriteSliceType = {
    favourites: Drink[],
    handleClickFavorite: ( id: string ) => void,
    isFavorite: ( id: string ) => boolean
}

export const createFavouriteSlice: StateCreator<favouriteSliceType & recipeSliceType & notificacionSliceType, [], [], favouriteSliceType> = (set, get) => ({
    favourites: localStorage.getItem('favourites')? JSON.parse(localStorage.getItem('favourites')!) : [],
    handleClickFavorite( id: string ) {
        if (get().isFavorite(id)) {
            const updatedFavourites = get().favourites.filter((drink) => drink.idDrink !== id)
            set((state) => ({
                ...state,
                favourites: updatedFavourites
            }))
            get().showNotification({ text: 'Se eliminó de favoritos', error: true })
        } else{
            const newDrink = get().recipes.find((drink) => drink.idDrink === id)
            set(
                (state) => ({
                    ...state,
                    favourites: [...state.favourites, newDrink!]
                })
            )
            get().showNotification({ text: 'Se agregó a favoritos', error: false })
        }
        get().closeModal()
        localStorage.setItem('favourites', JSON.stringify(get().favourites))
    },
    isFavorite( id: string ) {
        return get().favourites.find((drink) => drink.idDrink === id)? true : false
    }
})