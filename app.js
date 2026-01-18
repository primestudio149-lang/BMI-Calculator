function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = document.getElementById('age').value;
    const resultDiv = document.getElementById('result');
    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');
    const bmiDescription = document.getElementById('bmiDescription');

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    bmiValue.textContent = bmi;
    resultDiv.style.display = 'block';

    let category = "";
    let colorClass = "";
    let message = "";

    if (bmi < 18.5) {
        category = "Underweight";
        colorClass = "underweight";
        message = "Consider a slightly higher calorie intake.";
    } else if (bmi < 25) {
        category = "Normal Weight";
        colorClass = "normal";
        message = "You are in a healthy weight range.";
    } else if (bmi < 30) {
        category = "Overweight";
        colorClass = "overweight";
        message = "Consider increasing physical activity.";
    } else {
        category = "Obese";
        colorClass = "obese";
        message = "It is recommended to consult a health professional.";
    }

    bmiCategory.textContent = category;
    bmiCategory.className = `bmi-category ${colorClass}`;

   
    let agePrefix = age ? `At ${age} years old, your ` : "Your ";
    bmiDescription.textContent = `${agePrefix} result suggests you are ${category}. ${message}`;
}