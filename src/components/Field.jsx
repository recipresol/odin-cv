import "../styles/Field.css"

function Field({name, type, value, setValue}) {
    return (
        <div className='field'>
            <label>{name}
                {type === "textarea" ? <textarea 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                /> : <input
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />}
            </label>
        </div>
    );
}

export default Field;