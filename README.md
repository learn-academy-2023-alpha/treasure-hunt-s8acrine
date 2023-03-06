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

- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
- As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.
- As a user, I can click on a “Play Again” button that will restart the game.
- As a user, I can see a counter that shows how many guesses I have left. The counter starts at five and decrements one every time I click on a square that is not the treasure nor the bomb.
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
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
