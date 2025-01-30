import dateConverter from './dateConverter';

function CvEducation({ educationData }) {
    return (
        <article className="preview__education preview__separator">
            <h2 className="preview__section--title">Education
            </h2>
            { educationData.map((educationItem) => (
                <div key={educationItem.id} className="preview__education--container">
                    <h3 className="row">
                        <div className="preview__education--heading">
                            <span className="preview__education--title">
                                {educationItem.studyTitle}
                            </span>,&nbsp;<br />
                            <span className="preview__education--school">
                                {educationItem.schoolName}
                            </span>
                        </div>
                        <div>
                            <span className="preview__date">
                                { dateConverter(educationItem.startDate) }
                                <span className="preview__date--hyphen"> 
                                &nbsp;-&nbsp;
                                </span>
                                { educationItem.presentSchool ? 'Present' :  dateConverter(educationItem.endDate) }
                            </span>
                        </div>
                    </h3>
                    <div className="preview__details">
                        <p>
                            {educationItem.accomplishment}
                        </p>
                    </div>
                </div>
            ))}
        </article>
    )
}

export default CvEducation;