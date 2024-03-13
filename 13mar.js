//LOGICAL OPERATORS
// let a=22;
// let b=20;

// console.log(a>b && a==22)
// // console.log(a<b || b==20)
// console.log(a<b || b==22)
// console.log(!false)

//Bitwise Operators

//1=00000001
//2=00000010

// console.log(1|2)
// console.log(1&2)
// console.log(1&1)


// const read= 4;
// const write=2;
// const execute=1;
// let permi=0;
// permi=permi| read| write| execute
// console.log(permi)

// let message=(permi& read)? "yes" : "no";
// console.log(message);

// let a =0b1010;
// // let a=2;
// c=~a;//NOT
// console.log(c);

//Bitwise left

// let b= 0b010
// d = b<<2
// console.log(d);

// bitwise right
// let b= 0b1010
// d = b>>2
// console.log(d);


//BigInt Operators
// const a = Number(1n) + 2; 
// const b = 1n + BigInt(2); 
// console.log(b)

// let x= 10;
// console.log((typeof(x)));


// let y= 1678888888888888888888;
// let z= 23455678890067789090;
// console.log(y+z);
// console.log(y*z);
// console.warn(x*z*z);
// console.warn(typeof(y));

// let g= 100n
// let f= BigInt(229000);
// console.log(typeof(g));
// console.log(g , f);
// console.warn(f/g);
// console.warn(f===229000);
// console.warn(Math.max(f,g));// cannot be converted


// const b = 3 > 2n;

// console.log(b);

// String opertors

let nami="Cocoon";
let name="Rose"
console.warn(nami.length); 
// console.warn(nami.toUppercase());
// console.warn(nami.toLowercase());
console.log(nami.slice(2,4));
console.log(nami.replace("Coc","P"));
console.log(nami.concat(" ",name));
let umm="     moon          "
console.warn(umm);
// console.warn(umm.trim());

//Tenary Operator
let age = 23
const status = age >= 18 ? "adult" : "minor";
console.log(status);

var x=15
var z;
// const check= (x>z)? z="true": z= "false";
// console.log(check);
// z=(x>z)? "true":  "false";
z="The value is:" + ((x>z)? "true":  "false")
console.log(z);