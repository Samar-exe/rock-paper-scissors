### Solving rock paper scissors.

##### Understanding the problem

This game is having three elements: rock, paper, and scissors. Each element is weak against one element and strong against the other and neutral against itself.

If two players throw out the same element it will be a draw but if they throw out different elements then the stronger one wins.

##### Planning
- This program will be a console program.
- User will just enter the name of their element.
- The opponent will be the computer.
- The game will have five rounds
- After each round the output will show the selected element and the winner and the current points.
- The input will be taken using prompt.
 ##### Pseudocode
```
Take input from User
Generate input from computer
Compare the two inputs
Display result
begin next round
After rounds end, announce the winner.
```
##### Divide and Conquer

1. Let's first take the input from the user
2. Take Computer's inputs 
3. Compare the inputs
4. Decide the winner of the round.
5. Repeat these steps 5 times and each time change the final score.

# Creating the UI

1. Add buttons inside a div container.
2. Style the buttons using flexbox.
3. Style the colors.
4. Add a div below buttons to display the current score and announce winner.
5. Add a button to start another game.
6. Add link to github.



## Pseudocode with Ui

1. When user clicks element button, 
    - Take button text content as user input 
    - Generate computer input
    - Compare the input
    - Decide winner
    - Display current score to score board
    - When 5 ronds are over, display final results.

2. When User press new game button
    - Reset all variables
    - Start game again
