// Use the API: https://randomuser.me/api/ to fetch a user now
// Fetch a new user multiple times and store them in an array
// Then list out all the users in your address book array by name and picture
// Figure out how to fetch multiple users in one fetch request
// Fetch multiple users on window load
// Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth
// Once you have the functionality working, feel free to style and structure your address book with CSS and HTML



// let posts = [
//     {
//         gender: 'male',
//         name: [Object],
//         location: [Object],
//         email: 'iker.diez@example.com',
//         login: [Object],
//         dob: [Object],
//         registered: [Object],
//         phone: '984-733-931',
//         cell: '698-473-067',
//         id: [Object],
//         picture: [Object],
//         nat: 'ES'
//       },
//       {
//         gender: 'female',
//         name: [Object],
//         location: [Object],
//         email: 'antoinette.speck@example.com',
//         login: [Object],
//         dob: [Object],
//         registered: [Object],
//         phone: '0197-1512243',
//         cell: '0174-7041119',
//         id: [Object],
//         picture: [Object],
//         nat: 'DE'
//       },
//       {
//         gender: 'female',
//         name: [Object],
//         location: [Object],
//         email: 'judith.delacruz@example.com',
//         login: [Object],
//         dob: [Object],
//         registered: [Object],
//         phone: '(632) 252 0119',
//         cell: '(620) 976 6636',
//         id: [Object],
//         picture: [Object],
//         nat: 'MX'
//       },
//       {
//         gender: 'male',
//         name: [Object],
//         location: [Object],
//         email: 'mikola.rezanenko@example.com',
//         login: [Object],
//         dob: [Object],
//         registered: [Object],
//         phone: '(097) G91-6217',
//         cell: '(066) O86-8048',
//         id: [Object],
//         picture: [Object],
//         nat: 'UA'
//       },
//       {
//         gender: 'female',
//         name: [Object],
//         location: [Object],
//         email: 'carolina.pascual@example.com',
//         login: [Object],
//         dob: [Object],
//         registered: [Object],
//         phone: '917-919-240',
//         cell: '696-955-759',
//         id: [Object],
//         picture: [Object],
//         nat: 'ES'
//       }
// ]

// let posts = []
// let posts

const displayPost = () => {
    const allPosts = document.getElementById('all-posts')
    posts.map((post, index) => {
      const li = document.createElement('li')
      const img = document.createElement('img')
      img.src = post.picture.medium
      li.appendChild(img)
    //   console.log(`#${index}, Name: ${post}`)
      const text = document.createElement('p')
      text.innerHTML = `Name: ${post.name.first} ${post.name.last}`
      li.appendChild(text)
      allPosts.append(li)
    })
  }

window.onload = async function getPosts() {
    const response = await fetch('https://randomuser.me/api/?results=5');
    rawPosts = await response.json();
    posts = rawPosts.results
    console.log(posts)
    displayPost()
}

    // fetch('https://randomuser.me/api/?results=5')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .then(data => {
    //     posts = data;
    //     console.log("posts array: " + posts)
    // })

// window.onload = function() {
//     fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .then(data => {
//         posts = data;
//         console.log(posts)
//     })
// }





// namePicArray = posts.reduce(
//     (acc, current) => {
//         console.log(`result: ${acc}`);
//         console.log(`current: ${current}`);
//         acc.push(current.name, current.pic);
//         return acc;
//     },
//     []
// )
// console.log('new array: ' + namePicArray)

// let listElement = '<ul>'
// namePicArray.forEach((namePic) => {
//     listElement + '<li>' + namePic + '</li'
// })

// listElement += '</ul>'
// document.getElementById("picsAndNames").innerHTML = listElement
  