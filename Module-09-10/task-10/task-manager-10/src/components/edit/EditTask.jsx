import {useParams} from "react-router-dom";
import EditForm from "./EditForm.jsx";
import {useGetTaskQuery} from "../../redux/features/task/taskApi.js";

const EditTask = () => {
    const {id} = useParams();
    const {data:task, isLoading, isError} = useGetTaskQuery(id);

    let content = null;
    if(isLoading){
        content = <div>Loading...</div>
    }
    if(!isLoading && isError){
        content = <p>There was an error!"</p>
    }
    if(!isLoading && !isError && task?.id){
        content = <EditForm task={task}/>
    }



    return (
        <>
            <div className="container relative">
                <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                    <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                        Edit Task for Your Team
                    </h1>

                    <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
                        {content}
                    </div>
                </main>
            </div>
        </>
    );
};

export default EditTask;