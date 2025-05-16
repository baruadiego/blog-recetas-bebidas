import { NavLink, useLocation } from "react-router-dom";
import Form from "./Form";
import { useMemo } from "react";
export default function Header() {
    const { pathname } = useLocation();
    const isHome = useMemo(() => pathname === "/", [pathname]);

    return (
        <header className="bg-black p-5 lg:sticky lg:top-0 shadow z-50">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <img
                    src="../logo1.png"
                    alt="logo"
                    className="w-[8rem] mb-2 mx-auto md:mx-0"
                />
                {isHome && <Form></Form>}
            </div>

            <div className="flex justify-center gap-2 py-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-white uppercase font-bold border-b-2"
                            : "text-white uppercase font-bold"
                    }
                >
                    inicio
                </NavLink>

                <NavLink
                    to="/favourite"
                    className={({ isActive }) =>
                        isActive? 
                            "text-white uppercase font-bold border-b-2"
                        : 
                            "text-white uppercase font-bold"
                    }
                >
                    favoritos
                </NavLink>
            </div>
        </header>
    );
}
