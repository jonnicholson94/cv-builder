

export const months = [
    "November 2023",
    "October 2023",
    "September 2023"
]

export const dateGenerator = () => {
    var currentDate = new Date();
    var datesArray = [];

    // Start from January 2000
    var currentMonth = 0; // JavaScript months are zero-based (0 = January)
    var currentYear = 2000;

    while (true) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var monthName = monthNames[currentMonth];
        var year = currentYear;

        // Add the date to the array
        datesArray.push(monthName + ' ' + year);

        // Move to the next month
        currentMonth++;
        if (currentMonth >= 12) {
            currentMonth = 0;
            currentYear++;
        }

        // Check if we have reached the current date
        if (currentDate.getFullYear() < currentYear ||
            (currentDate.getFullYear() === currentYear && currentDate.getMonth() < currentMonth)) {
            break;
        }
    }

    return datesArray.reverse();
}