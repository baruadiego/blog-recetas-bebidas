import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { Fragment, JSX, useEffect, useState } from "react";
import { useAppStore } from "../stores/appStore";
import { Recipe } from "../types";

export default function Modal() {
    const [modal, useModal] = useState(false);
    const {activeId, ingredients, handleClickFavorite, isFavorite, closeModal} = useAppStore();

    useEffect(() => {
        activeId? useModal(true) : useModal(false)
    }, [activeId])

    const textButton = isFavorite(activeId)? 'Eliminar de favoritos' : 'Agregar a favoritos'

    const renderIngredients = () => {
        const result : JSX.Element[] = []
        for(let i = 1; i <= 6; i++) {
            const ingredient = ingredients[`strIngredient${i}` as keyof Recipe]
            const measure = ingredients[`strMeasure${i}` as keyof Recipe]
            if(ingredient && measure) {
                result.push(
                    <li key={i} className='text-lg font-normal'>
                        {ingredient} - {measure}
                    </li>
                )
            }
        }
        return result
    }

    const handleClick = (id: string) => {
        handleClickFavorite(id)
    }

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-60" onClose={() => {closeModal()}}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-70"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-70"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black opacity-70" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                                    <DialogTitle
                                        as="h3"
                                        className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                                    >
                                        {ingredients.strDrink}
                                    </DialogTitle>

                                    <img
                                        src={ingredients.strDrinkThumb}
                                        alt={`Imagen de ${ingredients.strDrink}`}
                                        className='mx-auto w-96'
                                    />

                                    <DialogTitle
                                        as="h3"
                                        className="text-gray-900 text-2xl font-extrabold my-5"
                                    >
                                        Ingredientes y Cantidades
                                    </DialogTitle>
                                    {renderIngredients()}

                                    <DialogTitle
                                        as="h3"
                                        className="text-gray-900 text-2xl font-extrabold my-5"
                                    >
                                        Instrucciones
                                    </DialogTitle>
                                    {ingredients.strInstructions}

                                    <div className="flex gap-3 mt-4">
                                        <button 
                                            className="bg-black rounded-md p-2 text-white font-bold grow cursor-pointer"
                                            onClick={() => {closeModal()}}
                                        >
                                            Cerrar Modal
                                        </button>

                                        <button 
                                            className="bg-black rounded-md p-2 text-white font-bold grow cursor-pointer"
                                            onClick={() => {handleClick(ingredients.idDrink)}}
                                        >
                                            {textButton}
                                        </button>
                                    </div>

                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
