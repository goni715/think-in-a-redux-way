import {useDispatch, useSelector} from "react-redux";
import {tagRemoved, tagsSelected} from "../../redux/features/filter/filterSlice.js";
import {useState} from "react";

const Tag = ({title}) => {
    const dispatch = useDispatch();
    const {tags: selectedTags} = useSelector((state) => state.filter);

    const isSelected = selectedTags.includes(title);
    let isFind;
    const result = selectedTags.find((cv)=>cv===title);
        if(result !== undefined){
            isFind=false;
        }else{
            isFind=false;
        }

    //console.log(isFind);

    const style = isSelected
        ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
        : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";


    const handleSelect = () => {
        if(isSelected){
            dispatch(tagRemoved(title))
        }else{
            dispatch(tagsSelected(title))
        }
    }


    return (
        <>
            <div className={style} onClick={handleSelect}>
                {title}
            </div>
        </>
    );
};

export default Tag;


