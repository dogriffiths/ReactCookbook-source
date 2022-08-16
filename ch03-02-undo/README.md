# Create an UNDO feature

- The undo reducer is just one of the 87 recipes that can be found in O'Reilly Media's React Cookbook

[![The React Cookbook](https://github.com/dogriffiths/ReactCookbook-source/raw/master/cover.jpg)](https://www.amazon.com/React-Cookbook-Recipes-Mastering-Framework/dp/1492085847/)

[![Watch the video](./video.png)](https://youtu.be/C7MWXH7rTR4)

- Let's say you want to add an undo feature to your application
- If a user makes a change that they don't like, they can simply press undo and set the data back to its previous state
- But how can you track every change in the application's state?
- And how difficult will it be to reset old changes in the correct order?
- We can use *reducers* to implement an undo function
- Before we look at the details of how the undo feature will work, let's first take a quick look at what a reducer actually *is*
- A reducer is just a JavaScript function that can modify a state object
- It's a little like a Xerox machine
- You pass the reducer your application's state, and the reducer produces a brand new copy of the state
- But unlike a Xerox machine, a reducer doesn't produce an *exact* copy of the state you give it
- Instead, the reducer returns a modified copy of the state based on the action you want it to perform
- For example, if we're building a number puzzle that allows a user to slide tiles around
- Rather than have all the business logic mixed in with the interface code
- We can move the business logic into a reducer
- When we give the reducer the current tile positions and an instruction to move one of the tiles, the reducer returns a modified set of tile positions
- The user interface can then display the new version of the state
- We can feed the new state back into the reducer each time we want to perform another action
- That will allow the user to perform multiple actions, one after another
- We can add buttons to the interface that allow the user to shuffle or reset the tile positions
- This is a simple tile game, but we could use the same approach for something more complex like a drawing tool, a word processor, or a social network
- Now, if your application logic is in a reducer function, it's quite straightforward to make that Xerox machine go in reverse
- We can create a higher order function that can be given a reducer, and return an upgraded version
- The new upgraded reducer will keep a history of all of the states it is given, called undoHistory
- If the enhanced reducer is called with the action 'UNDO', it will return the previous state from the history
- If any other action is passed, it will forward it to the original reducer
- This means the enhanced reducer works exactly the same way as the original reducer
- But it can also undo every change that it's made
- Let's see how you can use en enahcned reducer in your code
- Here's the code for the tile puzzle
- We will enhance the reducer function by wrapping it in the higher-order function
- We can then add an undo button to the interface
- If the user clicks on the undo button, we can send an undo action to the reducer
- If we run the application now and make a few moves
- We can undo each of them by pressing the undo button
- We can simplify the code by creating a useUndoReducer hook
- Now, all you have to do in your code to make any of your reducers undo-able is replace useReducer with useUndoReducer
- Creating an undo feature is just one of the 87 recipes in O'Reilly Media's React Cookbook
- More details on the book and the complete source code are available in the description
