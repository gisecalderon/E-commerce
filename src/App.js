import Counter from "./components/itemCount/ItemCount";
import CustomButtom from "./components/customButton/CustomButton";
import  NavBar from "../src/components/navBar/NavBar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

import {BrowserRouter, Routes, Route, Form} from "react-router-dom"
import Cart from "./components/cart/Cart";
import CartContextProvider from "./context/CartContext";

function App(){

    return (
        <BrowserRouter>
            <CartContextProvider>
                <NavBar />

                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
                    <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>}/>

                    <Route path="/checkout" element={<Form/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<h3>Error de página, vuelva al inicio</h3>}/>
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    );
};

export default App;
