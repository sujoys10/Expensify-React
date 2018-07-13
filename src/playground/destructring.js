//Object destructring

const book = {
    name: "Fault in our stars",
    author: "Jhon Snow",
    publisher:{
        name: "titan inc."
    }
}

const { name, writter: author} = book;

const { name : publisherName = 'NoOne' } = book.publisher;

console.log(publisherName);

//array destructring

const menu = ['cold coffee', 120, 100, 400, 500];

const [coffeeType, , hotCoffee] = menu;

console.log(`our ${coffeeType} costs just ${hotCoffee}`);