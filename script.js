const contentDiv = document.querySelector('.content');
const inputField = document.querySelector('.input-field');

inputField.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const command = inputField.value.toLowerCase();
    inputField.value = '';

    if (command === 'help') {
      contentDiv.innerHTML += `
        <p>About</p>
        <p>Blog</p>
        <p>Project</p>
        <p>Contact</p>
      `;
    } else if (command === 'clear') {
      contentDiv.innerHTML = '';
    } else if (command === 'about') {
      contentDiv.innerHTML += `
        <h1>About</h1>
        <p>This is a simple website built using HTML, CSS, and JavaScript.</p>
      `;
    } else if (command === 'blog') {
      contentDiv.innerHTML += `
        <h1>Blog</h1>
        <p>Check back soon for new blog posts!</p>
      `;
    } else if (command === 'project') {
      contentDiv.innerHTML += `
        <h1>Project</h1>
        <p>Here are some of my recent projects:</p>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      `;
    } else if (command === 'contact') {
      contentDiv.innerHTML += `
        <h1>Contact</h1>
        <p>You can reach me at email@example.com.</p>
      `;
    } else {
      contentDiv.innerHTML += `
        <p>Invalid command. Type "help" for a list of commands.</p>
      `;
    }
  }
});
// tempo