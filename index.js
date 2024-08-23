const studentinfo = [
  { 
   name : "mia",
   age : 21,
   gpa : 3.21
   },
  { 
   name : "mamun",
   age : 22,
   gpa : 3.45
   },

  { 
   name : "hasan",
   age : 23,
   gpa : 2.54
   },
  { 
   name : "abir",
   age : 25,
   gpa : 3.21
   },
  { 
   name : "hasan",
   age : 26,
   gpa : 4.21
   },
  { 
   name : "josep",
   age : 27,
   gpa : 5.00
   },
]
const student=studentinfo.filter((x)=> x.gpa>3).filter((x)=> x.name);
console.log(student)