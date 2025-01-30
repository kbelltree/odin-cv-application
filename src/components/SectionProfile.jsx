import FormField from './FormField';
import BtnClear from './BtnClear';
import BtnSetEditSave from './BtnSetEditSave';

function SectionProfile({ profileData, isReadOnly, changeHandler, clickHandlers }) {
    const fieldItems = [
        { 
            labelText: 'Full Name',
            inputId: 'name', 
            name: 'name',
            value: profileData.name,
            onChange: changeHandler, 
            isReadOnly: isReadOnly, 
        }, 
        {
            labelText: 'E-mail',
            inputId: 'email', 
            name: 'email',
            type: 'email',
            value: profileData.email,
            onChange: changeHandler, 
            isReadOnly: isReadOnly,
        },
        {
            labelText: 'Phone', 
            inputId: 'phone',
            name: 'phone',
            type: 'tel',
            value: profileData.phone, 
            onChange: changeHandler, 
            isReadOnly: isReadOnly,
        }
     ] 
    return (
        <section id="profileSection" className="form__section">
            <div className="row">
                <h2 className="form__title">
                    Profile
                </h2>
                <BtnClear 
                    onClear={() => clickHandlers.handleClear('profile')} />
            </div>
            <div>
                <FormField 
                    fieldItems={fieldItems} />
                <div className="form__buttons">
                    <BtnSetEditSave  
                        onEdit={() => clickHandlers.handleEdit('profile')} 
                        onSave={() => clickHandlers.handleSave('profile')} 
                        isReadOnly={isReadOnly} />
                </div>
            </div>
        </section>
    )
}

export default SectionProfile; 