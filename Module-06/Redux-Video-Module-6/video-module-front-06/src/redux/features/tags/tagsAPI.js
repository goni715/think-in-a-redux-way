//my-axios-Instance
import axios from "../../../utils/axios.js";


export const getTags = async () => {
    const res = await axios.get("/tags");

    return res.data;
}