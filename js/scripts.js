function getGender(){
    var gender = document.getElementById("gender").value;
    return gender;
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

function displayAkanName(day, gender){
    if(validateData()){
        if(gender === "female"){
            if(day === 0){
                alert("your Akan name is: Akosua");
            }else if(day === 1){
                alert("your Akan name is: Adwoa");
            }else if(day === 2){
                alert("your Akan name is: Abenaa");
            }else if(day === 3){
                alert("your Akan name is: Akua");

            }else if(day === 4){
                alert("your Akan name is: Yaa");
            }else if(day === 5){
                alert("your Akan name is: Afua");
            }else if(day === 6){
                alert("your Akan name is: Ama");
            }else{
                alert("invalid day");
            }
        }else{
            if(day === 0){
                alert("your Akan name is: Kwasi");
            }else if(day === 1){
                alert("your Akan name is: Kwadwo");
            }else if(day === 2){
                alert("your Akan name is: Kwabena");
            }else if(day === 3){
                alert("your Akan name is: Kwaku");
            }else if(day === 4){
                alert("your Akan name is: Yaw");
            }else if(day === 5){
                alert("your Akan name is: Kofi");
            }else if(day === 6){
                alert("your Akan name is: Kwame");
            }else{
                alert("invalid day");
            }
        }
    }else{
        alert("invalid date");
    }
}  
function validateData(){
    var dob = getDob();
    var m = parseInt(dob.substring(5,7));
    var d = parseInt(dob.substring(8,10));

    if ((d >= 1 || d <= 31) && (m > 0 || m <= 12)){
        return true;
    }else{
        return false;
    }
}


