import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";
let isUser = localStorage.getItem('user');

if(localStorage.getItem('user')){
    isUser = JSON.parse(localStorage.getItem('user'));
} else {
    isUser = null;

}

const INITIAL_STATE = {
    user:   isUser,
    accessToken: localStorage.getItem('accessToken') || null,
    isFetching: false,
    error: false,

}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('accessToken', state.accessToken);

        if(state.user){
            localStorage.setItem('user', JSON.stringify(state.user));


        }

    }, [state.user]);

    console.log("login date", state);


    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                accessToken: state.accessToken,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

