import "../styles/ResumeSection.css"

function ResumeSection({title, subtitle, startDate = null, endDate, description = null}) {
    return (
        <div className="resume-section">
            <div className="title-line">
                <h3>{title}</h3>
                <p>{startDate ? `${startDate} - ${endDate}` : endDate}</p>
            </div>
            <p>{subtitle}</p>
            {description && <p>{description}</p>}
        </div>
    );
}

export default ResumeSection;