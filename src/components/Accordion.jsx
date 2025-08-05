import { useState } from 'react';
import Section from "./Section.jsx";
import "../styles/Accordion.css"

function Accordion({resume, setResume}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='accordion'>
            <section className='category'>
                <div className='expandable-heading'>
                    <h2>Personal</h2>
                    {activeIndex === 0 ? <button
                        onClick={() => setActiveIndex(-1)}
                    >−</button> : <button
                        onClick={() => setActiveIndex(0)}
                    >+</button>}
                </div>
                <div className={activeIndex === 0 ? 'expander expanded' : 'expander'}>
                    <div className='section-list'>
                        <Section 
                            fields={
                                [
                                    {name: "Name", type: "text", value: resume.name}, 
                                    {name: "Email", type: "email", value: resume.email}, 
                                    {name: "Phone", type: "tel", value: resume.phone}
                                ]
                            }
                            submitSection={(values) => {
                                const newResume = structuredClone(resume);
                                newResume.name = values[0];
                                newResume.email = values[1];
                                newResume.phone = values[2];
                                setResume(newResume);
                            }}
                        />
                    </div>
                </div>
            </section>
            <section className='category'>
                <div className='expandable-heading'>
                    <h2>Education</h2>
                    {activeIndex === 1 ? <button
                        onClick={() => setActiveIndex(-1)}
                    >−</button> : <button
                        onClick={() => setActiveIndex(1)}
                    >+</button>}
                </div>
                <div className={activeIndex === 1 ? 'expander expanded' : 'expander'}>
                    <div className='section-list'>
                        {resume.education.map((entry, index) => <Section 
                            key={entry.id}
                            fields={
                                [
                                    {name: "Institution", type: "text", value: entry.school}, 
                                    {name: "Degree", type: "text", value: entry.degree}, 
                                    {name: "Graduation Date", type: "text", value: entry.gradDate}
                                ]
                            }
                            submitSection={(values) => {
                                const newResume = structuredClone(resume);
                                newResume.education[index].school = values[0];
                                newResume.education[index].degree = values[1];
                                newResume.education[index].gradDate = values[2];
                                setResume(newResume);
                            }}
                            deletion={() => {
                                const newResume = structuredClone(resume);
                                newResume.education.splice(index, 1);
                                setResume(newResume);
                            }}
                        />)}
                        <button className='add-button'
                            onClick={() => {
                                const newResume = structuredClone(resume);
                                newResume.education.push({
                                    school: "",
                                    degree: "",
                                    gradDate: "",
                                    id: crypto.randomUUID()
                                });
                                setResume(newResume);
                            }}
                        >Add</button>
                    </div>
                </div>
            </section>
            <section className='category'>
                <div className='expandable-heading'>
                    <h2>Employment</h2>
                    {activeIndex === 2 ? <button
                        onClick={() => setActiveIndex(-1)}
                    >−</button> : <button
                        onClick={() => setActiveIndex(2)}
                    >+</button>}
                </div>
                <div className={activeIndex === 2 ? 'expander expanded' : 'expander'}>
                    <div className='section-list'>
                        {resume.employment.map((entry, index) => <Section 
                            key={entry.id}
                            fields={
                                [
                                    {name: "Company", type: "text", value: entry.company}, 
                                    {name: "Position", type: "text", value: entry.position}, 
                                    {name: "Start Date", type: "text", value: entry.startDate}, 
                                    {name: "End Date", type: "text", value: entry.endDate}, 
                                    {name: "Description", type: "textarea", value: entry.description}
                                ]
                            }
                            submitSection={(values) => {
                                const newResume = structuredClone(resume);
                                newResume.employment[index].company = values[0];
                                newResume.employment[index].position = values[1];
                                newResume.employment[index].description = values[2];
                                newResume.employment[index].startDate = values[3];
                                newResume.employment[index].endDate = values[4];
                                setResume(newResume);
                            }}
                            deletion={() => {
                                const newResume = structuredClone(resume);
                                newResume.employment.splice(index, 1);
                                setResume(newResume);
                            }}
                        />)}
                        <button className='add-button'
                            onClick={() => {
                                const newResume = structuredClone(resume);
                                newResume.employment.push({
                                    company: "",
                                    position: "",
                                    description: "",
                                    startDate: "",
                                    endDate: "",
                                    id: crypto.randomUUID()
                                });
                                setResume(newResume);
                            }}
                        >Add</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Accordion;