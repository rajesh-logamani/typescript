// const array = ['first','second','third'];
// array.push('fourth');
// array.push(10); // will through compile time error withour array type


// const array : any = ['first','second','third'];
const array : (number | string)[] = ['first','second','third'];
array.push('fourth');
array.push(10);

console.log(`*****************Value in array*********************`)
for(const val of array){
    console.log(val);
}

console.log('***********Vaccines************');

const Vaccines: string[] = ['J&J','Pfizer','Sputnik','Covaxin'];

for(let i=0; i<Vaccines.length; i++){
    console.log(Vaccines[i]);
}

let [a,b,c,d] = Vaccines;
console.log(a,b,c,d);