# Memory Game 🎮

A fun and interactive memory game built with Angular. The objective of the game is to challenge the player's memory by displaying sequences of colors that grow progressively longer as the player advances through levels.

## 🎯 Project Brief
This project involves creating a "Memory Game" using Angular. Players must memorize and reproduce a sequence of colors in the correct order. As levels increase, so does the difficulty, with an added color in each new sequence.

## 🚀 Features

1. **Interactive Gameplay:**
   - Start the game with a randomly generated sequence of two colors.
   - Sequences are displayed briefly for memorization.
   - Players replicate the sequence by clicking the corresponding buttons.

2. **Dynamic Difficulty:**
   - The sequence length increases with each successful level.
   - Tracks player's score based on speed and accuracy.

3. **User-Friendly Controls:**
   - Buttons to validate or reset attempts.
   - Clear feedback for success or failure.

4. **Visual Feedback:**
   - Animations for illuminated colors during sequence display.
   - Interactive button effects for clicks.

5. **Game Progression:**
   - Displays the score and level progression.
   - Ends with a final score if a mistake is made.

## 🕹️ How to Play
1. **Start the Game:**
   - Click on the "Start" button to begin.
   - A sequence of colors will be displayed for 15 seconds.
   
2. **Memorize and Reproduce:**
   - Observe the illuminated sequence.
   - Reproduce it in the correct order using color buttons.

3. **Validate or Reset:**
   - Click "Validate" to submit your answer.
   - Use "Reset" to clear your input and start over.

4. **Scoring and Levels:**
   - Earn points based on speed and accuracy.
   - Advance to the next level with an additional color added to the sequence.

5. **Game Over:**
   - If a mistake is made, the game ends, and your final score is displayed.
   - Option to restart and try again.

## 🛠️ Technologies Used
- **Angular** (Version 15+): For building the frontend and managing components.
- **TypeScript**: For strong typing and better code maintainability.
- **HTML5/CSS3**: For structuring and styling the UI.
- **@angular/animations**: For creating engaging animations.

## 🏗️ Key Components and Architecture

### Components:
1. **Game Component:**
   - Manages the core game logic.
   - Displays the sequence and handles user interactions.
   
2. **UI Component:**
   - Displays color buttons for user input.
   - Shows the game status (score, level, etc.).

3. **Scoreboard Component:**
   - Displays current score, level, and game state (win/loss).

### Services:
- **Game Service:**
  - Core logic for sequence generation, validation, and score calculation.
  - Methods:
    - `generateSequence()`: Creates a new random sequence.
    - `addColor()`: Adds a color to the sequence for the next level.
    - `verifyResponse()`: Checks if the user's input matches the sequence.
    - `resetGame()`: Resets the game state for a new round.

## 🎨 Animations
- Buttons flash or zoom during sequence playback.
- Feedback animations when the player clicks a button.
- Smooth transitions for score updates and level progression.



