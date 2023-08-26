import ProjectItem from "./ProjectItem.jsx";
import {useGetProjectsQuery} from "../../redux/features/projects/projectsApi.js";
import {useSelector} from "react-redux";

const ProjectList = () => {
    const {data, isLoading, isError,} = useGetProjectsQuery();
    const projects = useSelector((state)=> state.projects.projectList);

    // decide what to render
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && data?.length > 0) {
        content = projects.map((project, i) => (
             <ProjectItem item={project} key={i.toString()}/>
        ));
    }

    if (!isLoading && !isError && data?.length === 0) {
        content = <p className="text-white">No Project found!</p>;
    }



    return (
        <>
            <div>
                <h3 className="text-xl font-bold">Projects</h3>
                <div className="mt-3 space-y-4">
                    {content}
                </div>
            </div>
        </>
    );
};

export default ProjectList;