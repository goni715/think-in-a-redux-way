import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {SetType} from "../../redux/features/job/jobSlice.js";

const Sidebar = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="sidebar">
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <Link onClick={()=>dispatch(SetType("all"))} to="" className="main-menu menu-active" id="lws-alljobs-menu">
                                <i className="fa-solid fa-briefcase"></i>
                                <span> All Available Jobs</span>
                            </Link>
                            <ul className="space-y-6 lg:space-y-2 ">
                                <li onClick={()=>dispatch(SetType("Internship"))}>
                                    <Link className="sub-menu" to="" id="lws-internship-menu">
                                        <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                        Internship
                                    </Link>
                                </li>
                                <li onClick={()=>dispatch(SetType("Full Time"))}>
                                    <Link to="" className="sub-menu" id="lws-fulltime-menu">
                                        <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                        Full Time
                                    </Link>
                                </li>
                                <li onClick={()=>dispatch(SetType("Remote"))}>
                                    <Link to="" className="sub-menu" id="lws-remote-menu">
                                        <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                        Remote
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/new-job" className="main-menu" id="lws-addJob-menu">
                                <i className="fa-solid fa-file-circle-plus"></i>
                                <span>Add NewJob</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;