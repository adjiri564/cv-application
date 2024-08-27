import { useState } from "react";
import "./generalInfo.css";

const GeneralInfo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [info, setInfo] = useState({name:'', email:'', phone:''})

    const handleChange =(e) => {
        setInfo({...info, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    }
    return (
        <div className="general-info">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={info.name} onChange={handleChange}/>
                    <input type="email" name="email" value={info.email} onChange={handleChange}/>
                    <input type="tel" name="phone" value={info.phone} onChange={handleChange}/>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={()=> setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <div>
                    <h2>General Information</h2>
                    <p>Name: {info.name}</p>
                    <p>Email: {info.email}</p>
                    <p>Phone: {info.phone}</p>
                    <button type="button" onClick={()=> setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
        );

}

export default GeneralInfo;