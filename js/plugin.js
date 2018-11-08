let

/*let array = [1, 2, 'one'];

array.forEach((value, index, array) => {
    console.log(value, index, array);
});*/

/*let timer = setInterval(() => {
    console.log(Date.now());
}, 500);


let date = new Date();
let methods;

date.setMinutes(date.getMinutes() + 10);

date = date.toLocaleString('ru-RU', {
    year: '2-digit',
    month: 'short',
    weekday: 'long'
});

console.log(date);*/
/*
function MultiplyMaker(a) {
    let value = 1;
    return function () {
        return value *= a;
    }
}
let multiply = MultiplyMaker(3);
*/

// let html = document.documentElement;
// let body = document.body;
// let div = body.querySelector('div');
// let ul = body.querySelector('ul');
// let li = body.querySelector('li');
// let pause = 200;
//
// console.log(body);
//
// //Bubble
// html.addEventListener('click', callback, false);
// body.addEventListener('click', callback, false);
// div.addEventListener('click', callback, false);
// html.addEventListener('click', callback, false);
// ul.addEventListener('click', callback, false);
// li.addEventListener('click', callback, false);
//
// //Cature
// html.addEventListener('click', callback, true);
// body.addEventListener('click', callback, true);
// div.addEventListener('click', callback, true);
// html.addEventListener('click', callback, true);
// ul.addEventListener('click', callback, true);
// li.addEventListener('click', callback, true);
//
//
//
// function callback(e) {
//     let ms = e.timeout = (e.timeout + pause) || 0;
//     let target = e.currentTarget;
//
//     setTimeout(function () {
//         target.classList.add('highlight');
//         setTimeout(function () {
//             target.classList.remove('highlight');
//         }, pause);
//     }, ms);
//
// }

/*
let user = {
    firstName: 'Vasyok',
    sayMyName: function () {
        console.log( this.firstName );
    }
};
//user.sayMyName();
setTimeout(user.sayMyName.bind(user), 1000);
*/


/*function sumArgs() {
    let args = [].slice.call(arguments);
    return args.reduce(function (a, b) {
        return a + b;
    })
}

console.log( sumArgs(5,2,3));*/
/*

let user = {
    firstName: "Василий",
    surname: "Петров",
    patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
    alert( this[firstPart] + " " + this[lastPart] );
}

// f.call(контекст, аргумент1, аргумент2, ...)
showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
showFullName.call(user, 'firstName', 'patronym') // "Василий Иванович"

*/
/*
function showFullName() {
    alert( this.firstName + " " + this.lastName );
}

let user = {
    firstName: "Василий",
    lastName: "Петров"
};
showFullName.call(user);
*/


/*
function Article() {
    this.created = new Date();
    Article.count++;
    Article.last = this.created;

    Article.showStats = function() {
        return console.log(`Всего: ${this.count}, Последняя: ${this.last}`);
    }
}
Article.count = 0;

new Article();
new Article();


Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
*/

/*
function User(fullName) {
    this.fullName = fullName;

    Object.defineProperty(this, 'firstName', {
        get: function () {
            return this.fullName.split(' ')[0];
        },
        set: function (newFirstName) {
            return this.fullName = newFirstName + ' ' + this.lastName;
        }
    });
    Object.defineProperty(this, 'lastName', {
        get: function () {
            return this.fullName.split(' ')[1];
        },
        set: function (newLastName) {
            return this.fullName = this.firstName + ' ' + newLastName;
        }
    });

}
console.dir(User);
*/


/*function User(fullName) {

    this.fullName = fullName;

    Object.defineProperties(this, {
        firstName : {
            get: function() {
                return this.fullName.split(' ')[0];
            },
            set: function(fName) {
                this.fullName = fName + ' ' + this.lastName;
            }
        },
        lastName : {
            get: function() {
                return this.fullName.split(' ')[1];
            },
            set: function(lName) {
                this.fullName = this.firstName + ' ' + lName;
            }

        }
    });

}*/

/*let vasya = new User('Хуй Булыжников');
console.log(vasya.firstName);
console.log(vasya.lastName);
vasya.lastName = 'Dolboeb';
console.log(vasya.lastName);*/

/*User.prototype = {
    get firstName(){
        return this.fullName.split(' ')[0];
    },
    get lastName(){
        return this.fullName.split(' ')[1];
    },
    set lastName(lName){
        this.lastName = lName;
    },
    set firstName(fName){
        this.firstName = fName;
    }
}*/


/*get fullName() {
    return this.firstName + ' ' + this.surname;
},

set fullName(value) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.surname = split[1];
}
};
/*
/*function Calculator(){
    this.calculate = function(str) {
        let arr = str.split(' '),
            a = +arr[0],
            op = arr[1],
            b = +arr[2];

        if( !methods[op] || isNaN(a) || isNaN(b) ){
            return NaN;
        }
        return methods[op](a, b);

    }

    let methods = {
        '-': function (a, b) {
            return a - b;
        },
        '+': function (a, b) {
            return a + b;
        }
    };
    this.addMethod = function (name, func) {
        methods[name] = func;
    };

}

let calc = new Calculator('2 + 3');
console.log(calc);*/



/*function Accumulator(startingValue) {

     this.value = startingValue;

     this.read = function () {
         this.value += +prompt('Enter the number', 0);
     }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log( accumulator.value );*/

/*
function Calculator(){

    this.read = function(){
        this.a = +prompt('Enter first number', 0);
        this.b = +prompt('Enter second number', 0);
//        return this.a, this.b;
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
 calculator.read();
 alert(calculator.sum());
 alert(calculator.mul());

*/