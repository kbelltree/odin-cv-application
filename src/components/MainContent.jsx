import { useState } from 'react';
import Button from './Button';
import Form from './Form';
import formStateTemplate from './formStateTemplate';
import CvPreview from './CvPreview';

function MainContent() {

    function getParsedSavedData(section = null){
        const savedData = localStorage.getItem('savedData');
        let data = null; 
        if (savedData) {
            data = JSON.parse(savedData)
            if (section) {
                data = data[section];
            } 
        }
        return data; 
    }

    function saveDataToLocalStorage(data) {
        const stringifiedData = JSON.stringify(data); 
        localStorage.setItem('savedData', stringifiedData);
    }

    function getInitialFormData() {
        // Retrieve saved form data if there is any
        const savedData = getParsedSavedData();
        if (savedData) {
            return savedData; 

        // otherwise, save the initial state to local and retrieve it
        } else {
            const defaultData =  {
                profile: { ...formStateTemplate.profile }, 
    
                // Wrap in an array to add more items in the same section later
                education: [{
                    ...formStateTemplate.education, id: crypto.randomUUID(),
                }], 
                experience: [{
                    ...formStateTemplate.experience, id: crypto.randomUUID(),
                }]
            }
            saveDataToLocalStorage(defaultData);
            return getParsedSavedData();
        } 
    }

    const [ formData, setFormData ] = useState(getInitialFormData);

    const [ isReadOnly, setIsReadOnly ] = useState({ 
        profile: false,
        education: false, 
        experience: false,
    })

    const [ isPreviewOn, setIsPreviewOn ] = useState(false);

    function updateArrayItemById(array, targetId, inputName, inputValue) {
        // update only the item that has matching targetId and no change will be made if not 
        return array.map((item) => 
            targetId === item.id ? { ...item, [inputName]: inputValue } : item 
        ); 
    }

    function getNewStateBySection(section, newId){ 
        if (section === 'profile') {
            return { ...formStateTemplate.profile };
        } else if (section === 'education' || section === 'experience') {
            return [{ ...formStateTemplate[section], id: newId }];
        } else {
            return null; 
        }
    }

    function syncLocalStorage(section, data) {
        let entireSavedData = getParsedSavedData();
        entireSavedData[section] = data; 
        saveDataToLocalStorage(entireSavedData); 
    }

    function deleteSectionItemById(array, targetId) {
        return array.filter((item) => targetId !== item.id);
    }

    const handleChange = {   

        profile: (e) => {
            const { name, value }  = e.target;
            setFormData((prev) => ({ 
                ...prev, 
                profile: {
                    ...prev.profile, 
                    [name]: value 
                }
            }));
        },

        education: (e, targetId) => { 
            const { name, value, checked, type }  = e.target;   
            setFormData((prev) => ({
                ...prev, 
                education: updateArrayItemById(prev.education, targetId, name, type ==='checkbox' ? checked : value)
            }))
        }, 

        experience: (e, targetId) => {
            const { name, value, checked, type }  = e.target;
                setFormData((prev) => ({
                    ...prev, 
                    experience: updateArrayItemById(prev.experience, targetId, name, type === 'checkbox' ? checked : value)
                }))  
        },
    }

    const handleClick = {

        handleClear: (section) => {  
            if (isReadOnly[section]) {
                alert('Click Edit first, then click Clear.')
                return; 
            }
            const newId = crypto.randomUUID();
            const newSectionForm = getNewStateBySection(section, newId);
            if (newSectionForm) {
                setFormData((prev) => ({ 
                    ...prev, 
                    [section]: newSectionForm 
                }));
                syncLocalStorage(section, newSectionForm);
                setIsReadOnly((prev) => ({ 
                    ...prev, 
                    [section]: false 
                }));
            }
            else {
                console.log('Error occurred on handleClear');
            }
        },

        handleDelete: (section, targetId) => {
            const isAddOn = section.length > 1; 
            const isSection = (section === 'education' || section === 'experience');
            if (isReadOnly[section]) {
                alert('Click Edit mode before delete.');
                return; 
            }
            if (isAddOn && isSection) {
                setFormData((prev) => ({
                    ...prev, 
                    [section]: deleteSectionItemById(prev[section], targetId)
                }));
            } else {
                console.log('Error occurred in handleDelete.');
            }
        },

        handleEdit: (section) => {
            const isSection = (section  === 'profile' || section === 'education' || section === 'experience');
            if(isSection) { 
                setFormData((prev) => ({ 
                    ...prev, 
                    [section]: getParsedSavedData(section)
                }));
                setIsReadOnly((prev) => ({ 
                    ...prev, 
                    [section]: false 
                }));
            } else {
                console.log('Error occurred on handleEdit');
            }
        }, 

        handleSave: (section) => {
            const isSection = (section  === 'profile' || section === 'education' || section === 'experience');
            if (isSection) {
                syncLocalStorage(section, formData[section]);         
                setIsReadOnly((prev) => ({ 
                    ...prev, 
                    [section]: true 
                }));
                alert(`${section[0].toUpperCase() + section.substring(1)} saved.`);
            } else {
                console.log('error occurred on handleSave');
            }
        }, 

        handleAdd: (section) => {
            if(isReadOnly[section]){
                alert('Click Edit first to add more.');
                return; 
            }
            const isSection = (section === 'education' || section === 'experience');
            if (isSection) { 
                setFormData((prev) => ({ 
                    ...prev, 
                    [section]: [
                        ...prev[section], 
                        { 
                            ...formStateTemplate[section], 
                            id: crypto.randomUUID() 
                        }
                    ]
                }));
            } else {
                console.log('Error occurred on handleAdd');
            }   
        },

        handlePreview: () => {            
            setIsPreviewOn((prev) => !prev);
        },
    }

    return (
        <>
            <main className={`main ${isPreviewOn ? 'hidden' : ''}`}>
                <Form 
                    formData={formData}     
                    isReadOnly={isReadOnly}
                    changeHandlers={handleChange} 
                    clickHandlers={handleClick} />
                <Button 
                    ariaLabel="Preview CV"
                    className="form__button form__button--preview" 
                    id="previewCV" 
                    onClick={handleClick.handlePreview} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye svg--preview"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/><title>Preview CV</title></svg>
                </Button>
            </main>
            <CvPreview 
                formData={formData}
                clickHandler={handleClick.handlePreview}
                isPreviewOn={isPreviewOn} />
        </>
    )
}

export default MainContent;