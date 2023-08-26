import BookingItem from "./BookingItem.jsx";
import {useSelector} from "react-redux";

const BookingLists = () => {
    const data = useSelector((state)=>state.data);


    return (
        <>
            <div className="table-container">
                <table className="booking-table">
                    <thead className="bg-gray-100/50">
                    <tr className="text-black text-left">
                        <th>Destination From</th>
                        <th>Destination To</th>
                        <th className="text-center">Journey Date</th>
                        <th className="text-center">Guests</th>
                        <th className="text-center">Class</th>
                        <th className="text-center">Delete</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                    {data?.length >0 && (
                        data.map((flight,i)=>(
                            <BookingItem item={flight} key={i.toString()} index={i}/>
                        ))
                    )
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BookingLists;