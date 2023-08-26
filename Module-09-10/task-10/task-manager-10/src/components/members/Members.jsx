import sumit from "../../assets/images/avatars/sumit.png";
import saad from "../../assets/images/avatars/sadh.png";
import akash from "../../assets/images/avatars/akash.png";
import salahuddin from "../../assets/images/avatars/salahuddin.png";
import riyadh from "../../assets/images/avatars/riyadh.png";
import ferdous from "../../assets/images/avatars/ferdous.png";
import almas from "../../assets/images/avatars/almas.png";
import {useGetTeamQuery} from "../../redux/features/team/teamApi.js";
import Member from "./Member.jsx";

const Members = () => {
    const {data, isLoading, isError} = useGetTeamQuery();

    // decide what to render
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && data?.length > 0) {
        content = data.map((item, i) => (
            <Member item={item} key={i.toString()}/>
        ));
    }

    if (!isLoading && !isError && data?.length === 0) {
        content = <p className="text-white">No Member found!</p>;
    }



    return (
        <>
            <div className="mt-8">
                <h3 className="text-xl font-bold">Team Members</h3>
                <div className="mt-3 space-y-4">
                    {content}
                </div>
            </div>
        </>
    );
};

export default Members;