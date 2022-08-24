import react from 'react';
import './form.css'
const form = () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    return ( <>
<div className="fcontainer" id="fcontainer">
	<div className="form-container sign-up-container">
		<form action="/">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="/">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="/">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

<div className='foot'>
	<p>
		Created with <i className="fa fa-heart"></i> by
		<a target="_blank" href="/">Arun</a>
		- Read how I created this and how you can join the challenge
		<a target="_blank" href="/">here</a>.
	</p>
</div>
</>
     );
}
 
export default form;