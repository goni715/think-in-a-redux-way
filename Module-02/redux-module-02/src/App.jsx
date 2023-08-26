import HooksCounter from "./components/HooksCounter.jsx";
import DynamicHooksCounter from "./components/DynamicHooksCounter.jsx";
import VariableCounter from "./components/VariableCounter.jsx";


const App = () => {
    return (
        <>
                <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
                    <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                        Simple Counter Application
                    </h1>

                    <div className="max-w-md mx-auto mt-10 space-y-5">
                        <HooksCounter />
                        <DynamicHooksCounter />
                         <h4>Own Props</h4>
                        <VariableCounter/>
                        <VariableCounter dynamic/>
                    </div>
                </div>
        </>
    );
};

export default App;