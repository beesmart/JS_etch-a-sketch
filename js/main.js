var container = $("#container")


function createGrid(v){
  
  
    for (var i = 0; i < v; i++){
       row = document.createElement("div");
       row.className = "row";

       for(var j=1; j <= v; j++){
        cell = document.createElement("div");
        cell.className = "cell";
        row.appendChild(cell);
       }
       container.append(row)
    }
    hoverOver();
}


function hoverOver(){
    
    $(".cell").hover(
        function() {
            $( this ).addClass( "hover flash" );
            
          },
        function() {
            $( this ).removeClass( "flash" );
            
          }
        )
}


$('#reset').click(function(){
   $("#container").empty();
  createGrid(pickedValue);
});

$('#submit').click(function(){
  
  $("#container").empty();
  pickedValue = document.getElementById('size').value
  createGrid(pickedValue);
});

createGrid(35);

