$(function(){
  $.getJSON("quotes.json", function(data){
    $('.quote p').html(data[0]);
  });
});
