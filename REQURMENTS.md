# Full-Stack Web Development Course
## Chapter 5 - Advanced React (Units 9 to 14)
### Project Requirements

#### Overview
- A React application for working with information through a REST API in front of a mock server: [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)
- Technologies: React Router, React Hooks, React Forms, JS Async-Await, JS Fetch

#### Part A - Learning the Structure of the Information on the Server
Go to [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/) and study the structure and methods of its use. Explore the resources on the server:
- photos
- albums
- comments
- posts
- todos
- users

**Note:**
- Each user has a number of todos, posts, and albums associated with them.
- Each post has a number of comments.
- Each album has several photos.
- The server enables all REST API operations but does not modify the information in its database.

#### Part B - Building a Local JSON-Server
1. Learn how to install and work with JSON-Server.
2. Watch the video "Fake REST API with JSON-Server" - [www.youtube.com/watch?v=1zkgdLZEdwM](https://www.youtube.com/watch?v=1zkgdLZEdwM)
3. See the JSON-Server documentation - [github.com/typicode/json-server](https://github.com/typicode/json-server)
4. Build a local copy (json.db file) of the information on [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)
5. Run a local JSON-Server on the json.db file and test various requests for information.

#### Part C - Building a React Application to Work with the Information
The application will include:
- Login page (address: `/login/`)
 - Form with username and password fields
 - Authorized user: one of the users on the server (username and password from the "website" field)
 - Unauthorized user: rejected with an appropriate message, remain on the login page
 - Authorized user: saved in Local Storage and transferred to the application page
- Registration page (address: `/register/`)
 - Form with username, password, and verify-password fields
 - Successful registration (unique username): proceed to complete user information
 - After completing user details: appropriate saves and transfer to the application page
- Application page (address: `/home/`)
 - Header with user's full name, buttons/links, and appropriate content
 - Buttons/links: Logout, Albums, Posts, Todos, Info
 - Logout button: exit the user (delete Local Storage) and return to the login page
 - Albums, Posts, Todos buttons: navigate to the corresponding page
 - Info button: display the user's personal information on the screen
 - Informative URL in the browser (e.g., `/users/2/albums/5/photos/`)

#### Part D - Operations with Todos
- Clicking the Todos button will display the active user's todos list
- Each todo item will have a serial number, title, and a checkbox indicating completion
- Add a select option to display items according to criteria (serial, completion, alphabetical, random)
- Add options to search for items by criteria (serial number, title, completion status)
- Support operations on items: add, delete, update content, update status

#### Part E - Actions with Posts
- Clicking the Posts button will display the active user's list of posts in review mode
 - In review mode, only the serial number and title of each post will be displayed
- Add options to search for posts by criteria (serial number, title)
- Support operations on posts: add, delete, update content
- Each post in the list will have a button to:
 - Select and display the post in bold with its content
 - Display the list of comments associated with the post
- For each post of the active user:
 - Add a comment with the user's identification
 - Delete or change a comment only if it is associated with the user

#### Part F - Actions with Albums
- Clicking the Albums button will display an overview of the active user's albums list
 - In overview mode, only the serial number and album title will be displayed for each album
- Add an option to search for albums by criteria (serial number, title)
- Each album in the list will have a link to:
 - Display the album with the list of photos belonging to it
 - For each photo, display the relevant image according to the `thumbnailUrl` link
 - Load photos in stages (number of images, scrolling, continue button, image slider, etc.)
- Add options to create new albums for the active user
- Add options to manage photos (add, delete, update) in the user's albums

#### Part G - Extensions (Challenges)
1. **Refresh Page in the Browser**
  - Develop appropriate mechanisms to maintain the location, status, and information in the application even after a page refresh
  - Mechanisms should be developed in compatibility with React's nature of work

2. **Information from the Cache Server**
  - Develop appropriate mechanisms in the client to prevent unnecessary requests to the server for information that has already been fetched
  - Mechanisms should be developed in compatibility with React's nature of work

3. **Preventing Access to Another User's Information**
  - Develop mechanisms to prevent a certain user from accessing the information of another user
  - The mechanisms can be combinations of tools in React, capabilities of the JSON-Server, and certain information items in the database

#### Additional Requirements
- Work in pairs
- Each pair will participate in the development of all components and technologies in the project
- The project will be developed only by the two partners, without external participation
- Presentation of the project to the evaluators will be done equally by both partners
- Knowledge sharing is allowed only within each pair, not between pairs or outside the course