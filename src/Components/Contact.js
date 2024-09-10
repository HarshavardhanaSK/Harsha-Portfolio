import React, { useState } from "react";

function Contact() {
    const [formDtat, setFormdata] = useState({
        name: "", email: "", message: ""
    });

    const handelChange = (event) => {
        const { name, value } = event.target;

        setFormdata({
            ...formDtat,
            [name]: value
        });
    }

    const handelSubmit = (event) => {
        event.preventDefault();

        const mailtoLink = `mailto:nishanthharsha23@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(formDtat.name)}%0AEmail:%20${encodeURIComponent(formDtat.email)}%0AMessage:%20${encodeURIComponent(formDtat.message)}`;
        
        window.location.href = mailtoLink;

        console.log("name:", formDtat.name);
        console.log("email:", formDtat.email);
        console.log("message:", formDtat.message);
    }

    return (
        <div className="BOdy-2">
            <div className="BOdy-3">
                <div className="COnt-box">
                    <form className="COnt" onSubmit={handelSubmit}>
                        <input 
                            type="text"
                            name="name"
                            placeholder="NAME"
                            value={formDtat.name}
                            onChange={handelChange}
                        /><br/>

                        <input 
                            type="email"
                            name="email"
                            placeholder="EMAIL"
                            value={formDtat.email}
                            onChange={handelChange}
                        /><br/>

                        <input 
                            type="text"
                            name="message"
                            placeholder="MESSAGE...."
                            value={formDtat.message}
                            onChange={handelChange}
                        /><br/>
                        
                        <button type="submit">SUBMIT RESPONSE</button>
                    </form>
                </div>           
            </div>
        </div>
    );
}
export default Contact;