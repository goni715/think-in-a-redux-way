import Tag from "./Tag.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTags} from "../../redux/features/tags/tagsSlice.js";

const Tags = () => {
    const dispatch = useDispatch();
    const {tags} = useSelector((state)=> state.tags);

    useEffect(() => {
        dispatch(fetchTags());
    },[dispatch])



    return (
        <>
            {tags?.length > 0 ? (
                <>
                    <section>
                        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                            {tags?.map((item,i)=>(
                                <Tag title={item?.title} key={i.toString()}/>
                             )
                            )}
                        </div>
                    </section>
                </>
            ) : null
            }

        </>
    );
};

export default Tags;