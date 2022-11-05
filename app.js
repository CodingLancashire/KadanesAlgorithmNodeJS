//Required Files included.
const express = require('express');
const app = express();
//Used for path concatenation.
const path = require('path'); 

//Directory names - Use these when deployed.
app.use(express.static(path.join(__dirname, './public/html')));
app.use(express.static(path.join(__dirname, './public/js')));

//localhost:300/index.html - Goes to the main home page.
app.get("/index.html", (req, res) => {
res.sendFile('/index.html', { root: __dirname });
});

//The API.
app.get("/kadanes/:arrayOfData", (req, res) => 
{

//Converts, the inserted integers into an array.
var kadanesArray = req.params.arrayOfData.split(' ').map(Number);

//console.log(kadanesArray); DEBUGGING.
//Information we are sending back to the browser.
res.send(kadanesAlgorithm(kadanesArray));
});


//Connections to Port 3000.
app.listen(3000, () => console.log("Listening on Port 3000"));

//Find the maxium subarray value.
kadanesAlgorithm = (arrayOfData) =>
{
    let localMax = 0;
    let globalMax = -Infinity;


    for(let i = 0; i < arrayOfData.length; i++)
    {
    localMax = Math.max(localMax, localMax += arrayOfData[i]);
//Dynamic, compare if bigger then save the new value
    if(localMax > globalMax)
    {
        globalMax = localMax;
    }

    else
    {
        localMax = 0;
    }
    }

    return globalMax.toString();
}

