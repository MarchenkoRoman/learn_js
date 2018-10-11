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

let vasya = new User('Хуй Булыжников');
console.log(vasya.firstName);
console.log(vasya.lastName);
vasya.lastName = 'Dolboeb';
console.log(vasya.lastName);

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