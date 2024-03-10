const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if (height == '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please give a Valid height'
    }
    else if (weight == '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a Valid weight'
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`
        if (bmi < 18.6) {
            results.innerHTML = `Your BMI is ${bmi}\n You are in Under Weight`
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `Your BMI is ${bmi}\n You are in Normal Range`
        }
        else {
            results.innerHTML = `Your BMI is ${bmi}\n You are in Over Weight`
        }

    }
})