$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
setInterval(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))  
  }, 1000);

var time = moment().format("hh");
var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]
var sData = {}; 

console.log(time);
for(x of hours){
if(x == time ){
var present = $("#"+this)
present.addClass("present")
}else if(x > time){
var future = $("#"+this)
curennt.addClass("future")
}else{
    var past = $("#"+this)
    past.addClass("past")    
}
}

if (day_data !== null){
    var ex_text = JSON.parse(day_data);

    jQuery.each(ex_text, function(i, text){
        $("#text"+i).text(text)
    })
        sData = JSON.parse(day_data)
}

$("body").on("click", ".btn", function(){
    var btnid = $(this).attr("id")
    var desc_text = ("#text"+btnid).val()
    sData[btnid]=desc_text
    localStorage.setItem(JSON.stringify(sData))
})