


function ctest()
{

if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    } 
    alert(txt);
}

function msearch()
{
  var input = document.getElementById("search");
  sv = input.value;
  alert(sv);
}