// Calculate age in seconds

// calculate the user's age in seconds
function calculate_age(age_year) {
    // get the months from the years
    var months;
    months = age_year * 12;

    // 30 days were used as a common denominator for each month
    var days;
    days = months * 30;
    
    //get the hours from the days
    var hours;
    hours = days * 24;

    //get the minutes from the hours
    var minutes;
    minutes = hours * 60;

    //get the seconds from the hours
    var seconds = minutes * 60;
    return seconds;
};

// get the user's age in years
function get_age() {
    var age;
    try {
        age = parseInt(prompt("What is your age in years: "));
    } catch (TypeError) {
        alert("Invalid input entered");
    }
    return age;
};

// output the user's age in seconds
console.log("Age in seconds: " + calculate_age(get_age));
