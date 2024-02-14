import './get-in-contact.scss';

const GetInContact = ()=> (

    <div className='get-in-contact-container'>
        <h1 className='get-in-contact-title'>Contact Me</h1>

        <div className="get-in-contact-form">
            <form className='get-in-touch-text' action="https://formsubmit.co/sagidanowar@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false"/>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" placeholder="Sagid Anowar" id="name" required/>
                <label htmlFor="email">Email Address</label>
                <input type="email" placeholder="email@example.com" required id="email" name="email"/>
                <label htmlFor="name">Message</label>
                <textarea name="text" type="text" placeholder="How can I help ?"></textarea>
                <button className="button-container-message" message={true.toString()} type="submit">Send Message</button>
                <input type="hidden" name="_next" value="https://www.sagidanowar.com/thank-you"></input>
            </form>   
        </div>

    </div>
);

export default GetInContact;