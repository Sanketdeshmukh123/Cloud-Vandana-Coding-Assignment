const input = prompt("Enter numbers separated by spaces:");

// Spliting the input into an array of numbers
const numbers = input.split(" ").map(Number);

// Checking the input is valid
if (!numbers.every(Number.isFinite)) {
    console.log("Invalid input. Please enter valid numbers.");
} else {
    // Sort the array in descending order
    numbers.sort((a, b) => b - a);

    // Display the sorted array
    console.log("Sorted in descending order: " + numbers);
}
