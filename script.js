const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

String.prototype.capitalizeFirstLetter = function() {
    this.toString();
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class Vegetable {
    constructor(obj) {
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;
        this.name = obj.name;
        this.icon = obj.icon;
        this.price = obj.price;
        this.season = obj.season
    };

    getPrice() {
        return this.season ? this.seasonKoef * this.price : this.price;
    };

    getInfo() {
        let infoString = ``;
        let copied = Object.assign({}, this);
        delete copied.price;
        delete copied.season;
        for (let [key, value] of Object.entries(copied)) {
            infoString += `${key.capitalizeFirstLetter()}: ${value}. `;
        }
        return `${infoString} Price: ${this.getPrice()}. ${this.season === true ? 'Season: true.' : ''}`
    }
}

let veggies = vegetables.map(item => new Vegetable(item));
let infoSave = veggies.map(item => item.getInfo())
let infoArr = []
for (let i = 0; i < infoSave.length; i++) {
    infoArr.push(infoSave[i]);
}
infoArr = infoArr.map(item => `<li>${item}</li>`)

document.write(`<ul>
${infoArr.join(``)}
</ul>`);

