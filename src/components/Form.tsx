import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppStore } from "../stores/appStore";
import { Filter } from "../types";

export default function Form() {
    const { fetchCategories, categories, findDrinks } = useAppStore()
    const [filter, setFilter] = useState<Filter>({name: '', category: '' })

    useEffect(() => {
      fetchCategories()
    }, [fetchCategories])
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        findDrinks(filter)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setFilter({
            ...filter, 
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <form
            action=""
            className="flex flex-col  my-auto gap-5 md:flex-row h-min md:w-[55rem]"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name="name"
                id="drink"
                className="bg-white p-2 grow md:max-w-[25rem]  rounded-md"
                placeholder="Nombre o Ingrediente. Ej, Vodka, Tequila, Café..."
                onChange={handleChange}
                value={filter.name}
            />

            <select
                name="category"
                id="category"
                className="bg-white p-2 grow md:max-w-[25rem] rounded-md"
                onChange={handleChange}
                value={filter.category}
            >
                <option value="" disabled>-- Seleccione una opción --</option>
                {categories && categories.map((category)=>(
                    <option value={category.strCategory} key={category.strCategory}>
                        {category.strCategory}
                    </option>
                ))}
            </select>

            <input
                type="submit"
                value={"Buscar"}
                className="bg-gray-400 text-white cursor-pointer  p-2 rounded-md disabled:opacity-50 disabled:cursor-default"
                disabled={!filter.name || !filter.category}
            />
        </form>
    );
}
