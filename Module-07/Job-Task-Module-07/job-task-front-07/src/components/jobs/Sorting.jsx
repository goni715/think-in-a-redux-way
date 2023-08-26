import {useDispatch} from "react-redux";
import {SortingJob} from "../../redux/features/job/jobSlice.js";

const Sorting = () => {
    const dispatch = useDispatch();

    const handleChange = (value) => {
         dispatch(SortingJob(value));
    }


    return (
        <>
            <select onChange={(e)=>handleChange(e.target.value)} id="lws-sort" name="sort" autoComplete="sort" className="flex-1">
                <option value="Default">Default</option>
                <option value="ascending">Salary (Low to High)</option>
                <option value="descending">Salary (High to Low)</option>
            </select>
        </>
    );
};

export default Sorting;