import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, recipeSliceType } from "./recipeSlice";
import { createFavouriteSlice, favouriteSliceType } from "./favouriteSlice";
import { createNotificacionSlice, notificacionSliceType } from "./notificacionSlice";

export const useAppStore = create<recipeSliceType & favouriteSliceType & notificacionSliceType>()(
    devtools((...a) => ({
        ...createRecipeSlice(...a),
        ...createFavouriteSlice(...a),
        ...createNotificacionSlice(...a)
    }))
)