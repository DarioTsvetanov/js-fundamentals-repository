/* function cat(arr) {

    class Cat {

        constructor(name, age) {

            this.name = name;
            this.age = age;
        }
        
        meow() {

            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let cat of arr) {

        let curr = cat.split(' ');

        let currCat = new Cat(curr[0], curr[1]);
        currCat.meow();
    }
}
cat(['Mellow 2', 'Tom 5']) */