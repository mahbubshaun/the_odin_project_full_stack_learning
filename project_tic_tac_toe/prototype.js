function Person(name)
{
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log('Hello I am ' + this.name);
};

function Player(name, marker){
    this.name = name;
    this.marker = marker;

}

Player.prototype.getMarker = function(){
    console.log(`My marker is ${this.marker}`)
}

console.log(Object.getPrototypeOf(Player.prototype));

Object.setPrototypeOf(Player.prototype, Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype));

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();


//factory functions


function createUser(name)
{
    const discordName = "@" + name;
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return{
         name, discordName, getReputation, giveReputation
    }
}

const josh = createUser('josh');

josh.giveReputation();
josh.giveReputation();

console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
});