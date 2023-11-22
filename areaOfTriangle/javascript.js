function calculateArea() {
    const length = parseFloat(document.getElementById('length').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(length) || isNaN(height)) {
        document.getElementById('result').textContent = "Enter valid numbers for length and height.";
    } else {
        const area = (length * height) / 2;

        document.getElementById('result').textContent = `The area of the triangle is: ${area} cm`;
    }
}