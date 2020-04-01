/**
   Aync: Convierte la salida de una funcion un promise
   Await: Convierte un aync function a sincrono
**/

let testPromise = (x) => {
    return new Promise((resolve, reject) => {
        if (x == 1)
            resolve(x);
        else
            reject(x);
    });
};

let testAsyncPromise = async(x) => {
    return x;
};

let testSyncPromise = async () => {
    let test = await testPromise(1); //lo vuelve sincrono
    return `El resultado de await es ${test}`;
};

console.log('First print');

testPromise(1)
    .then(x => console.log(`Si es ${x}`))
    .catch(x => console.log(`No es ${x}`));

testAsyncPromise(1)
    .then(x => {return x + 1;})
    .then(y => console.log(`Async es ${y}`))
    .catch(x => console.log('Async error:', x));

testSyncPromise()
    .then(x => console.log(x));

console.log('last print');
