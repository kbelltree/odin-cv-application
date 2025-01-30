import dateConverter from './dateConverter';

function CvExperience({ experienceData }) {
    return (
        <article className="preview__experience preview__separator">
            <h2 className="preview__section--title">
                Work Experience
            </h2>
            { experienceData.map((experienceItem) => ( 
                    <div key={experienceItem.id} className="preview__experience--container">
                        <h3 className="row">
                            <div className="preview__experience--heading">
                                <span className="preview__experience--title">{experienceItem.positionTitle}
                                </span>,&nbsp;<br />
                                <span className="preview__experience--company">{experienceItem.companyName}
                                </span>
                            </div>
                            <div>
                                <span className="preview__date">
                                    { dateConverter(experienceItem.fromDate) } 
                                    <span className="preview__date--hyphen">
                                    &nbsp;-&nbsp;  
                                    </span>
                                    { experienceItem.presentCompany ? 'Present' : dateConverter(experienceItem.toDate) }
                                </span>
                            </div>
                        </h3>
                        <div className="preview__details">
                            <p>
                                {experienceItem.responsibilities}
                            </p>
                        </div>
                    </div>
                )
            )}          
        </article>
    )
}

export default CvExperience;