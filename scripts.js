//imports
const axios = require('axios');
const fs = require('fs');

//constant declarations
const ranarrSeed = "5295";//ranarr seed 
const ranarrHerb = "257"; //ranarr herb

//functions 
ranarrs();

//code block
function findPriceOfItem(itemID){
    axios.get("https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item="+ itemID)
    .then((res) => { 
        var priceOfItem = res.data.item.current.price;//note stored as string need to parse as int before doing math 
        console.log(priceOfItem);
        return res.data.item.current.price;
    })
    .catch((err) => {
        console.error('ERR:', err)
    })
}
function ranarrs(){
    ranarrHerbFunction()
    ranarrSeedFunction()
}
function addTextToFile(text){
    fs.appendFile('prices.txt', text, function (err) {
    if (err) throw err;
    console.log('Updated added ' + text + " to the doc.");
    });
}
function ranarrHerbFunction(){
    axios.get("https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item="+ 257)
    .then((res) => { 
        var priceOfItem = res.data.item.current.price;
        var newInterger = parseInt(priceOfItem);
        console.log((newInterger * 7) + "k Is the sell price of 7 herbs, the average harvested.");
        return newInterger;
    })
    .catch((err) => {
        console.error('ERR:', err)
    })
}function ranarrSeedFunction(){
    axios.get("https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item="+ 5295)
    .then((res) => { 
        var priceOfItem = res.data.item.current.price;
        var newInteger = parseInt(priceOfItem);

        console.log(priceOfItem + " is the cost of the seed.");
        addTextToFile(priceOfItem);
        return newInteger;
    })
    .catch((err) => {
        console.error('ERR:', err)  
    })
}