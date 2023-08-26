//my-axios-Instance
import axios from "../../../utils/axios.js";


export const getVideo = async (id) => {
    const res = await axios.get(`/videos/${id}`);

    return res.data;
}