const axios = require('axios');


const ranarrSeed = "5295";//ranarr



//seedPrices();
highAlchPrices(ranarrSeed);


//hard coded ids for Ranarr seed and herbs
function seedPrices(){
    axios.get("https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item="+ 5295)
    .then((res) => { 
           console.log("Grabbing price...");
           ranarrSeedPrice = res.data.item.current.price;
    })
    .catch((err) => {
        console.error('ERR:', err)
    })
    axios.get("https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item="+ 257)
    .then((res) => { 
           console.log("Grabbing price...");
           ranarrHerbPrice = res.data.item.current.price;
    })
    .catch((err) => {
        console.error('ERR:', err)
    })
    console.log(ranarrSeedPrice - (ranarrHerbPrice * 7) + "= seed price - herb price * 7");
}


function highAlchPrices(item){
    axios.get("https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item="+ item)
    .then((res) => { 
        console.log(res.data.item.current.price);

    })
    .catch((err) => {
        console.error('ERR:', err)
        
    })
}
