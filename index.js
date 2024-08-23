// const studentinfo = {
//      name : "mohammad mamun",
//      age : 21,
//      gpa : 3.95,
//     lang : {
//      beginner :"bangla",
//      avdance : "english"
//   }
// }
// const {name,age,gpa,lang}=studentinfo;
// console.log(`${name}:${age}:${gpa}:${lang}`)



const studentinfo ={
     name :"mia mamun khan",
     age : 21,
     id: 104,
}

const firstfunction =({name,age,id})=>{
   console.log(`${name} :${age} ${id}`)
}
firstfunction(studentinfo)