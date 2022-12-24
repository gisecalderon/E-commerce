import Counter from "./components/counter/Counter";
import CustomButtom from "./components/customButton/CustomButton";
import itemListContainer from "./components/itemListContainer/itemListContainer"
import  NavBar from "./components/navBar/NavBar"

function App(){

    return (
        <div>
            <NavBar />
            <itemListContainer greeting={"Buenvenidos"}/>
            <Counter />
        </div>
    );
};

export default App;
