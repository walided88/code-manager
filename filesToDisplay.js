var fs = require('fs');
const arrFile=require("./arraysFile");


// display all or the part of the script
function displayCodes(titlOfSelection,sourcefile="empty")
{
  
  var access=false;
  const contents = fs.readFileSync('./ARCHIVE.txt', 'utf-8');
  var arr = contents.split(/\r?\n/);
  for(var i=0;i<arr.length;i++) if(arr[i].includes(titlOfSelection))access=true;

  if (access==false) console.log("There is no identifier with such a name. Please use the <displayIds> method to check out the list of IDs you created.");

  else if(access==true)
{
  //displaying the selection       
  console.log("You asked for the code with the identifier :"+"< "+titlOfSelection+" >"+"\n")
  for(var i=arr.indexOf("//OPEN"+" "+titlOfSelection)+1;i<arr.indexOf("//CLOSE"+" "+titlOfSelection);i++) 
{
  
  if(sourcefile!="empty") fs.appendFileSync(sourcefile, arr[i]+"\n", function (err) {if (err) throw err;});
      
  else if(sourcefile=="empty") console.log(arr[i]);
}}

}

//fct to display all id created
function displayIds()
{
   var j=1
   const contents = fs.readFileSync('./ARCHIVE.txt', 'utf-8');
   arr = contents.split(/\r?\n/);
   console.log("The list of registered identifiers :\n");
   for(i=0;i<arr.length;i++)
   {
    
    if(arr[i].includes("//OPEN"))
    {
      console.log(j,"-", arr[i].substr(6));
      j++;
    }
    
   }
console.log("\n");
}

module.exports={displayCodes,displayIds};

