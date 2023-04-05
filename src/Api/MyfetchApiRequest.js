export const myFetchGetRequest= async ()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET'
    });
    const resJson=await response.json();
    return resJson;
};

// export const myFetchPostRequest= async ()=>{
//     const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
//         method:'POST',
//         body:JSON.stringify({
//             title:'foo',
//             body:'bar',
//             userId:'2'
//         }),
//         headers:{
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     });
//     const resJson=await response.json();
//     return resJson;
// };

//data: JSON.stringify({ name : "AA" }),

export const myFetchPostRequest= async data=>{
    const response=await fetch('http://api.cleverattiskills.com/api/User/IsLogin',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const resJson=await response.json();
    return resJson;
};

export const myFetchPutRequest= async data=>{
    const response=await fetch('http://api.cleverattiskills.com/api/User/IsLogin',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const resJson=await response.json();
    return resJson;
};

export const myFetchResistrationRequest= async data=>{
    const response=await fetch('http://api.cleverattiskills.com/api/Student',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const resJson=await response.json();
    return resJson;
};