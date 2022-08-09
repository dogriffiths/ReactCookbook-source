# Centralized Error Handler

- The centralized error handler is just one of the 87 recipes that can be found in O'Reilly Media's React Cookbook

[![The React Cookbook](https://github.com/dogriffiths/ReactCookbook-source/raw/master/cover.jpg)](https://www.amazon.com/React-Cookbook-Recipes-Mastering-Framework/dp/1492085847/)

[![Watch the video](./video.png)](https://youtu.be/l85dxwaNSWs)

- Let's say you want to create a standard error dialog that can be used to display errors from anywhere in your React application
- Now you could create a callback function to display the error

````
    try {
      doSomeStuff()
    } catch (err) {
      setVisibleError('Whoopsie! That went wrong', err)
    }
````

- And then pass that function to each of the app's components, which pass it to all their child components, and their child components, and their child components
- But that's a lot of passing around
- For cross-cutting concerns, like error handling, security, and routing you don't want each component to have pass data and code through on to every child just in case they might need it
- It would be like living in an apartment building, and having to carry around the power, water and heating with you
- You just expect those things to be part of the infrastructure
- That's why in React, we can use contexts
- A context is like a storage space for data and functions
- It's a way of just making a thing part of each component's environment
- If a component puts something inside a context
- It will be available to all of that component's children, without having to be explicitly pass it to them
- We'll begin by creating a special context for our error handler callback function
- This is just a storage space for the callback function that will open the error dialog
- We'll now create a provider
- A provider injects the context into the tree of components
- We can wrap the provider in an error container
- The error container is where we create the callback function and all of the UI code that will display the error dialog
- The container controls whether the error dialog is visible, and what details appear in it
- So the error container does most of the work, but hides away all of the gory details in one easy to use component
- Let's add the error container to our main application code
- Any components that are inside the error container will be able to get hold of the error callback function and use it to report an error
- That's most of the hard work over
- Now we just need to look at how a child component can report an error
- We can create a hook to get the error callback function out of the context
- Then it becomes very easy to use the error handler in a component
- We get the callback function from the hook
- And if we ever call the callback function it will make the error dialog appear
- You can use contexts for other cross-cutting concerns like security or theme-management
- They can make your application more powerful, without having to write a lot of extra code
