document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // Month is 0-based
    const year = parseInt(document.getElementById('year').value);
    
    // Create a date object for the birth date
    const birthDate = new Date(year, month, day);
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').textContent = `Your age is: ${age} years`;
});