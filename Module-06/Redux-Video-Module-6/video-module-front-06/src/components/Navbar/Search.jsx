import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {searched} from "../../redux/features/filter/filterSlice.js";
import searchImage from '../../assets/images/search.svg';
import {useMatch, useNavigate} from "react-router-dom";

const Search = () =>{
    const dispatch = useDispatch();
    const {search} = useSelector((state)=> state.filter);
    const [input, setInput] = useState(search);
    const match = useMatch("/");
    const navigate=useNavigate();



    const handleSubmit = () => {
      dispatch(searched(input));

        // if user is not in home page, redirect to home page
        if(!match){
          navigate('/');
      }
    }


    return (
        <>
            <form>
                <input
                    className="outline-none border-none mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />
            </form>
            <img
                onClick={handleSubmit}
                className="inline h-4 cursor-pointer"
                src={searchImage}
                alt="Search"
            />
        </>
    );
};

export default Search;