import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {FilterTasks} from "../../redux/features/task/taskSlice.js";

const ProjectItem = ({item}) =>{
    const {id, projectName, colorClass} = item || {};
    const tags = useSelector((state)=> state.task.tags);
    const [isFind, setIsFind] = useState(tags.includes(projectName));
    const dispatch = useDispatch();

    const handleFilter = () => {
       dispatch(FilterTasks(projectName))
    }

    return (
        <>
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    className={colorClass}
                    checked={isFind}
                    onChange={()=>{
                        setIsFind(!isFind);
                        handleFilter();
                    }}
                />
                <p className="label">{projectName}</p>
            </div>
        </>
    );
};

export default ProjectItem;