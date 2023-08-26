import {useGetTeamQuery} from "../../redux/features/team/teamApi.js";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useAddTaskMutation} from "../../redux/features/task/taskApi.js";
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
const NewTask = () => {
    const {data} = useGetTeamQuery();
    const [addTask, {isSuccess}] = useAddTaskMutation();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [taskName, setTaskName] = useState("");
    const [projectName, setProjectName] = useState("");
    const [deadline, setDeadline] = useState("");


    useEffect(()=>{
        if(isSuccess){
            resetForm();
        }
    },[isSuccess])
      const resetForm = () => {
         setName("");
         setTaskName("");
         setProjectName("");
         setDeadline("");
      }



      const handleSubmit = (e) => {
        e.preventDefault();
         const obj = {
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
              status: "pending"
          }
          dispatch(addTask(obj));


      }





    return (
        <>
            <div className="container relative">
                <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                    <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                        Create Task for Your Team
                    </h1>

                    <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
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
                                <button type="submit" className="lws-submit">Save</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
};

export default NewTask;