import FormExperience from './FormExperience';
import Button from './Button';
import BtnClear from './BtnClear';
import BtnSetEditSave from './BtnSetEditSave';

function SectionExperience({ experienceData, isReadOnly, changeHandler, clickHandlers}) {
    return (
        <section id="experienceSection" className="form__section">

            {/* Section heading */}
            <div className="row">
                <h2 className="form__title">
                    Experience
                </h2>
                <BtnClear 
                    onClear={() => clickHandlers.handleClear('experience')}
                />
            </div>

            {/* Form and button block */}
            <div>

                {/* All forms are rebuild as state changes */}
                { experienceData.map ((experienceItem, index) => (
                        <FormExperience
                            key={experienceItem.id}
                            experienceItem={experienceItem}
                            isReadOnly={isReadOnly}
                            changeHandler={changeHandler} 
                            isAddOn={index > 0}
                            clickHandler={() => clickHandlers.handleDelete('experience', experienceItem.id)}/>
                    )
                )}

                {/* Buttons */}
                <div className="form__buttons form__buttons-horizontal">
                    <Button 
                        buttonValue="Add More Experience" 
                        className="form__button form__button--add-experience" 
                        dataSet="experience" 
                        onClick={() => clickHandlers.handleAdd('experience')} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-plus svg--add"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
                    </Button>
                    <div>
                        <BtnSetEditSave 
                            onEdit={() => clickHandlers.handleEdit('experience')} 
                            onSave={() => clickHandlers.handleSave('experience')} 
                            isReadOnly={isReadOnly} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SectionExperience;