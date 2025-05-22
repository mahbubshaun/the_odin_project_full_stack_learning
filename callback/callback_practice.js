// function getData(dataId, getNextData)
// {
//     setTimeout(()=>
//     {

//         console.log('data', dataId);
//         if( getNextData)
//             {
//                 getNextData();
//             }
//     }, 2000);
// }

// //Callback hell
// getData(1, ()=>
// {
//     getData(2, ()=>{
//         getData(3);
//     })
// });

// let promise = new Promise( (resolve, reject)=>
// {

//     console.log('I am a promise');
//     // resolve('success');
//     reject('error');

// });

// console.log(promise);

async function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    await setTimeout(() => {
      // console.log('data', dataId);
      resolve(dataId);
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

// getData(1)
//   .then((dataId) => {
//     console.log("data", dataId);
//     return getData(2);
//   })
//   .then((dataId) => {
//     console.log("data", dataId);
//     return getData(3);
//   }).then(dataId =>
//   {
//     console.log("data", dataId);

//   }
//   );

let data1 =  getData(1);
console.log("data", data1);
let data2 = getData(2);

console.log("data", data2);
let data3 = await getData(3);
console.log("data", data3);
