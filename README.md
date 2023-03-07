# 💰 React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 🤔 Remember

- Pseudocode!!
- Ask clarifying questions

### 📚 User Stories

- ✅ As a user, I can see a page with a three by three grid board game with a question mark in each square.

  - checkout branch: **grid**
  - Iterate on board state bariable to display square component for each element
  - Use styling to set up grid
    - setup a div for all boxes to be able to use flexbox
    - assign a class to the div: **gameboard**
    - use **flex-wrap: wrap** to wrap the game board
    - set div width to 3x box width + border width + ~20 pixels of 'wiggle room'
    - set font-size to 150 px and text-align to center

- ✅ As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.

  - checkout branch: **alert-index**
  - Setup an onClick event in the Square component div
  - Trigger a handleClick function that will create an alert of the index of the clicked square
    - Will need to pass index as props to Square
  - Create a handleGamePlay function in app.js to receive index information from handleClick in Square.js.
  - Set handleClick to invoke the handleGamePlay function with the argument of index
  - Set handleGameplay to alert user of the index of the item clicked

- ✅ As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.

  - checkout branch: **tree-emoji**
  - create an array for board changes updatedBoard and set it to the current board state using the spread operator
  - use the index from the handleGamePlay function to use bracket notation to declare the element as a tree emoji
  - use setBoard to update the board state

- ✅ As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.

  - checkout branch: **winner-loser**
  - Use math.random to create a random number and store in state
  - Use math.random to create a random number and store in state
  - Modify handleGamePlay function to a conditional that checks if the index matches the winning, losing, or neutral position
    - winning position changes to a treasure emoji
    - losing position changes to a bomb emoji
    - neutral position changes to a tree emoji

- ✅ As a user, I can click on a “Play Again” button that will restart the game.

  - checkout branch **play-again**
  - create a function resetBoard function that resets the board state to default, and resets the location of the bombs
  - create a play again button that has an onclick to run the resetBoard function

- ✅ As a user, I can see a counter that shows how many guesses I have left. The counter starts at five and decrements one every time I click on a square that is not the treasure nor the bomb.

  - create a state variable guessesLeft that uses state
  - use props to push this into a display component GuessCounter

- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.

  - create a state variable that tracks game state (playing, won, lost)
  - Add a header section for in-game messages
  - when treasure is revealed, set state to won
  - when bomb is revealed, set state to lost
  - default state is 'playing'

- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.

- As a user, I cannot continue to play the game after I win or lose.

- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
