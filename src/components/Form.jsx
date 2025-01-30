import SectionProfile from './SectionProfile';
import SectionEducation from './SectionEducation';
import SectionExperience from './SectionExperience';

function Form( { formData, isReadOnly, changeHandlers, clickHandlers } ) {
    return (
        <form className="form">
            <SectionProfile 
                profileData={formData.profile} 
                isReadOnly={isReadOnly.profile}
                changeHandler={changeHandlers.profile} 
                clickHandlers={clickHandlers} 
            />
            <SectionEducation 
                educationData={formData.education} 
                isReadOnly={isReadOnly.education}
                changeHandler={changeHandlers.education} 
                clickHandlers={clickHandlers} 
            />
            <SectionExperience 
                experienceData={formData.experience} 
                isReadOnly={isReadOnly.experience}
                changeHandler={changeHandlers.experience} 
                clickHandlers={clickHandlers} 
            />
        </form>
    )
}

export default Form;