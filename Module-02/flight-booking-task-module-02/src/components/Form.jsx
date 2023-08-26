import frame from '../assets/img/icons/Frame.svg';
import vector1 from '../assets/img/icons/Vector (1).svg';
import vector3 from '../assets/img/icons/Vector (3).svg';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../redux/booking/actions.js";


const Form = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.data);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [classed, setClassed] = useState("");

   const newFlight = {
       id:Date.now(),
       from,
       to,
       date,
       guests,
       classed
   }


   const handleSubmit = (e) => {
     e.preventDefault();
      dispatch(addItem(newFlight));
      setFrom("");
      setTo("");
      setDate("");
      setGuests("");
      setClassed("");
   }

    return (
        <>
            <div className="mt-[160px] mx-4 md:mt-[160px] relative">
                <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                    <form onSubmit={handleSubmit} className="first-hero lws-inputform">
                        {/*-- From --*/}
                        <div className="des-from">
                            <p>Destination From</p>
                            <div className="flex flex-row">
                                <img src={frame} alt=""/>
                                <select onChange={(e)=>setFrom(e.target.value)} value={from} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                                    <option value="" hidden>Please Select</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Saidpur">Saidpur</option>
                                    <option value="Cox's Bazar">Cox's Bazar</option>
                                </select>
                            </div>
                        </div>

                        {/*-- To --*/}
                        <div className="des-from">
                            <p>Destination To</p>
                            <div className="flex flex-row">
                                <img src={frame} alt=""/>
                                <select onChange={(e)=>setTo(e.target.value)} value={to} className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                                    <option value="" hidden>Please Select</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Saidpur">Saidpur</option>
                                    <option value="Cox's Bazar">Cox's Bazar</option>
                                </select>
                            </div>
                        </div>

                        {/*-- Date --*/}
                        <div className="des-from">
                            <p>Journey Date</p>
                            <input onChange={(e)=>setDate(e.target.value)} value={date} type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date"
                                   required/>
                        </div>

                        {/*-- Guests --*/}
                        <div className="des-from">
                            <p>Guests</p>
                            <div className="flex flex-row">
                                <img src={vector1} alt=""/>
                                <select onChange={(e)=>setGuests(e.target.value)} value={guests} className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                                    <option value="" hidden>Please Select</option>
                                    <option value="1">1 Person</option>
                                    <option value="2">2 Persons</option>
                                    <option value="3">3 Persons</option>
                                    <option value="4">4 Persons</option>
                                </select>
                            </div>
                        </div>

                        {/*-- Class --*/}
                        <div className="des-from !border-r-0">
                            <p>Class</p>
                            <div className="flex flex-row">
                                <img src={vector3} alt=""/>
                                <select onChange={(e)=>setClassed(e.target.value)} value={classed} className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass"
                                        required>
                                    <option value="" hidden>Please Select</option>
                                    <option value="Business">Business</option>
                                    <option value="Economy">Economy</option>
                                </select>
                            </div>
                        </div>

                        <button disabled={data.length === 3} className="addCity" type="submit" id="lws-addCity">
                            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                            </svg>
                            <span className="text-sm">
                                Book
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;