var fs = require('fs');
var date=Date();

const displayer=require("./filesToDisplay");
const arrFile=require("./arraysFile");
 
// Setting the file ARCHIVE.txt in case it doesn't exist.


function  setAll(fileCode,id,indexBegining,indexEnding)
{
   
    fs.readdir(__dirname, (err, files) => {
    if(files.includes('ARCHIVE.txt'))
      arrFile.setArr(fileCode,id,indexBegining,indexEnding);
    else 
      {fs.appendFileSync('ARCHIVE.txt',"************** This code was added on ==> "+date+" **************"+"\n", function (err) {});
      arrFile.setArr(fileCode,id,indexBegining,indexEnding);}
    })

}
    
  
// display searching code  
const  displayCode=(id,toFolder)=>displayer.displayCodes(id,toFolder);

//diplay all id saved codes
const  displayIds=()=>displayer.displayIds();


module.exports={setAll,displayCode,displayIds};
