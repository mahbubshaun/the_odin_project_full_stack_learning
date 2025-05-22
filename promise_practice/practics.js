let p = new Promise((resolve, reject)=>
{
    let a = 1+3;
    if(a==2)
    {

        resolve('success');
    }else{
        reject('error');
    }

})

p.then((message) =>
{
    console.log('this is in then', message);
}).catch((message)=>
{
    console.log('this is in catch', message);
})