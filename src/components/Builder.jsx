import { useState } from 'react';
import Accordion from "./Accordion.jsx";
import Preview from "./Preview.jsx";
import "../styles/Builder.css"

function Builder() {
    const [resume, setResume] = useState({
        name: "Firstname Lastname",
        email: "address@domain.com",
        phone: "123-456-7890",
        education: [
            {
                school: "Example University",
                degree: "B.A. of Communication",
                gradDate: "May 2000",
                id: crypto.randomUUID()
            }
        ],
        employment: [
            {
                company: "Unreal Inc.",
                position: "Place Holder",
                description: "Coordinated and managed a team of colleagues for the completion of innovative projects and implementation of effective workplace policy.",
                startDate: "June 2000",
                endDate: "August 2005",
                id: crypto.randomUUID()
            },{
                company: "Unreal Inc.",
                position: "Place Holder",
                description: "Coordinated and managed a team of colleagues for the completion of innovative projects and implementation of effective workplace policy.",
                startDate: "June 2000",
                endDate: "August 2005",
                id: crypto.randomUUID()
            }
        ]
    });

    return (
        <div className='builder'>
            <Accordion 
                resume={resume}
                setResume={setResume}
            />
            <Preview 
                resume={resume}
            />
        </div>
    );
}

export default Builder;