let attemptCounter = 0;

document.getElementById('main_container').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const name = document.getElementById('nameInput').value;

    const resultMessageLabel = `Ey! <strong>${name}!</strong> Is this your Age?`;

    const MessageLabel = document.getElementById('msg_result_label');;
    MessageLabel.innerHTML = resultMessageLabel;
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.style.display = 'block';

    const randomMonthGenerator = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[Math.floor(Math.random() * months.length)]; // Random month from the array
    };

    const randomYearGenerator = () => {
        return Math.floor(Math.random() * (2015 - 1999 + 1)) + 1999; // Random year between 1999 and 2015
    };

    const randomDay = Math.floor(Math.random() * 31) + 1; // Random day between 1 and 31
    const randomMonth = randomMonthGenerator(); // Random month name
    const randomYear = randomYearGenerator(); // Random year between 1999 and 2015

    const formattedDate = `${String(randomDay).padStart(2, '0')} of ${randomMonth} from ${randomYear}`;

    const msg_result = document.getElementById('msg_result');
    msg_result.innerHTML = `${formattedDate}`;

    attemptCounter++;
    const msg_counter = document.getElementById('msg_counter');
    msg_counter.innerHTML = `You have tried <strong>${attemptCounter}</strong> time(s).`;

});
