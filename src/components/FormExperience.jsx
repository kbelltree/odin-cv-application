import FormField from './FormField';
import FormTextArea from './FormTextArea';
import BtnDelete from './BtnDelete';

function FormExperience( { experienceItem, isReadOnly, changeHandler, isAddOn, clickHandler }) {
    const fieldItems = {
        experience: [
            {
                labelText: 'Company',
                inputId: `companyName-${experienceItem.id}`, 
                name: 'companyName', 
                value: experienceItem.companyName,
                placeholder: 'Lorem Tech Corp.', 
                onChange: (e) => changeHandler(e, experienceItem.id),
                isReadOnly: isReadOnly,
            }, 
            {
                labelText: 'Position',
                inputId: `positionTitle-${experienceItem.id}`,
                name: 'positionTitle', 
                value: experienceItem.positionTitle,
                placeholder: 'Senior Full-Stack Engineer', 
                onChange: (e) => changeHandler(e, experienceItem.id),
                isReadOnly: isReadOnly,
            }
        ], 

        date: [
            {
                labelText: 'From', 
                inputId: `fromDate-${experienceItem.id}`,
                name: 'fromDate', 
                type: 'date',
                value: experienceItem.fromDate,
                onChange: (e) => changeHandler(e, experienceItem.id),
                isReadOnly: isReadOnly,
            },
            {
                labelText: 'To', 
                inputId: `toDate-${experienceItem.id}`,
                name: 'toDate', 
                type: 'date',
                value: experienceItem.toDate,
                onChange: (e) => changeHandler(e, experienceItem.id),
                isReadOnly: isReadOnly,
            }
        ], 

        responsibilities: {
                labelText: 'Responsibilities', 
                textareaId: `responsibilities-${experienceItem.id}`,
                name: 'responsibilities',
                rows: '5',
                value: experienceItem.responsibilities,
                placeholder: 'e.g. \n • Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n • Laborum reiciendis reprehenderit numquam mollitia illum beatae corporis.  ', 
                onChange: (e) => changeHandler(e, experienceItem.id),
                isReadOnly: isReadOnly,
            },          
    }

    return (
        <div className="form__block--experience">
            { isAddOn && <BtnDelete onDelete={clickHandler} /> }
            <FormField fieldItems={fieldItems.experience} />
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    Date
                </legend>
                <div className="form__field--dates">
                    <FormField fieldItems={fieldItems.date} />
                    <div className="to-date--checkbox">
                        <input
                            type="checkbox"
                            name="presentCompany"
                            id={`presentCompany-${experienceItem.id}`}
                            checked={experienceItem.checked}
                            onChange={(e) => changeHandler(e, experienceItem.id)} />
                        <label
                            htmlFor={`presentCompany-${experienceItem.id}`}
                            className="form__label form__label--checkbox">
                            Check if this is your current job
                        </label>
                    </div>
                </div> 
            </fieldset>
            <FormTextArea {...fieldItems.responsibilities} />
        </div>
    )
}

export default FormExperience;