import FormInput from './FormInput';

function FormField( { fieldItems }) {
    return (
        <>
            { fieldItems.map((fieldItem) => (
                    <FormInput  
                        key={fieldItem.inputId}
                        labelText={fieldItem.labelText}
                        id={fieldItem.inputId}
                        name={fieldItem.name}
                        type={fieldItem.type} 
                        value={fieldItem.value}
                        placeholder={fieldItem.placeholder} 
                        onChange={fieldItem.onChange}
                        isReadOnly={fieldItem.isReadOnly}/>
                )
            )}
        </>
    )
}

export default FormField;