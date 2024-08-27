import { useState } from "react";
import "./education.css";

const Education = () =>{
    const [isEditing, setIsEditing] = useState(false);
    const [education, setEducation] = useState({school:'', title:'', date:''});

    const handleChange = (e) =>{
        setEducation({...education, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsEditing(false);
    }

    return (
        <div className="education">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="school" value={education.school} onChange={handleChange} placeholder="School" />
                    <input type="text" name="title" value={education.title} onChange={handleChange} placeholder="Title" />
                    <input type="text" name="date" value={education.date} onChange={handleChange} placeholder="Date" />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={()=> setIsEditing(false)}>Cancel</button>
                </form>
            ):(
                <div>
                    <h2>Education</h2>
                    <p>School: {education.school}</p>
                    <p>Title: {education.title}</p>
                    <p>Date: {education.date}</p>
                    <button type="button" onClick={()=> setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default Education;