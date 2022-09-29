import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

	function reveal() {
		var reveals = document.querySelectorAll(".reveal");
		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;
			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add("active");
			} else {
				reveals[i].classList.remove("active");
			}
		}
	}

	window.addEventListener("scroll", reveal);

	// To check the scroll position on page load
	reveal();

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
		<section className='contact'>
			<div className='contactContainer' id="contact">
				<div class="app-title reveal fade-left">
					<span>CONTACT</span>
					<span>ME</span>
				</div>
				<div className='formContainer reveal fade-right'>
					<form className="contactForm" onSubmit={sendEmail}>
						<input type="hidden" name="contact_number" />
						<input type="text" name="from_name" placeholder='NAME' />
						<input type="email" name="from_email" placeholder='EMAIL' />
						<input type="text" name="subject" placeholder='SUBJECT' />
						<textarea name="html_message" rows={"5"} placeholder='MESSAGE' />
						<input type="submit" value="SEND" />
					</form>
				</div>
			</div>
		</section>
	)
};

export default Contact;