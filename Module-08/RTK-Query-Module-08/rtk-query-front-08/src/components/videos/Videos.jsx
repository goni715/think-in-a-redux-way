import Video from "./Video.jsx";
import {useGetVideosQuery} from "../../redux/features/api/apiSlice.js";
import VideoLoader from "../ui/loaders/VideoLoader.jsx";
import Error from "../ui/Error.jsx";

const Videos =() => {
    const {data:videos, isLoading, isError} = useGetVideosQuery();

    // decide what to render
    let content = null;


    if (isLoading) {
        content = (
            <>
                <VideoLoader />
                <VideoLoader />
                <VideoLoader />
                <VideoLoader />
            </>
        );
    }

    if (!isLoading && isError) {
        content = <Error message="There was an error" />;
    }

    if (!isLoading && !isError && videos?.length === 0) {
        content = <Error message="No videos found!"/>;
    }

    if (!isLoading && !isError && videos?.length > 0) {
        content = videos.map((video) => <Video key={video.id} video={video} />);
    }

    return (
        <>
            {content}
        </>
    );
}


export default Videos;