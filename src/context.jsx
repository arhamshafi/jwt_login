import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const App_context = createContext();

function AppProvider({ children }) {

    let navigate = useNavigate()
    let [loginData, setLoginData] = useState({ email: "", password: "" });
    let [sign_up_data, set_signup_data] = useState({ name: "", number: "", email: "", password: "" })
    let [crnt_user, set_crnt_user] = useState(null)
    console.log(crnt_user);




    let onhandle = (e) => {
        let { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    let sing_handle = (e) => {
        let { name, value } = e.target
        set_signup_data({ ...sign_up_data, [name]: value })
    }

    let login = () => {
        if (!loginData.email || !loginData.password) {
            alert("Both fields required")
            return
        }
        console.log("login working");
        setLoginData({ email: "", password: "" })

        // navigate("/dash")
    }

    let Sign_up = async () => {
        if (!sign_up_data.name || !sign_up_data.email || !sign_up_data.number || !sign_up_data.password) {
            alert(" Both fields required ")
            return
        }

        console.log(" sign_up working ");
        set_signup_data({ name: "", number: "", email: "", password: "" })

    }

    return (
        <App_context.Provider value={{ loginData, setLoginData, onhandle, login, sing_handle, sign_up_data, Sign_up, crnt_user, set_crnt_user }}>
            {children}
        </App_context.Provider>
    );
}

export default AppProvider;
