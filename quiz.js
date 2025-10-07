// Function to check the user's answer
function checkAnswer() {
  // Step 1: Define the correct answer
  const correctAnswer = '4';

  // Step 2: Get the user's selected answer
  const selectedRadio = document.querySelector('input[name="quiz"]:checked');

  // Check if user selected an answer
  if (!selectedRadio) {
    document.getElementById('feedback').textContent =
      'Please select an answer!';
    document.getElementById('feedback').className = 'feedback incorrect';
    return;
  }

  const userAnswer = selectedRadio.value;
  const feedbackElement = document.getElementById('feedback');

  // Step 3: Compare user's answer with correct answer
  if (userAnswer === correctAnswer) {
    // Correct answer
    feedbackElement.textContent = 'Correct! Well done.';
    feedbackElement.className = 'feedback correct';
  } else {
    // Incorrect answer
    feedbackElement.textContent = "That's incorrect. Try again!";
    feedbackElement.className = 'feedback incorrect';
  }
}

// Step 4: Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
