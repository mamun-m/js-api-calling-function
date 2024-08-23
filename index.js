console.clear();
// axios.get('https://jsonplaceholder.typicode.com/posts/1')

// .then((response) => console.log(response.data))
// .catch((error) => console.log(error.message));



// axios.get('https://jsonplaceholder.typicode.com/posts')


// .then((response) => console.log(response.data))
// .catch((error) => console.log(error.message));


// axios.post('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
// })

// .then((response) => console.log(response.data))
// .catch((error) => console.log(error.message));



// axios.put('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'mamun',
//     body: 'barmmmm',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })

// .then((response) => console.log(response.data))
// .catch((error) => console.log(error.message));



// axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })

// .then((response) => console.log(response.data))
// .catch((error) => console.log(error.message));



// axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// })
// .then((response) => console.log(response.data))
// .catch((error) => console.log(error.message));

const firstfunction =(config)=>{
      return axios (config)
}

const secondfunction =()=>{
     firstfunction({
       url : 'https://jsonplaceholder.typicode.com/posts/1',
       method: 'DELETE',
       body: JSON.stringify({
       title: 'fooKADLKASDF',
       body: 'barAHDSFFD',
       userId: 1,
  }),
})
   .then((res) => {
     console.log(res.data)
   }).catch((err) => {
     console.log(err.message)
   });
}

secondfunction();