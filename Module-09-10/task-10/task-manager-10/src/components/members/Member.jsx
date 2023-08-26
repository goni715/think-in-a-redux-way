import sumit from "../../assets/images/avatars/sumit.png";

const Member = ({item}) => {
    const {name} = item || {}
    return (
        <>
            <div className="checkbox-container">
                <img src={sumit} alt="member" className="team-avater"/>
                <p className="label">{name}</p>
            </div>
        </>
    );
};

export default Member;