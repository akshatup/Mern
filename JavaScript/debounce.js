function searchWithDebounce(fn, delay){

    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);

    };
}

function search(name){
    console.log(`searching for ${name}`);
}

const searchInput = searchWithDebounce(search, 300);
searchInput("Akshat")
searchInput("Akshat Upasani")
// searchInput("hi i am Akshat")

//text to spech

