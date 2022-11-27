var fs = require('fs');

// create an array from temp file


function setArr(nameFile,titlOfSelection,indexBegining,indexEnding)
    {
        
        const contents = fs.readFileSync('./'+nameFile, 'utf-8');
        const arr = contents.split(/\r?\n/);
        var j=false;
        var arr2=[];
        var confirmation=true;
        const compteur=true;
        var date=Date();
        const contents2 = fs.readFileSync('./ARCHIVE.txt', 'utf-8');
        arr2 = contents2.split(/\r?\n/);
        for(var i=0;i<arr2.length;i++){
            if(arr2[i].includes(titlOfSelection)) j=true;}
            
        if(j==true)
            {
                console.log("You have already used this ID. Your new ID will be renamed to :  "+"< "+titlOfSelection+j/2+" >"+"\n");
                titlOfSelection=titlOfSelection+j/2;

            }
        
    
    
    // Display the array or part of it on archive file
    fs.appendFileSync('ARCHIVE.txt',"\n"+"//OPEN"+" "+titlOfSelection+"\n", function (err) {if (err) throw err;}); 

    //Display error message when id begening greater thant ending.
    if(indexBegining>=indexEnding) 
    {
        console.log("Be sure to enter the indexes correctly. Index1 should be greater than index2.");
        confirmation=false;
    } 
    for(i=indexBegining-1;i<indexEnding;i++)
        { 
            if(confirmation==false) break;
            else fs.appendFileSync('ARCHIVE.txt', arr[i]+"\n", function (err) {if (err) throw err;});
        } 

    fs.appendFileSync('ARCHIVE.txt',"\n//CLOSE"+" "+titlOfSelection+"\n"+"\n", function (err) {if (err) throw err;}); 
    if(confirmation==true) console.log("The code with the identifier  "+"< "+titlOfSelection+" >"+"  has been saved."+"\n")
    
    };



  
module.exports={setArr};
