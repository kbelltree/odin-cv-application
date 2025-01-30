function FormInput ({ labelText, inputId, name, type = 'text', value, placeholder = undefined, onChange, isReadOnly = false }) {
    return (
        <div className="form__field">
            <label 
                htmlFor={inputId} 
                className="form__label">
                    {labelText}
            </label>
            <input 
                type={type} 
                id={inputId} 
                name={name} 
                value={value}
                placeholder={placeholder} 
                onChange={onChange}
                readOnly={isReadOnly}/> 
        </div>
    )
}

export default FormInput;