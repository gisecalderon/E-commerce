import Counter from "./components/itemCount/ItemCount";
import CustomButtom from "./components/customButton/CustomButton";
import  NavBar from "../src/components/navBar/NavBar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App(){

    return (
        <div>
            <NavBar />
            <ItemListContainer/>
            <CustomButtom/>
            <Counter />
        </div>
    );
};

export default App;
