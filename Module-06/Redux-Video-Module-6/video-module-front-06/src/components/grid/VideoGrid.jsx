import VideoGridItem from "./VideoGridItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchVideos} from "../../redux/features/videos/videosSlice.js";
import Loading from "../ui/Loading.jsx";

const VideoGrid = () => {
    const dispatch = useDispatch();
    const {videos, isLoading, isError, error} = useSelector((state) => state.videos);

    const {tags, search} = useSelector((state) => state.filter)

    useEffect(()=>{
        dispatch(fetchVideos({tags, search}));
    },[dispatch, tags, search])






    let content;
    if(isLoading) content = <Loading/>;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && videos?.length === 0) {
        content = <div className="col-span-12">No videos found!</div>;
    }

    if (!isError && !isLoading && videos?.length > 0) {
        content = videos.map((video) => (
            <VideoGridItem key={video.id} item={video} />
        ));
    }




    return (
        <>
            <section className="pt-12">
                <section className="pt-12">
                    <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                        {content}
                    </div>
                </section>
            </section>
        </>
    );
};

export default VideoGrid;