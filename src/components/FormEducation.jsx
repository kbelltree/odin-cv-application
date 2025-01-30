import FormField from './FormField';
import FormTextArea from './FormTextArea';
import BtnDelete from './BtnDelete';

function FormEducation({ educationItem, isReadOnly, changeHandler, isAddOn, clickHandler }) {
    const fieldItems = {
        education: [   
            { 
                labelText: 'School Name',
                inputId: `schoolName-${educationItem.id}`, 
                name: 'schoolName', 
                value: educationItem.schoolName,
                placeholder: 'Amet University, USA', 
                onChange: (e) => changeHandler(e, educationItem.id),
                isReadOnly: isReadOnly,
            },
            {
                labelText: 'Title of Study', 
                inputId: `studyTitle-${educationItem.id}`, 
                name: 'studyTitle', 
                value: educationItem.studyTitle,
                placeholder: 'Bachelor of Science in Computer Science', 
                onChange: (e) => changeHandler(e, educationItem.id),
                isReadOnly: isReadOnly, 
            }
        ], 

        date: [
            {
                labelText: 'Start', 
                inputId: `startDate-${educationItem.id}`, 
                name: 'startDate', 
                type: 'date',
                value: educationItem.startDate,
                onChange: (e) => changeHandler(e, educationItem.id),
                isReadOnly: isReadOnly, 
            }, 
            {
                labelText: 'End', 
                inputId: `endDate-${educationItem.id}`,
                name: 'endDate', 
                type: 'date',
                value: educationItem.endDate,
                onChange: (e) => changeHandler(e, educationItem.id),
                isReadOnly: isReadOnly, 
            }   
        ], 

        accomplishment: {
                labelText: 'Accomplishment', 
                textareaId: `Accomplishment-${educationItem.id}`,
                name: 'accomplishment',
                rows: '5',
                value: educationItem.accomplishment,
                placeholder: 'e.g. GPA: 3.55 / 4.00', 
                onChange: (e) => changeHandler(e, educationItem.id),
                isReadOnly: isReadOnly, 
            }, 
    }

    return(
        <div className="form__block--education">
            { isAddOn && <BtnDelete onDelete={clickHandler} />}
            <FormField fieldItems={fieldItems.education} />
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    Date
                </legend>
                <div className="form__field--dates">
                    <FormField fieldItems={fieldItems.date} />
                    <div className="end-date--checkbox">
                        <input
                            type="checkbox"
                            name="presentSchool"
                            id={`presentSchool-${educationItem.id}`}
                            checked={educationItem.checked}
                            onChange={(e) => changeHandler(e, educationItem.id)}/>
                        <label
                            htmlFor={`presentSchool-${educationItem.id}`}
                            className="form__label form__label--checkbox">
                                Check if this is your current school
                        </label>
                    </div>
                </div>
            </fieldset>
            <FormTextArea {...fieldItems.accomplishment} />        
        </div>
    )
}

export default FormEducation;