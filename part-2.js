var fs = require('fs');
var fileContents = fs.readFileSync('shopping-basket.json', 'utf-8');
var data = JSON.parse(fileContents);

for (var item of data.basket){
    var cost = item.quantity * item.price;
    console.log(item.name + ' ' + cost)
    if (item.name == 'Candles'){
        item.quantity = 10;
    }
}

var jsonString = JSON.stringify(data, null, 2)

fs.writeFileSync('new-basket.json', jsonString, 'utf-8');
