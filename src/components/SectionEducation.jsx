import FormEducation from './FormEducation';
import Button from './Button';
import BtnClear from './BtnClear';
import BtnSetEditSave from './BtnSetEditSave';
 
function SectionEducation( { educationData, isReadOnly, changeHandler, clickHandlers }) {
    return (
        <section id="educationSection" className="form__section">

            {/* Section heading */}
            <div className="row">
                <h2 className="form__title">
                    Education
                </h2>
                <BtnClear 
                    onClear={() => clickHandlers.handleClear('education')} />    
            </div>

            {/* Form and button block */}
            <div>

                { educationData.map((educationItem, index) => (
                        <FormEducation 
                            key={educationItem.id}
                            educationItem={educationItem}
                            isReadOnly={isReadOnly}
                            changeHandler={changeHandler} 
                            isAddOn={index > 0}
                            clickHandler={() => clickHandlers.handleDelete('education', educationItem.id)}/>
                    )
                )}

                {/* Buttons */}
                <div className="form__buttons form__buttons-horizontal">
                    <Button 
                        buttonValue="Add More Education" 
                        className="form__button form__button--add-education" 
                        onClick={() => clickHandlers.handleAdd('education')} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-plus svg--add"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
                     </Button>
                    <div>
                        <BtnSetEditSave 
                            onEdit={() => clickHandlers.handleEdit('education')} 
                            onSave={() => clickHandlers.handleSave('education')} 
                            isReadOnly={isReadOnly} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SectionEducation;

