import { useState } from 'react';
import Field from "./Field.jsx";
import "../styles/Section.css";

function Section({fields, submitSection, deletion = null}) {
    const [values, setValues] = useState(fields.map((field) => field.value));
    const [submitted, setSubmitted] = useState(true);

    return (
        <div className='section'>
            {fields.map((field, index) => <Field
                    key={index}
                    name={field.name}
                    type={field.type}
                    value={values[index]}
                    setValue={(newValue) => {
                        const newValues = [...values];
                        newValues[index] = newValue;
                        setValues(newValues);
                        if (submitted) {
                            setSubmitted(false);
                        }
                    }}
            />)}
            <div className='section-button-container'>
                <button className='submit-button'
                    onClick={() => {
                        submitSection(values);
                        setSubmitted(true);
                    }}
                    disabled={submitted}
                >Submit</button>
                {deletion && <button className='delete-button'
                    onClick={deletion}
                >Delete</button>}
            </div>
        </div>
    );
}

export default Section;