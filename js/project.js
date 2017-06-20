$("submit").on("click", function(){
 $(this).next().slideToggle(500);
 $(this).find("paragraphs").toggleClass("submit");
 $(this).find("paragraphs").toggleClass("submit")$});

//after lorem is selected and a number of paragraphs is entered
//--after hitting generate button number of paragraphs will appear

$("button").on("click", lorem);

function lorem() {
    var message = $("input").val();
    var paragraphText = "<p>" +  message + "</p>";
     $("div").append(paragraphText);
   $("input").val("");
}

//i thought this below would make the nav section work but i was a fool...
//not sure what to do.

$(document).ready(function(){
  $("#nav").on("click", function(e){
    if($(this).parent().has("form")) {
      e.preventDefault();
    }