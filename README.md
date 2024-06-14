# FSWD-Project-5

# Project Pages and Components

## Login Page (`/login`)

### Requirements
- Form with username and password fields
- Validate user credentials against server data (username and password from "website" field)
- Display appropriate message for unauthorized users and remain on the login page
- Upon successful login, save user data in Local Storage and navigate to the Home page

### Components
- `LoginForm` component
  - Input fields for username and password
  - Submit button
  - Validation and error handling
- `MessageDisplay` component (optional)
  - Display success/error messages

## Registration Page (`/register`)

### Requirements
- Form with username, password, and verify-password fields
- Validate username for uniqueness against server data
- Upon successful registration, navigate to a page to complete user information
- After completing user details, save user data and navigate to the Home page

### Components
- `RegistrationForm` component
  - Input fields for username, password, and verify-password
  - Submit button
  - Validation and error handling
- `UserDetailsForm` component (optional)
  - Input fields for additional user information (e.g., name, email, etc.)
  - Submit button
- `MessageDisplay` component (optional)
  - Display success/error messages

## Home Page (`/home`)

### Requirements
- Display user's full name in the header
- Provide navigation buttons/links for Logout, Albums, Posts, Todos, and Info
- Logout button should clear user data from Local Storage and navigate to the Login page
- Albums, Posts, Todos buttons should navigate to their respective pages
- Info button should display the user's personal information on the screen

### Components
- `Header` component
  - Display user's full name
  - Render navigation buttons/links
- `UserInfo` component
  - Display user's personal information
- `MessageDisplay` component (optional)
  - Display success/error messages

## Todos Page

### Requirements
- Display the active user's todos list
- Each todo item should have a serial number, title, and a checkbox indicating completion status
- Provide options to filter/sort todos by criteria (serial, completion, alphabetical, random)
- Provide options to search for todos by criteria (serial number, title, completion status)
- Support operations on todos: add, delete, update content, update status

### Components
- `TodoList` component
  - Render the list of todos
  - Implement filtering/sorting options
  - Implement search functionality
- `TodoItem` component
  - Display todo details (serial number, title, completion status)
  - Render checkbox for completion status
  - Provide buttons/options for update and delete operations
- `TodoForm` component
  - Input fields for adding/updating a todo
  - Submit button
  - Validation and error handling

## Posts Page

### Requirements
- Display the active user's list of posts in review mode
  - In review mode, show only the serial number and title of each post
- Provide options to search for posts by criteria (serial number, title)
- Support operations on posts: add, delete, update content
- Each post should have a button to:
  - Select and display the post in bold with its content
  - Display the list of comments associated with the post
- For each post of the active user:
  - Add a comment with the user's identification
  - Delete or change a comment only if it is associated with the user

### Components
- `PostList` component
  - Render the list of posts in review mode
  - Implement search functionality
- `PostItem` component
  - Display post details (serial number, title)
  - Provide button to select and display post content
  - Provide button to display associated comments
- `PostDetails` component
  - Display selected post content in bold
- `CommentList` component
  - Render the list of comments for a selected post
- `CommentItem` component
  - Display comment details
  - Provide buttons/options for update and delete operations (if associated with the user)
- `CommentForm` component
  - Input field for adding a comment
  - Submit button
  - Validation and error handling
- `PostForm` component
  - Input fields for adding/updating a post
  - Submit button
  - Validation and error handling

## Albums Page

### Requirements
- Display an overview of the active user's albums list
  - In overview mode, show only the serial number and album title for each album
- Provide an option to search for albums by criteria (serial number, title)
- Each album should have a link to:
  - Display the album with the list of photos belonging to it
  - For each photo, display the relevant image according to the `thumbnailUrl` link
  - Load photos in stages (number of images, scrolling, continue button, image slider, etc.)
- Provide options to create new albums for the active user
- Provide options to manage photos (add, delete, update) in the user's albums

### Components
- `AlbumList` component
  - Render the list of albums in overview mode
  - Implement search functionality
- `AlbumItem` component
  - Display album details (serial number, title)
  - Provide link to display album with photos
- `AlbumDetails` component
  - Display selected album with list of photos
- `PhotoList` component
  - Render the list of photos for a selected album
  - Implement pagination or lazy loading
- `PhotoItem` component
  - Display photo thumbnail
  - Provide buttons/options for update and delete operations
- `PhotoForm` component
  - Input fields for adding/updating a photo
  - Submit button
  - Validation and error handling
- `AlbumForm` component
  - Input fields for creating a new album
  - Submit button
  - Validation and error handling

## Shared Components

- `MessageDisplay` component (optional)
  - Display success/error messages
- `Loader` component (optional)
  - Display a loading spinner/indicator during asynchronous operations

## Utils/Services

- `authService`
  - Functions for user authentication (login, logout, registration)
  - Interaction with Local Storage
- `apiService`
  - Functions for making API requests (GET, POST, PUT, DELETE) to the server
  - Handling response data
- `helpers`
  - Utility functions (e.g., data formatting, validation)