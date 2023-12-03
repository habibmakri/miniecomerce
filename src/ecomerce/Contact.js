import React from 'react'

export default function Contact() {
    return (
        <div>
            <div class="split-vue">
                <div className='s1'>
                    <h1>STORE FEEDBACK</h1>
                    <p>Tell us about an in-store experience, inquire about hiring opportunities, or ask about an order placedthrough our online order ahead app.</p>
                    <h1>STORE FEEDBACK</h1>
                    <p>Tell us about an in-store experience, inquire about hiring opportunities, or ask about an order placedthrough our online order ahead app.</p>
                    <h1>STORE FEEDBACK</h1>
                    <p>Tell us about an in-store experience, inquire about hiring opportunities, or ask about an order placedthrough our online order ahead app.</p>
                    <p className="contactnumber">555-888-777</p>
                </div>
                <div className='s2'>
                <input type="text" placeholder="Name*"/>
                <input type="text" placeholder="Email*"/>
                <input type="text" placeholder="What is the subject of your  message"/>
                <textarea name="content" id="" cols="30" rows="10" placeholder="Message" ></textarea>
                <button> Send us An Email</button>
                </div>
            </div>
        </div>
    )
}
