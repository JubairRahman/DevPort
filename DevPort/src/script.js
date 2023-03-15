const commandPrompt = document.getElementById('command-prompt');
const input = document.getElementById('input');
const about = document.getElementById('about');
const portfolio = document.getElementById('portfolio');
const blog = document.getElementById('blog');
const contact = document.getElementById('contact');

const contents = {
	'about': about,
	'portfolio': portfolio,
	'blog': blog,
	'contact': contact
};

input.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		const command = input.value.trim().toLowerCase();

		if (command === 'help') {
			commandPrompt.innerHTML += '<p>Available commands:</p>';
			commandPrompt.innerHTML += '<ul>';
			commandPrompt.innerHTML += '<li>about</li>';
			commandPrompt.innerHTML += '<li>portfolio</li>';
			commandPrompt.innerHTML += '<li>blog</li>';
			commandPrompt.innerHTML += '<li>contact</li>';
			commandPrompt.innerHTML += '</ul>';
		} else {
			if (contents.hasOwnProperty(command)) {
				Object.values(contents).forEach(content => content.classList.add('hidden'));

