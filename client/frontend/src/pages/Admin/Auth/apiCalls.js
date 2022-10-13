import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {

    dispatch({ type: "LOGIN_START" });

    try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/auth/login`, userCredential);

        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });


    } catch (err) {

        dispatch({ type: "LOGIN_FAILURE", payload: err });

    }

}

export const loginOut = async (accessToken, dispatch) => {

    dispatch({ type: "LOGIN_START" });

    try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/admin/auth/logout`, 
        {
            headers: {
                "Authorization" : `Bearer ` + accessToken,
            }
        }
        );

        dispatch({ type: "LOGIN_OUT" });


    } catch (err) {

        // dispatch({ type: "LOGIN_FAILURE", payload: err });

    }

}