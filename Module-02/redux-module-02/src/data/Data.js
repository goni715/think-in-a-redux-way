const data = [
    {
        name:"Sandal 01",
        tag:"Sandal",
        price: 50,
    },
    {
        name:"Sandal 02",
        tag:"Sandal",
        price: 70,
    },
    {
        name: "Sandal 03",
        tag: "Sandal",
        price: 80,
    },
    {
        name: "Sandal 04",
        tag: "Sandal",
        price: 120,
    },
    {
        name:"Sandal 05",
        tag:"Sandal",
        price: 130,
    },
    {
        name:"Sandal 06",
        tag:"Sandal",
        price: 150,
    },
    {
        name:"Sandal 07",
        tag:"Sandal",
        price: 50,
    },
    {
        name:"Sandal 08",
        tag:"Sandal",
        price: 190,
    },
    {
        name: "Sandal 09",
        tag: "Sandal",
        price: 170,
    },
    {
        name: "Sandal 10",
        tag: "Sandal",
        price: 40,
    },
    {
        name:"Sandal 11",
        tag:"Sandal",
        price: 130,
    },
    {
        name:"Sandal 12",
        tag:"Sandal",
        price: 60,
    },
    {
        name:"Sandal 13",
        tag:"Sandal",
        price: 100,
    }
]

const fromPrice = 50;
const toPrice = 150;

const result = data.filter(({price})=>price >= fromPrice && price <= toPrice);
console.log(result);
