import {Link} from "react-router-dom";

const VideoGridItem = ({item}) => {
    return (
        <>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
                <div className="w-full flex flex-col">
                    <div className="relative">
                        <Link to={"/videos/"+item?.id} >
                            <img
                                src={item?.thumbnail}
                                className="w-full h-auto"
                                alt="Some video title"
                            />
                        </Link>

                        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                            12:10
                        </p>
                    </div>

                    <div className="flex flex-row mt-2 gap-2">
                        <Link to={"/videos/"+item?.id} className="shrink-0">
                            <img
                                src={item?.avatar}
                                className="rounded-full h-6 w-6"
                                alt={item?.author}
                            />
                        </Link>

                        <div className="flex flex-col">
                            <Link to={"/videos/"+item?.id}>
                                <p className="text-slate-900 text-sm font-semibold">
                                    {item?.title}
                                </p>
                            </Link>
                            <Link to={"/videos/"+item?.id}
                                className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                            >
                                {item?.author}
                            </Link>
                            <p className="text-gray-400 text-xs mt-1">
                                {item?.views} views . {item?.date}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoGridItem;