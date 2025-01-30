import CvProfile from './CvProfile';
import CvExperience from './CvExperience';
import CvEducation from './CvEducation';
import Button from './Button';
import '../styles/preview.css';


function CvPreview({ formData, clickHandler, isPreviewOn }) {
    return (
        <div className={`preview-alignment ${isPreviewOn ? '' : 'hidden'}`}>
            <section className="preview">
                <CvProfile
                    profileData={formData.profile} />
                <CvExperience
                    experienceData={formData.experience} />
                <CvEducation
                    educationData={formData.education} />
            </section>
            <Button 
                className="preview__button--back" 
                ariaLabel="Close preview" 
                onClick={clickHandler} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x svg-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/><title>Close CV Preview</title></svg>
            </ Button>
        </div>
    )
}

export default CvPreview; 