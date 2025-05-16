import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/appStore";

export default function IndexPage() {
    const { recipes } = useAppStore();
    return (
        <>
            <div className="p-8 max-w-[70rem] mx-auto">
                <h2 className="text-6xl font-extrabold mb-6">Drinks</h2>
				{recipes.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
						{recipes.map(recipe => (
							<DrinkCard
								drink={recipe}
								key={recipe.idDrink}
							>
							</DrinkCard>
						))}
					</div>
				) : (
					<p className="text-2xl">Aquí se mostrarán las bebidas...</p>
				)}
            </div>
        </>
    );
}
