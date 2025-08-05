import "../styles/Preview.css"
import ResumeSection from "./ResumeSection.jsx"

function Preview({resume}) {
    return (
        <div className="preview">
            <div className="sheet-space">
                <section className="sheet">
                    <div className="sheet-personal">
                        <p className="sheet-name">{resume.name}</p>
                        <div className="sheet-info-bar">
                            <p>{resume.phone}</p>
                            <p>|</p>
                            <p>{resume.email}</p>
                        </div>
                    </div>
                    <div className="sheet-category">
                        <div className="sheet-category-header">
                            <h2>EDUCATION</h2>
                            <hr />
                        </div>
                        {resume.education.map((entry) => 
                            <ResumeSection 
                                key={entry.id}
                                title={entry.school}
                                subtitle={entry.degree}
                                endDate={entry.gradDate}
                            />
                        )}
                    </div>
                    <div className="sheet-category">
                        <div className="sheet-category-header">
                            <h2>WORK EXPERIENCE</h2>
                            <hr />
                        </div>
                        {resume.employment.map((entry) => 
                            <ResumeSection 
                                key={entry.id}
                                title={entry.position}
                                subtitle={entry.company}
                                startDate={entry.startDate}
                                endDate={entry.endDate}
                                description={entry.description}
                            />
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Preview;