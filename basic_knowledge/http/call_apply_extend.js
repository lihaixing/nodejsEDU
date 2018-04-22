// var pet = {
//     words: '...',
//     speak: function () {
//         console.log(this.words)
//     }
// };
//
// var dog = {
//     words: 'wang'
// };
//
// pet.speak.call(dog, 'Speak');

function Pet (words) {
    this.words = words;
    this.speak = function () {
        console.log(this.words)
    }
}

function Dog (words) {
    Pet.call(this,words);
}

var dog = new Dog('wang');
dog.speak();