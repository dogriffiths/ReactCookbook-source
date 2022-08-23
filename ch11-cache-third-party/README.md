# Caching Files with Service Workers

- Caching files with service workers is just one of the 87 recipes that can be found in O'Reilly Media's React Cookbook

[![The React Cookbook](https://github.com/dogriffiths/ReactCookbook-source/raw/master/cover.jpg)](https://www.amazon.com/React-Cookbook-Recipes-Mastering-Framework/dp/1492085847/)

[![Watch the video](./video.png)](https://youtu.be/YSePnmKCHRI)

- Modern web applications are fantastic

- They have the same features as locally installed applications

- And they give you access to information from absolutely anywhere

- On boats

- On planes

- Whilst you are being mildly annoying on a rope bridge

- They are absolutely wonderful

- Unless you have a poor network connection

- If you are designing a modern JavaScript web application, you will need to cope with a variety of different network conditions

- And that means you need to transfer data efficiently over the network

- Images, videos, stylesheets can all soak the your bandwidth

- That can lead to slow download times, unresponsive web pages and unhappy users

- And as a developer, the more data your application transfers, the greater the costs of your cloud hosting service

- That's why service workers exist

- A service worker is a type of web worker

- It's a piece of JavaScript that can run independently of the JavaScript in your web page

- A service worker is a special because it acts as a local proxy server *inside* your application, intercepting any network requests between the browser and the Internet

- One of the best ways of creating a service worker is by using Google's Workbox library

- This is already part of your project if you built your application with create-react-app

- Workbox allows you to apply strategies to whole sets of network connections

- Let's have a look at how one of those strategies -- StaleWhileRevalidate -- can drop your cloud computing costs and make the web experience much better for your users

- This is a large application

- Like many web applications it can show a lot of image files

- When the user first goes to the page, or if they hit refresh, chances are the browser will download a fresh copy of each of the image files from the server

- That will take time, and cost money

- Let's see what we can do about this

- This is a service worker that we've registered with the application

- We can create a route, which means we can create a filter for a whole set of network requests

- In this case we're going to intercept all network requests that are sent to the Google Cloud store

- We're now going to set a StaleWhileRevalidate strategy on the route, and configure it to use a local JavaScript cache called "images"

- A JavaScript cache is just like a normal browser cache, except we have complete programmatic control over how it's used

- The StaleWhileRevalidate strategy will keep a copy of any files when it first downloads them

- The copies will all be stored in the JavaScript cache

- The next time the browser application asks for a file on that route, the service worker will check to see if the file is already in the local cache

- If it is, and it's not too old, it will return the file from the cache, rather than downloading it from the network

- If the file is stale, it will download a fresh copy

- How does the service worker decide if the file is stale? It will check the max-age header each time it downloads the file

- Once the service worker is returning files from the local cache, it won't matter how many times the user refreshes the web page, they will always see the cached files

- In fact, it will load the images so rapdily that you might not even see the page refresh, it will be so quick

- Your users will be happier, and your cloud costs will be significantly lower
