const firstfunction =(x)=>{
  console.log(`number is ${x} : ${x*x} `)
}

// const y=firstfunction;
// y(5);

const secondfunction =(num, call)=>{
  call(num)
}
secondfunction(6, firstfunction)