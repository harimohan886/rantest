import axios from "axios";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';



export const loginCall = async (userCredential, dispatch) => {

    dispatch({ type: "LOGIN_START" });

    try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/auth/login`, userCredential);

        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });


    } catch (err) {

        dispatch({ type: "LOGIN_FAILURE", payload: err });

    }

}

export const verifyToken = async (accessToken) => {

    console.log("cl", accessToken);


    try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/admin/auth/isValidToken`,
            {
                headers: {
                    "Authorization": `Bearer ` + accessToken,
                }
            }
        );

        console.log("token is verified");

        swal("Successfully logout", "success");

        return false;

        // navigate("/admin/login");


    } catch (err) {

        console.log("token is error", err);
        swal("You are ertr!", "error");

        // dispatch({ type: "LOGIN_OUT" });

        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");


        return false;

        // dispatch({ type: "LOGIN_FAILURE", payload: err });

    }
}

export const loginOut = async (accessToken, dispatch) => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/admin/auth/logout`,
            {
                headers: {
                    "Authorization": `Bearer ` + accessToken,
                }
            }
        );

        dispatch({ type: "LOGIN_OUT" });

        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");

        swal("Successfully logout", "success");

        return true;

        // navigate("/admin/login");


    } catch (err) {
        swal("You are not authorized to logout!", "error");

        return false;

        // dispatch({ type: "LOGIN_FAILURE", payload: err });

    }

}