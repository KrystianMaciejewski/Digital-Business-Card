import React from "react"

export default function Info() {
    return (
        <div className="info--container">
            <img 
                src="./photo.jpg" 
                alt="My photo"
                className="info--photo"
            />
            
            <h1>Krystian Maciejewski</h1>
            <h3>Trener OCR</h3>
            <h4>krystianmaciejewski.website</h4>
            <button>Email</button>
        </div>
    )
}