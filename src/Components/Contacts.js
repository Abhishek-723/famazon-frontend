import React from 'react'
import '../Styles/Contacts.css'

function Contacts() {
    return (
        <div className="background">
            <div className="contacts-container">
                <div className="user-details">
                    <div className="title">
                        <h1>Write Us</h1>
                        <div className="solid-line"></div>
                    </div>
                    <div className="user-form">
                        <label for="name">NAME</label> <br/>
                        <input type="text" name="name" placeholder="Enter your name"/> <br/>
                        <label for="email">EMAIL</label> <br/>
                        <input type="text" name="email" placeholder="Enter your email"/>
                    </div>
                </div>

                <div className="message">
                    <label for="message">Message</label>
                    <textarea name="message" placeholder="Write Your message here" rows="15" column="35"/>
                    <button>SEND MESSAGE</button>
                </div>
                
            </div>
        </div>
    )
}

export default Contacts
