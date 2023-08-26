import RelatedVideo from "./RelatedVideo.jsx";
import {useGetRelatedVideosQuery} from "../../../redux/features/api/apiSlice.js";
import Error from "../../ui/Error.jsx";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader.jsx";

const RelatedVideos = ({id, title}) => {

    const {data:relatedVideos, isLoading, isError} = useGetRelatedVideosQuery({id,title});

    let content = null;

    if (isLoading) {
        content = (
            <>
                <RelatedVideoLoader />
                <RelatedVideoLoader />
                <RelatedVideoLoader />
            </>
        );
    }

    if (!isLoading && isError) {
        content = <Error message="There was an error!" />;
    }

    if (!isLoading && !isError && relatedVideos?.length === 0) {
        content = <Error message="No related videos found!" />;
    }

    if (!isLoading && !isError && relatedVideos?.length > 0) {
        content = relatedVideos.map((video) => (
            <RelatedVideo key={video.id} video={video} />
        ));
    }

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}

export default RelatedVideos;
