import React, { createContext, useState } from 'react';

export const App_context = createContext();

function AppProvider({ children }) {

    const [loginData, setLoginData] = useState({ email: "", password: "" });

    return (
        <App_context.Provider value={{ loginData, setLoginData }}>
            {children}
        </App_context.Provider>
    );
}

export default AppProvider;
