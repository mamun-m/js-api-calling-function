// object literals 


const fistfunction =(name,age)=>{
      return {
       name,age
      }
}
console.log(fistfunction('mamun',22))


let firstobject={
      first () {
      return `i am mohammad mamun mia and front and web development`
  }
}
console.log(firstobject["first mamun"])

// secod type functio 

let secondobject={
      'first mamun' () {
      return `i am mohammad mamun mia and front and web development`
  }
}
console.log()

// third system funciton 

let thirdobject={
      'first mamun' : () =>{
      return `i am mohammad mamun mia and front and web development`
  }
}
console.log(thirdobject["first mamun"])

// fourth function system 

let fourthobject={
      fourth : () =>{
      return `i am mohammad mamun mia and front and web development`
  }
}
console.log(fourthobject.fourth())