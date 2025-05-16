import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import FavouritePage from "./views/FavouritePage";
import Layout from "./layouts/Layout";
import { Suspense } from "react";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
				<Route element={<Layout></Layout>}>
					<Route 
                        path="/" 
                        index 
                        element={
                            <Suspense fallback="Cargando...">
                      <IndexPage />
                  </Suspense>
                        }>
                    </Route>
					<Route 
                        path="/favourite" 
                        element={
                            <Suspense fallback="Cargando...">
                                <FavouritePage></FavouritePage>
                            </Suspense>
                        }>
                    </Route>
				</Route>
            </Routes>
        </BrowserRouter>
    );
}
