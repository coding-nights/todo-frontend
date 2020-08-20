import React from 'react';
import AppContextProvider from "./appContext";
import TaskForm from "./components/taskForm";


function App() {
    return (
        <AppContextProvider>
            <div className="App">
                <TaskForm />
            </div>
        </AppContextProvider>
    );
}

export default App;
