import Player from "../components/video/Player.jsx";
import Description from "../components/video/Description.jsx";
import RelatedVideos from "../components/video/related/RelatedVideos.jsx";
import {useParams} from "react-router-dom";
import {useGetVideoQuery} from "../redux/features/api/apiSlice.js";
import Error from "../components/ui/Error.jsx";
import PlayerLoader from "../components/ui/loaders/PlayerLoader.jsx";
import DescriptionLoader from "../components/ui/loaders/DescriptionLoader.jsx";
import RelatedVideoLoader from "../components/ui/loaders/RelatedVideoLoader.jsx";

const VideoPage = () => {
    const {videoId} = useParams();
    const {data:video, isLoading, isError} = useGetVideoQuery(videoId);

    let content = null;
    if (isLoading) {
        content = (
            <>
                <PlayerLoader />
                <DescriptionLoader />
            </>
        );
    }

    if (!isLoading && isError) {
        content = <Error message="There was an error!" />;
    }

    if (!isLoading && !isError && video?.id) {
        content = (
            <>
                <Player link={video?.link} title={video?.title} />
                <Description key={Date.now()} video={video} />
            </>
        );
    }


    return(
        <>
            <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
                <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    <div className="grid grid-cols-3 gap-2 lg:gap-8">
                        <div className="col-span-full w-full space-y-8 lg:col-span-2">
                            {content}
                        </div>

                        {video?.id ? (
                            <RelatedVideos key={Date.now()} id={video?.id} title={video?.title}/>
                        ) : isLoading ? (
                            <>
                                <RelatedVideoLoader />
                                <RelatedVideoLoader />
                                <RelatedVideoLoader />
                            </>
                        ) : (
                            <Error message="There was an error!" />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default VideoPage;