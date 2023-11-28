// Use the API: https://randomuser.me/api/ to fetch a user now
// Fetch a new user multiple times and store them in an array
// Then list out all the users in your address book array by name and picture
// Figure out how to fetch multiple users in one fetch request
// Fetch multiple users on window load
// Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth
// Once you have the functionality working, feel free to style and structure your address book with CSS and HTML


       // function that will reveal additional information from the API
    //    const buttonFunction = () => {
        // if (div.style.display === "none") {
        //     div.style.display = "block";
        // } else {
        //     div.style.display = "none"
        // }
    // }
    
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
    //   add a button that will reveal additional information when clicked:
      const button = document.createElement('button');
      button.innerHTML = 'More';
    //   button.onclick = "buttonFunction()";

    const div = document.createElement('div');
    const email = document.createElement('p');
    email.innerHTML = `Email: ${post.email}`;
    const cell = document.createElement('p');
    cell.innerHTML = `Cell: ${post.cell}`;
    div.appendChild(email);
    div.appendChild(cell);
    li.appendChild(div)
      
      div.style.display = "none"

    button.onclick = () => {
        // li.append(div)
        // allPosts.append(div)
        // div.style.display = "block"}
      
      if (div.style.display === "none") {
        div.style.display = "block";
        button.innerHTML = 'Less'
    } else {
        div.style.display = "none"
        button.innerHTML = 'More'
    }

       
    }
        // button.onclick = appear()
        li.appendChild(button);

    //   button.onclick = buttonFunction()
})
}

window.onload = async function getPosts() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    rawPosts = await response.json();
    posts = rawPosts.results
    console.log(posts)
    displayPost()
}

  