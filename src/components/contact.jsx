import React from 'react';
import Swal from 'sweetalert2';
import './contact.css';

const Contact = () => {
	const result = React.useState('');

	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append('access_key', 'ec647a32-473c-49ab-8c49-70645936e76d');

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			Swal.fire({
				title: 'Success!',
				text: 'Message sent!',
				icon: 'success',
				buttonsStyling: false,
				customClass: {
					confirmButton: 'swal2-button',
				},
			});
			event.target.reset();
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Something went wrong!',
			});
		}
	};

	return (
		<section className="contact">
			<form onSubmit={onSubmit}>
				<h1>Contact Us</h1>
				<p class="quote">Get a free estimate</p>
				<div className="input-box">
					<label>Name</label>
					<input type="text" className="field" name="name" required />
				</div>
				<div className="input-box">
					<label>Phone</label>
					<input type="tel" className="field" name="phone" required />
				</div>
				<div className="input-box">
					<label>Address</label>
					<input
						type="text"
						className="field"
						name="address"
						required
					/>
				</div>
				<div className="input-box">
					<label>Email</label>
					<input
						type="email"
						className="field"
						name="email"
						required
					/>
				</div>
				<div className="input-box">
					<label>Service Needed</label>
					<input
						type="text"
						className="field"
						name="service"
						required
					/>
				</div>
				<div className="input-box">
					<label>Message</label>
					<textarea
						name="message"
						className="field mess"
						rows="4"
					></textarea>
				</div>
				<button type="submit">Submit ➝</button>
			</form>
			<span>{result}</span>
		</section>
	);
};

export default Contact;
