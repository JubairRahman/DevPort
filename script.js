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
        <p>Type "Clear" to clear window</p>
      `;
    } else if (command === 'clear') {
      contentDiv.innerHTML = `Type "help" for continue`;
    } else if (command === 'about') {
      contentDiv.innerHTML += `
        <h1>About</h1>
        <p>Jubair Rahman is a QA Engineer with a passion for designing. With a keen eye for detail and a creative mind, he enjoys exploring different design tools and techniques to create beautiful and functional designs.</p> `;
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