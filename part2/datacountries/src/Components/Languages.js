import React from "react";

const Languages = ({languages}) => {
    return (
        <div className="languages-container">
            <h2>Languages</h2>
            <div className="languages-data">
                {languages.map((lang) => (
                    <p key={lang.iso639_1}>{lang.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Languages