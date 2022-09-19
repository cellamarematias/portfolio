import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

	function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_hwto52n', "template_1t6680l", e.target, 'r2t6UAfzn1d0zaKPB')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      }, (error) => {
          console.log(error.text);
      });
  }

	return (
		<div className='contactContainer' id="contact">
			<form className="contactForm" onSubmit={sendEmail}>
				<input type="hidden" name="contact_number" />
				<label>Name</label>
				<input type="text" name="from_name" />
				<label>Email</label>
				<input type="email" name="from_email" />
				<label>Subject</label>
				<input type="text" name="subject" />
				<label>Message</label>
				<textarea name="html_message" rows={"5"}/>
				<input type="submit" value="Send" />
			</form>
		</div>
	)
};

export default Contact;