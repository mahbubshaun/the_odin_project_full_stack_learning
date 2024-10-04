const playerOne = {
    "name": "shaun",
    "marker": "X"
}

console.log(playerOne.name);
console.log(playerOne["name"]);

function Player(name, marker)
{
    this.name = name;
    this.marker = marker;
    this.sayNmae = function()
    {
        console.log(this.name);
    }
}

const playersh = new Player("shaun", "x");
playersh.sayNmae();

function Book(title, author, pages)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function()
    {
        return this.title+ " by" +this.author+","+this.pages+"pages, not read yet"
    }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '255');

console.log(book1.info())
