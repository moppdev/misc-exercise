// calculate the user's age in seconds
function calculate_age(age_year) {
    // get the months from the years
    var months, days, hours, minutes;
    months = age_year * 12;

    // 30 days were used as a common denominator for each month
    days = months * 30;
    
    //get the hours from the days
    hours = days * 24;

    //get the minutes from the hours
    minutes = hours * 60;

    //get the seconds from the hours
    var seconds = minutes * 60;
    return seconds;
};

// get the user's age in years
function get_age() {
    var age;
    try {
        age = parseInt( prompt("What is your age in years: ") );
    } catch (TypeError) {
        console.log("Invalid input entered");
    }
    return age;
};

// output the user's age in seconds
console.log("Age in seconds: " + calculate_age(get_age()));
