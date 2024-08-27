import { useState } from "react";
import "./experience.css"

const Experience = () =>{
    const [isEditing, setIsEditing] = useState(false);
    const [experience, setExperience] = useState({company:'', position:'', responsibilities:'', date:''});
    const handleChange = (e) =>{
        setExperience({...experience, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="experience">
            {isEditing? (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="company" value={experience.company} onChange={handleChange} placeholder="Company"/>
                    <input type="text" name="position" value={experience.position} onChange={handleChange} placeholder="Position" />
                    <textarea name="responsibilities" id="" value={experience.responsibilities} onChange={handleChange} placeholder="Responsibilities"></textarea>
                    <input type="date" name="date" value={experience.date} onChange={handleChange} placeholder="Date" />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={()=> isEditing(false)}>Cancel</button>
                </form>
            ):(
                <div>
                    <h2>Experience</h2>
                    <p>Company: {experience.company}</p>
                    <p>Position: {experience.position}</p>
                    <p>Responsibilities: {experience.responsibilities}</p>
                    <p>Date: {experience.date}</p>
                    <button type="button" onClick={()=> setIsEditing(true)}>Edit</button>

                </div>
            )}
        </div>
    )
}

export default Experience