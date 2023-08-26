import {useEffect, useState} from "react";
import {useGetTeamQuery} from "../../redux/features/team/teamApi.js";
import {useUpdateTaskMutation} from "../../redux/features/task/taskApi.js";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const colorChoice = (projectName) => {
    const colors = [
        {
            projectName: "Scoreboard",
            colorClass: "color-scoreboard"
        },
        {
            projectName: "Flight Booking",
            colorClass: "color-flight"
        },
        {
            projectName: "Product Cart",
            colorClass: "color-productCart"
        },
        {
            projectName: "Book Store",
            colorClass: "color-bookstore"
        },
        {
            projectName: "Blog Application",
            colorClass: "color-blog"
        },
        {
            projectName: "Job Finder",
            colorClass: "color-jobFinder"
        }
    ];
    const result = colors.find((cv)=>cv.projectName === projectName);
    return result?.colorClass;

}
const EditForm = ({task}) => {
    const {data} = useGetTeamQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updateTask, {isSuccess}] = useUpdateTaskMutation();

    const {
        id,
        taskName: initialTaskName,
        deadline: initialDeadline,
        teamMember,
        project,
    } = task;

    const {projectName:initialProjectName } = project;
    const {name:initialName} = teamMember;

    const [name, setName] = useState(initialName);
    const [taskName, setTaskName] = useState(initialTaskName);
    const [projectName, setProjectName] = useState(initialProjectName);
    const [deadline, setDeadline] = useState(initialDeadline);

    useEffect(()=>{
        if(isSuccess){
            navigate("/");
        }
    },[isSuccess, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateTask({
            id,
            data: {
                taskName: taskName,
                teamMember: {
                    name: name,
                    avatar: "/images/avatars/sadh.png",
                },
                project: {
                    projectName: projectName,
                    colorClass: colorChoice(projectName)
                },
                deadline: deadline,
            }
        }))
    }
    
    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="fieldContainer">
                    <label htmlFor="lws-taskName">Task Name</label>
                    <input
                        type="text"
                        name="taskName"
                        id="lws-taskName"
                        required
                        placeholder="Implement RTK Query"
                        value={taskName}
                        onChange={(e)=>setTaskName(e.target.value)}
                    />
                </div>

                <div className="fieldContainer">
                    <label>Assign To</label>
                    <select onChange={(e)=>setName(e.target.value)} value={name} name="teamMember" id="lws-teamMember" required>
                        <option value="" hidden selected>Assign To</option>
                        {data?.length > 0 && (
                            data.map((item,i)=>(
                                <option value={item?.name} key={i.toString()}>{item?.name}</option>
                            ))
                        )
                        }
                    </select>
                </div>
                <div className="fieldContainer">
                    <label htmlFor="lws-projectName">Project Name</label>
                    <select onChange={(e)=>setProjectName(e.target.value)} value={projectName} id="lws-projectName" name="projectName" required>
                        <option value="" hidden selected>Select Project</option>
                        <option value="Scoreboard">Scoreboard</option>
                        <option value="Flight Booking">Flight Booking</option>
                        <option value="Product Cart">Product Cart</option>
                        <option value="Book Store">Book Store</option>
                        <option value="Blog Application">Blog Application</option>
                        <option value="Job Finder">Job Finder</option>
                    </select>
                </div>

                <div className="fieldContainer">
                    <label htmlFor="lws-deadline">Deadline</label>
                    <input onChange={(e)=>setDeadline(e.target.value)} value={deadline} type="date" name="deadline" id="lws-deadline" required/>
                </div>

                <div className="text-right">
                    <button type="submit" className="lws-submit">Update</button>
                </div>
            </form>

        </>
    );
};

export default EditForm;