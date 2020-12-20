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

