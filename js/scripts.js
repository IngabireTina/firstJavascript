function getGender(){
    var gender = document.getElementById("gender").value;
}
function getDob(){
    var dob = document.getElementById("dob").value;
    return dob;
}
document.getElementById("submitBtn").addEventListener('click', function(){
    var gender = getGender();
    var dob = getDob();
    var day = findDay(dob);
    displayAkanName(day, gender);
})
function findDay(dob){
    var cc = parseInt(dob.substring(0,2));
    var yy = parseInt(dob.substring(2,4));
    var mm = parseInt(dob.substring(5,7));
    var dd = parseInt(dob.substring(8,10));
   
    var dayOfTheWeek = (((cc/4)-2*cc-1) + (5*yy/4) + (26*(mm+1)/10) + dd ) % 7;
    return dayOfTheWeek;
}

