function blurFunction(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    if (input.value.trim() === "") {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
}

function capitalizeFirstLetter(inputId) {
    const input = document.getElementById(inputId);
    const value = input.value.trim();
    if (value === "") return;

    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    input.value = words.join(' ');
}

function capitalizeTextarea(inputId) {
    const textarea = document.getElementById(inputId);
    let value = textarea.value.trim();

    if (value === "") return;

    // Split the textarea content into sentences
    const sentences = value.split('. ');

    for (let i = 0; i < sentences.length; i++) {
        // Split each sentence into words
        const words = sentences[i].split(' ');

        for (let j = 0; j < words.length; j++) {
            if (j === 0) {
                // Capitalize the first letter of the first word in each sentence
                words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1).toLowerCase();
            } else {
                words[j] = words[j].toLowerCase();
            }
        }

        sentences[i] = words.join(' ');
    }

    // Reassemble the sentences and update the textarea value
    textarea.value = sentences.join('. ');
}
function contactUs() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const country = document.getElementById("country");
    const subject = document.getElementById("subject");

    if (fname.value.trim() === "") {
        capitalizeFirstLetter("fname");
        blurFunction('fname', 'error-fname');
        return false;
    }

    if (lname.value.trim() === "") {
        capitalizeFirstLetter("lname");
        blurFunction('lname', 'error-lname');
        return false;
    }

    if (country.value.trim() === "") {
        blurFunction('country', 'error-country');
        return false;
    }

    if (subject.value.trim() === "") {
        capitalizeTextarea('subject');
        blurFunction('subject', 'error-subject');
        return false;
    }

    // Additional validation or form submission logic can be added here

    return true;
}