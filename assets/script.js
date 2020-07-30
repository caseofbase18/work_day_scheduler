$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$("button").on("click",function(){ 
    var timeId=$(this).attr("time");
    var userTask=$(timeId).val();
    localStorage.setItem(timeId,userTask);
});

var nineAm=localStorage.getItem("#9am");
if(nineAm) {
    $("#9am").val(nineAm);
}
var tenAm=localStorage.getItem("#10am");
if(nineAm) {
    $("#10am").val(tenAm);
}
var elevenAm=localStorage.getItem("#11am");
if(nineAm) {
    $("#11am").val(elevenAm);
}
var twelvePm=localStorage.getItem("#12pm");
if(nineAm) {
    $("#12pm").val(twelvePm);
}
var onePm=localStorage.getItem("#1pm");
if(nineAm) {
    $("#1pm").val(onePm);
}
var twoPm=localStorage.getItem("#2pm");
if(nineAm) {
    $("#2pm").val(twoPm);
}
var threePm=localStorage.getItem("#3pm");
if(nineAm) {
    $("#3pm").val(threePm);
}
var fourPm=localStorage.getItem("#4pm");
if(nineAm) {
    $("#4pm").val(fourPm);
}
var fivePm=localStorage.getItem("#5pm");
if(nineAm) {
    $("#5pm").val(fivePm);
}

for(var i=9;i<=17;i++) {
    // Get the current hour

    var amPm="am";
    if(i>=12) {
        amPm="pm";
    }
    var hour=i;
    if(i>12) {
        hour-=12;
    }

    var targetId="#"+hour+amPm;

                     

    var className="future";
    /*if (currentTime > i) {
        className = "class future";
    } else if (currentTime < i) {
        className = "class past";
    } else {
        className = "class current";
    }*/
    // If currentTime > i => class future
    // else if currentTime < i class past
    // else class current

    $(targetId).addClass(className);

}
