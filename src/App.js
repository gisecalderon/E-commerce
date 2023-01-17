import Counter from "./components/itemCount/ItemCount";
import CustomButtom from "./components/customButton/CustomButton";
import  NavBar from "../src/components/navBar/NavBar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App(){

    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
                <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<ItemListContainer/>}/>
                <Route path="*" element={<h3>Error de página, vuelva al inicio</h3>}/>
                
            <CustomButtom/>
            <Counter/>
            <ItemDetailContainer/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
