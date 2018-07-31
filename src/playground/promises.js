const promise = new promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('sucsess');
        reject('failed');
    }, 2000);
});

promise.then((data) =>{
    console.log(data);
}).catch((error) => {
    console.log(data);
});

