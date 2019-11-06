
function book (bookId, title, authorName){
   this.bookId=bookId;
   this.title=title;
   this.authorName=authorName;
}

var books = [
   new book(1,"Annabel","Garth Arguelles"),
   new book(2,"Drama in the Park","Cody Hardnett"),
   new book(3,"A Dad for Mommy","Sherman Spikes"),
   new book(4,"Margin for Divorce","Will Rossiter"),
   new book(5,"Nightmare's Temptation","Hilario Quill"),
   new book(6,"The Sailor's Squadron","Mark Devaughn"),
   new book(7,"The Breeding Stranger","Zachery Dildy"),
   new book(8,"Mercury Hundredth","Christian Loos"),
   new book(9,"The Con Realm","Boris Oxner"),
   new book(10,"Sleeper's Wizardry","Alonzo Humbert"),
   new book(11,"Spell Boys","Tory Grund"),
   new book(12,"Lily and the Sheikh","Archie Yeatman"),
   new book(13,"The Genesis Weapon","Manual Bodine"),
   new book(14,"The Opera Switch","Vance Hopf"),
   new book(15,"A Paper Finish","Tyler Reavis"),
   new book(16,"Amy's Creature","Jeffrey Cissell"),
   new book(17,"Tender Rats","Omar Bundrick"),
   new book(18,"The Eye of the Virgin","Nigel Sauter"),
   new book(19,"Night Relative","Sydney Crespin"),
   new book(20,"Crowning Visitors","Pablo Child")]

//Pagination
var rows = 6;
document.addEventListener("DOMContentLoaded", function() {
   showTable(0,5);
  loadButtons();
});

function loadButtons() {
  var txt="";
  var prev="";
  var last="";

  if(books.length<rows){

    txt += `<button id="button1" onclick="buttonOne(0,${books.length-1})" >1</button>`
    document.getElementById("buttonDiv").innerHTML = txt;

  }
  else{
    var numberOfButton = Math.ceil(books.length/rows);
  for(i=0;i<numberOfButton;i++){
    var start = i*rows;
    var start1 = 0*rows;
    var end = start + rows -1;
    var end1 = start1+rows-1;
    prev=txt;
    prev = `<button id="button2" onclick="showTable(${(start1)},${end1})" >${"First"}</button>`
    txt += `<button id="button1" onclick="showTable(${start},${end})" >${i+1}</button>`
    last = `<button id="button3" onclick="showTable(${start},${end})" >${"Last"}</button>`
  }
  document.getElementById("buttonPrev").innerHTML = prev;
  document.getElementById("buttonDiv").innerHTML = txt;
  document.getElementById("buttonLast").innerHTML = last;
  }
}

function showTable(startIndex,endIndex){
  var txt="";
  if(endIndex>(books.length-1)){
    endIndex= books.length-1;
  }

  for(i = startIndex; i<=endIndex;i++){
    txt = txt+
    `<tr>
    <td>${books[i].bookId}</td>
    <td>${books[i].title}</td>
    <td>${books[i].authorName}</td>
    </tr>`
  }

  document.getElementById("booklist").innerHTML = txt;
}


