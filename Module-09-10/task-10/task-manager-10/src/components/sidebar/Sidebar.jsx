import sumit from '../../assets/images/avatars/sumit.png';
import akash from '../../assets/images/avatars/akash.png';
import almas from '../../assets/images/avatars/almas.png';
import saad from '../../assets/images/avatars/sadh.png';
import ferdous from '../../assets/images/avatars/ferdous.png';
import riyadh from '../../assets/images/avatars/riyadh.png';
import salahuddin from '../../assets/images/avatars/salahuddin.png';
import Members from "../members/Members.jsx";
import ProjectList from "../projects/ProjectList.jsx";


const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                 <ProjectList/>
                <Members/>
            </div>
        </>
    );
};

export default Sidebar;