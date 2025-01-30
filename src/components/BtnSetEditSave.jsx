import Button from './Button'; 

function BtnSetEditSave({ onEdit, onSave, isReadOnly }) {
    return (
       <>
            { isReadOnly ?
                <Button 
                    buttonValue="Edit" 
                    className="form__button form__button--edit"
                    onClick={onEdit} 
                    ariaLabel="Activate edit mode" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3 svg--edit"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </Button> :
                 <Button 
                buttonValue="Save & Lock" 
                className="form__button form__button--save"
                onClick={onSave} 
                ariaLabel="Save the section inputs" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-save svg--save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                </Button>
            }
       </> 
    )
}

export default BtnSetEditSave