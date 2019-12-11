const http = new EasyHTTP;


//Get Users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));


// User Data
const data = {
    name: 'Darren SooHoo',
    username: 'darrensoohoo',
    email: 'dsoohoo@gmail.com'
}


// // Create user
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));



// // Update Post
http.put('https://jsonplaceholder.typicode.com/users/5', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));


// // Delete Post
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));


    
