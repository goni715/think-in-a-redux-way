import RelatedVideoListItem from "./RelatedVideoListItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchRelatedVideos} from "../../redux/features/relatedVideos/relatedVideosSlice.js";
import Loading from "../ui/Loading.jsx";

const RelatedVideoList = ({currentVideoId, tags}) => {
    const dispatch = useDispatch();
    const {relatedVideos, isLoading, isError, error} = useSelector((state) => state.relatedVideos)

    useEffect(() => {
        dispatch(fetchRelatedVideos({tags, id:currentVideoId}))
    }, [dispatch, tags, currentVideoId])


    // decide what to render
    let content = null;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }
    if (!isLoading && !isError && relatedVideos?.length === 0) {
        content = <div className="col-span-12">No related videos found!</div>;
    }
    if (!isLoading && !isError && relatedVideos?.length > 0) {
        content = relatedVideos.map((video) => (
            <RelatedVideoListItem key={video.id} video={video} />
        ));
    }



    return (
        <>
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
                {content}
            </div>
        </>
    );
};

export default RelatedVideoList;