var ZomAPIKey = "19770ef1d81d900e465460e5b29f22bb";
var SpoonAPIKey = "bcbf713ed7404d57a08dc53d07322fa1";
var Queryurl=""

$(document).ready(function() {
    function test(){
$.ajax({
    url: Queryurl,
    method: "GET"
    }).then(function(response){
            console.log(response)
        })
    }
    test()
    console.log