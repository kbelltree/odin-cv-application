function CvProfile({ profileData }){
    return (
        <article className="preview__profile">
            <h1 className="preview__name">{profileData.name}
            </h1>
            <div className="preview__contact">
                <p className="preview__contact--ph">
                    Phone:
                    <span>
                        {profileData.phone}
                    </span>
                </p>
                <span className="preview__contact--separator">/</span>
                <p className="preview__contact--email">
                    Email: 
                    <span>
                        {profileData.email}
                    </span>
                </p>
            </div>
        </article>
    )
}

export default CvProfile;