
const displayPost = () => {
    const allPosts = document.getElementById('all-posts')
    posts.map((post) => {
      const li = document.createElement('li');
    //   create and add a list item containing the picture from API
      const img = document.createElement('img');
      img.src = post.picture.large;
      li.appendChild(img);
    //   create and add a list item containing first and last name from API
      const text = document.createElement('p');
      text.innerHTML = `Name: ${post.name.first} ${post.name.last}`;
      li.appendChild(text);
      allPosts.append(li);
    // create a button that will reveal additional information when clicked:
      const button = document.createElement('button');
      button.innerHTML = 'More';
    // create div element to hold additional information that will appear when button is clicked:
    const div = document.createElement('div');
    const email = document.createElement('p');
    email.innerHTML = `Email: ${post.email}`;
    const cell = document.createElement('p');
    cell.innerHTML = `Cell: ${post.cell}`;
    div.appendChild(email);
    div.appendChild(cell);
    li.appendChild(div)
    div.style.display = "none"
    // function that will allow the button to make information appear and disappear.
    button.onclick = () => {
      if (div.style.display === "none") {
        div.style.display = "block";
        button.innerHTML = 'Less'
    } else {
        div.style.display = "none"
        button.innerHTML = 'More'
    }
    }
    // add the button to the DOM:
    li.appendChild(button);
})
}
// API request and call function that organizes the returned info in the DOM
window.onload = async function getPosts() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    rawPosts = await response.json();
    posts = rawPosts.results
    console.log(posts)
    displayPost()
}

  