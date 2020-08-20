import React from "react";

export const AppContext = React.createContext();


const AppContextProvider = ({children}) => {
    const [tasks, setTasks] = React.useState([]);


    return (
        <AppContext.Provider value={{
            data: tasks,
            action: {
                setTasks
            }
        }}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContextProvider;