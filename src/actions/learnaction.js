import axios from "axios";
import { GETAPI, POSTAPI } from "../constants";

export const getdata = () =>async (dispatch) => {
    try {
        const data = await axios.get("http://localhost:3000/HealthIns")

        dispatch({type: GETAPI, payload :data})
    } catch (error) {
        console.log(error);
    }
}