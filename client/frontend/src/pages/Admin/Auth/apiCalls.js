import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {

    dispatch({ type: "LOGIN_START" });

    try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/auth/login`, userCredential);

        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });


    } catch (err) {

        dispatch({ type: "LOGIN_FAILURE", payload: err });

    }

}

export const loginOut = async (userCredential, dispatch) => {

    dispatch({ type: "LOGIN_START" });

    try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/auth/logout`, userCredential);

        dispatch({ type: "LOGIN_OUT" });


    } catch (err) {

        // dispatch({ type: "LOGIN_FAILURE", payload: err });

    }

}