// async/await functions javascript ---------
// async/await is a syntactic feature of programming languages that allows an asynchronous function to be structured in a way similar to ordinary synchronous function.
// async keyword
// promise inside async function
async function fst(){ //returns promise
    return 'Hello world!';
}
const var1 = fst();
console.log(var1);
async function fst2(){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(true), 1000);
        });
}
const var2 = fst2(); 
console.log(var2); // if we console var2 after 1000ms we will see the promise as fullfiled

// await ---------
function getSpecificNumber(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(33), 0); //add 1000ms here
    });
}
async function f() {
    const specificNumber = await getSpecificNumber(); // waits for 1000 sec before assigning number to specific number
    console.log(specificNumber);
}
f();
