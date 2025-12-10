
// 1 start --

let response = {
    status: 300,
    data: {
        name: "Akshat",
        age: 23,
        isEmployed: true,
        address: {
            street: "250, Moahan Nagar",
            city: "Gwalior",
            state: "MP",
        },
    },
};

// let {status} = response; // status is in -- 1st layer
// console.log(status);

// let {
// data: { name },
// } = response; //name is in -- 2nd layer
// console.log(name);

// 1 end-- 



// 2 start--

let response1 = {

    status: 300,
    header: {
        type: "json",
        version: 1.1,
    },

    data: {
        name: "Akshat",
        age: 24,
        isEmployed: true,
        address: {
            street: "250 Mohan nagar",
            city: "Gwalior",
            state: "M.P.",
        },

        footer:{
            type: "json",
            version:1.1
        },
    },
};

// let{status} = response1
// console.log(status);

// let{
//     data:{isEmployed},
// } = response1
// console.log(isEmployed);

// let {
//     data:{address:{city},
// },
// } = response1
// console.log(city);

let { status, data} = response1;

console.log(status);
console.log(data.isEmployed);
console.log(data.address.city);



