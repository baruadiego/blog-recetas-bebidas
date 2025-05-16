import { useAppStore } from "../stores/appStore";
import { Drink } from "../types";

export default function DrinkCard({drink}: {drink: Drink}) {
    const {openModal} = useAppStore();

    return (
        <div className="bg-white rounded-md shadow-lg rounded-t-md">
            <div className="overflow-hidden">
                <img 
                    src={drink.strDrinkThumb} 
                    alt={`imagen ${drink.strDrink}`} 
                    className="w-full rounded-t-md hover:scale-120 transition-transform duration-300"
                />
            </div>

            <div className="flex flex-col p-4">
                <p className="text-gray-600 text-xl mb-4 h-12">{drink.strDrink}</p>
                <button 
                    className="p-2 bg-gray-400 border-1 rounded-md w-full font-semibold cursor-pointer text-white "
                    onClick={() => (openModal(drink.idDrink))}
                >
                    Ver receta
                </button>
            </div>
        </div>
    );
}
