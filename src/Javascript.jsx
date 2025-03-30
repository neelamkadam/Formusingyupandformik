import React from "react";

const Javascript = () => {
    //synchronuos 
    // console.log("one");
    // console.log("two");
    // console.log("three");

    //asynchronus
    // setTimeout(()=>{
    //     console.log("hello");
    // },2000);
    // console.log("neelam");

    //////// synchronus callback
    // function sum (a,b){
    //     console.log(a+b);
    // }
    // function calculator(a,b ,sumCallback){
    //     sumCallback(a,b);
    // }
    // calculator(1,2,(a,b)=>{
    //     console.log(a+b);
    // });

    //////// Asynchronus callback
    // const hello = () =>{
    //     console.log("hello");
    // }
    // setTimeout(hello, 2000);

    ///////callback hell
    // function getData(dataId,getNextData){
    //     setTimeout(()=>{
    //         console.log("data",dataId);
    //         if(getNextData){
    //             getNextData();
    //         }
    //     },2000);
    // }
    // getData(1,()=>{
    //     console.log("getting data 2");
    //     getData(2,()=>{
    //         console.log("getting data 3");
    //         getData(3,()=>{
    //             console.log("getting data 4");
    //             getData(4);
    //         })
    //     });
    // });

    /////////promises
    // function getpromise(){
    //     return new Promise((resolve,reject)=>{
    //         console.log("I am a promise");
    //         // resolve("success"); 
    //         reject("error");
    //     });
    // }
    // let promise = getpromise();
    // promise.then((res)=>{
    //     console.log("promise fulfilled",res);
    // })
    // promise.catch((error)=>{
    //     console.log("rejected  ",error);
    // })

    ///////// /////////promises chaining

    // const asynFun1 = () =>{
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             console.log("data1");
    //             resolve("success");
    //         }, 4000);
    //     })
    // }

    // const asynFun2 = () =>{
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             console.log("data2");
    //             resolve("success");
    //         }, 4000);
    //     })
    // }

    // console.log("data feacting 1");
    //  asynFun1().then((res)=>{
    //     console.log("data feacting 2");
    //     asynFun2().then((res)=>{});
    // })

    // let p2 = asynFun2();
    // p2.then((res)=>{
    //     console.log(res);
    // })

    //////////callback hell problem in using promise

    // function getData(dataId) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("data", dataId);
    //             resolve("success");
    //         }, 2000);
    //     });
    // };

    // // getData(1).then((res) => {
    // //     console.log(res);
    // //     getData(2).then(()=>{
    // //         console.log(res);
    // //     })
    // // })

    // //promise chain
    // getData(1).then((res) => {
    //     return getData(2);
    // }).then((res) => {
    //     return getData(3);
    // }).then((res) => {
    //     console.log(res);
    // })

    ///promise method 
    // let p1 = new Promise(resolve => setTimeout(() => resolve("One"), 1000));
    // let p2 = new Promise(resolve => setTimeout(() => resolve("Two"), 2000));
    // let p3 = new Promise(resolve => setTimeout(() => resolve("Three"), 3000));

    // Promise.all([p1, p2, p3]).then(results => console.log(results));

    // Promise.race([p1, p2, p3]).then(result => console.log(result));
    // Output after 1s: "One"

    // let p1 = Promise.resolve("P1 Success");
    // let p2 = Promise.reject("P2 Error");
    // let p3 = Promise.resolve("P3 Success");

    // // Promise.all([p1, p2, p3]).then((results) => console.log(results)); //not return anything
    // // Promise.race([p1, p2, p3]).then((results) => console.log(results));
    // // Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));
    // Promise.any([p1, p2, p3])
    // .then(result => console.log("Resolved:", result))
    // .catch(error => console.error("Rejected:", error));

    /////// asyn and await

    // function api (){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             console.log("weather data");
    //             resolve(200);
    //         }, 2000);
    //     })
        
    // }
    // async function getWeatherData(){
    //     await api();//1st call
    //     await api(); //2nd call
    // }
    // console.log(getWeatherData());

    //another example
    function getData(dataId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("data", dataId);
                resolve("success");
            }, 2000);
        });
    };
//  async function getAllData(){
//         await getData(1);//1st call
//         await getData(2); //2nd call
//         await getData(3); //3rd call
//         await getData(4); //4th call
//     }
//     console.log(getAllData());

//using IIFE
(async function (){
    await getData(1);//1st call
    await getData(2); //2nd call
    await getData(3); //3rd call
    await getData(4); //4th call
})();    //FUNCTION CALL NOT REQUIRED 
    

    return <h1>Javascript</h1>
}
export default Javascript;