function FormTextArea ({ labelText, textareaId, name, rows, value, placeholder = undefined, onChange, isReadOnly = false }) {
    return (
        <div className="form__field">
            <label 
                htmlFor={textareaId} 
                className="form__label" >
                    {labelText}
            </label>
            <textarea 
                id={textareaId} 
                name={name} 
                rows={rows} 
                value={value} 
                placeholder={placeholder} 
                onChange={onChange}
                readOnly={isReadOnly}/> 
        </div>
    )
}

export default FormTextArea;
