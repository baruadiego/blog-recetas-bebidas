import { useAppStore } from "../stores/appStore";
import DrinkCard from "../components/DrinkCard";

export default function FavouritePage() {
    const { favourites } = useAppStore();
    return (
        <div className="p-8 max-w-[70rem] mx-auto">
            <h2 className="text-6xl font-extrabold mb-6">Favoritos</h2>
            {favourites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    {favourites.map((favorite) => (
                        <DrinkCard
                            drink={favorite}
                            key={favorite.idDrink}
                        ></DrinkCard>
                    ))}
                </div>
            ) : (
                <p className="text-2xl">Aquí se mostrarán tus bebidas favoritas...</p>
            )}
        </div>
    );
}
