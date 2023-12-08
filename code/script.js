function validateInputYr(value, fieldName) {

    if ( value > 0 && value <= 2023) {
        
        return true;
    }
    else{
       alert(fieldName + " has to be positive number and less than todays year");
    return false; 
    }
    
}
function validateInputMn(value, fieldName) {
    if ( value > 0 && value <= 12) {
        
        return true;
    }
    else{
        alert(fieldName + " has to be positive number and less than 12");
    return false;
    }
    
}
function validateInputDd(value, fieldName) {
    if (value > 0 && value <=30) {
        
        return true;
    }
    else{
      alert(fieldName + " has to be positive number and less than 31");
    return false;  
    }
    
}

function saveInfo(){
    var name = document.getElementById('name').value
    var surname = document.getElementById('surname').value
    var year = document.getElementById('year').value
    var month = document.getElementById('month').value
    var day = document.getElementById('day').value

    if(!validateInputDd(day, "day") || !validateInputMn(month, "month")
     || !validateInputYr(year, "year")){
    return;
    }
    var user = {
        name: name,
        surname: surname,
        year: year,
        month : month,
        day : day
    };
    console.log("user name: " + user.name);
    console.log("user surname: " + user.surname);
    console.log("user birth date: " + user.year + "-" + user.month + "-" + user.day);

    var birthDate = new Date(year, month - 1, day);
    
    var todayDate = new Date();
    var life = todayDate - birthDate;

    var days = Math.floor(life / (1000 * 60 * 60 * 24));

    var dayEnding = (days % 10 === 1 && days % 100 !== 11) ? "diena" : "dienų";
    // alert("User has lived for " + days + " days");
    console.log(user.name + " " + user.surname + " has lived for " + days + " ir jeigu lietuviskai, tai:" + dayEnding + ".");

    var resultDiv = document.createElement("div");
    resultDiv.innerHTML = "<p>User name: " + user.name + "</p>" +
                            "<p>User surname:: " + user.surname + "</p>" +
                            "<p>User birth date: " + user.year + "-"+ user.month + "-" + user.day + "</p>" +
                            "<p>" + user.name + " " + user.surname + " has lived for " + days + " " +  " ir jeigu lietuviskai, tai:" +dayEnding + ".</p>";

    document.body.appendChild(resultDiv);
}