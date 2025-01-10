# Healthy App 
The Healthy App is a comprehensive platform designed to help users track their health metrics, set and monitor goals,profiles and manage their overall well-being. The app offers functionalities for user profile management, goal setting, progress tracking,activity tracking ,meal plan and scheduled activities.



## Tech Stack

1.Frontend
- **React.js**: JavaScript library for building the user interface.
- **React Router**: Library for handling routing in the app.
- **Lucide Icons**: Used for adding icons to the sidebar navigation.
- **CSS**: Styling for the app’s components, including the sidebar.
2.Backend
- **Node.js**: JavaScript runtime used for building the server-side of the application.

- **Express.js**: Web application framework used to handle routing and middleware for the backend.

- **MongoDB**: NoSQL database used for storing user data, activity logs, progress, goals, and other health-related information.

- **Mongoose**: MongoDB object modeling tool to interact with the database.

- **CORS**: Middleware to handle cross-origin requests, allowing the front end to interact with the backend.


## 1.Frontend

### Frontend Features

- **User Profile Management**: Users can update and manage their personal profile, including name, weight, height, location, and date of birth.

- **Goals Tracker**: Users can set health goals such as running distance, sleep hours, and weight loss progress.

- **Scheduled Activities**: The app allows users to schedule fitness-related activities and view upcoming events.

- **Progress Tracking**: Users can track their progress towards achieving their set goals.

- **Activity Tracking**: Users can track their Activity throughout the period.

- **Fitness Completeness**: The app checks the complete fitness metrics like diet,water intake, calories burn and heart rate as a visual representation.

### Sidebar Navigation
- Provides a sidebar with options to navigate to various sections of the app:
  - **Home** :it contain the home page of this application
  - **Activity** :Used for navigate to ActivityForm.
  - **Progress** : used for navigate to the processForm for getting the input.
  - **Calendar**: Used for navigate to the DataForm page 
  - **Settings**
  - **Messages**

  ### Forms and Profiles
- **Activity Form**: Allows users to input and track their daily activities.
- **Progress Form**: Displays user progress for different health activities.
- **Goal Setting**: Users can set health-related goals.
- **Profile**: Users can update and view their profiles.







### Frontend Installation

To run this project locally, follow these steps:


1.Clone the repository:
   ```bash
   git clone https://github.com/hemajeyasri/FitnessTracker.git
   ```

2.To create a React project :
```
npx create-react-app FitnessTracker
```


3.Navigate to the project directory:
```
cd fitness
```
4.To install router for the project 
```
npm install react-router-dom
```
5.To install the axios
```
npm install axios
```
6.Start the development server:
```
npm start
```
7.Visit http://localhost:3000 in your browser to see the app in action

## 2.Backend
### Backend Description

This repository contains the backend of the Healthy App, a health-focused application built using Node.js, Express.js, and MongoDB. It provides a robust API for managing user authentication, activity tracking, goals, progress, and profiles.


###  Backend Features

- **User Authentication**
  - Register users with unique email addresses.
  - Login functionality with username and password.

- **Activity Tracking**
  - Save and retrieve daily and weekly activity data.

- **Progress Tracking**
  - Save and fetch progress information (e.g., cardiac, stretching, swimming).

- **Goals Management**
  - Set and retrieve user goals like running, sleeping, and weight loss targets.

- **Profile Management**
  - Save and retrieve user profiles with details like full name, location, date of birth, height, and weight.

- **Graph Data**
  - Save and retrieve data for visual representation (e.g., steps, calories, heart rate).

## Prerequisites

- Node.js (v16 or higher recommended)
- MongoDB

###  Backend Installation setup

1. Clone the repository:
   ```bash
   git clone https://github.com/hemajeyasri/FitnessTracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd FitnessTracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the MongoDB server:
```bash
Mongod
```

5. Update the MongoDB connection string if needed in the `mongoose.connect` method inside the `server.js` file.

### Running the Server

1. Start the server:
   ```bash
   node server.js
   ```

2. The server will run on `http://localhost:3001`.

## API Endpoints
  

### Authentication

- **Register User**
  ```
  POST /register
  Body: { username, email, password }
  ```

- **Login User**
  ```
  POST /login
  Body: { username, password }
  ```

### Profile Management

- **Save Profile**
  ```
  POST /popup
  Body: { fullName, location, dateOfBirth, height, weight }
  ```

- **Get Profiles**
  ```
  GET /get-popup
  ```

### Activity Tracking

- **Save Activity**
  ```
  POST /home
  Body: { mon, tue, wed, thu, fri, sat, sun, week1, week2, week3 }
  ```

- **Get Activity Info**
  ```
  GET /getactivity-info
  ```

### Progress Tracking

- **Save Progress**
  ```
  POST /progress
  Body: { Cardiac, Stretching, Swimming, Treadmill }
  ```

- **Get Progress Info**
  ```
  GET /getprogress-info
  ```

### Goals Management

- **Set Goals**
  ```
  POST /goal
  Body: { Steps, Running, Sleep, targetWeight, Water }
  ```

- **Get Goals**
  ```
  GET /getgoals
  ```

### Graph Data

- **Save Data**
  ```
  POST /value
  Body: { wat, steps, cal, rate }
  ```

- **Get Data**
  ```
  GET /data
  ```

## Dependencies

- **express**: Web framework for Node.js
- **mongoose**: ODM for MongoDB
- **cors**: Middleware to enable Cross-Origin Resource Sharing



## Acknowledgement

  - Thanks to the contributors of Lucide icons for providing beautiful and scalable SVG icons.
  - Thanks to the developers and communities of React and Axios for making web development easier.
  I would like to extend my sincere gratitude to **Crystal Delta** for providing the Figma design and for offering me this valuable opportunity. 




Here are some screenshots showing the outcome of the Healthy App:
## Screenshots

# Healthy App 
The Healthy App is a comprehensive platform designed to help users track their health metrics, set and monitor goals,profiles and manage their overall well-being. The app offers functionalities for user profile management, goal setting, progress tracking,activity tracking ,meal plan and scheduled activities.



## Tech Stack

1.Frontend
- **React.js**: JavaScript library for building the user interface.
- **React Router**: Library for handling routing in the app.
- **Lucide Icons**: Used for adding icons to the sidebar navigation.
- **CSS**: Styling for the app’s components, including the sidebar.
2.Backend
- **Node.js**: JavaScript runtime used for building the server-side of the application.

- **Express.js**: Web application framework used to handle routing and middleware for the backend.

- **MongoDB**: NoSQL database used for storing user data, activity logs, progress, goals, and other health-related information.

- **Mongoose**: MongoDB object modeling tool to interact with the database.

- **CORS**: Middleware to handle cross-origin requests, allowing the front end to interact with the backend.


## 1.Frontend

### Frontend Features

- **User Profile Management**: Users can update and manage their personal profile, including name, weight, height, location, and date of birth.

- **Goals Tracker**: Users can set health goals such as running distance, sleep hours, and weight loss progress.

- **Scheduled Activities**: The app allows users to schedule fitness-related activities and view upcoming events.

- **Progress Tracking**: Users can track their progress towards achieving their set goals.

- **Activity Tracking**: Users can track their Activity throughout the period.

- **Fitness Completeness**: The app checks the complete fitness metrics like diet,water intake, calories burn and heart rate as a visual representation.

### Sidebar Navigation
- Provides a sidebar with options to navigate to various sections of the app:
  - **Home** :it contain the home page of this application
  - **Activity** :Used for navigate to ActivityForm.
  - **Progress** : used for navigate to the processForm for getting the input.
  - **Calendar**: Used for navigate to the DataForm page 
  - **Settings**
  - **Messages**

  ### Forms and Profiles
- **Activity Form**: Allows users to input and track their daily activities.
- **Progress Form**: Displays user progress for different health activities.
- **Goal Setting**: Users can set health-related goals.
- **Profile**: Users can update and view their profiles.







### Frontend Installation

To run this project locally, follow these steps:


1.Clone the repository:
   ```bash
   git clone https://github.com/hemajeyasri/FitnessTracker.git
   ```

2.To create a React project :
```
npx create-react-app FitnessTracker
```


3.Navigate to the project directory:
```
cd fitness
```
4.To install router for the project 
```
npm install react-router-dom
```
5.To install the axios
```
npm install axios
```
6.Start the development server:
```
npm start
```
7.Visit http://localhost:3000 in your browser to see the app in action

## 2.Backend
### Backend Description

This repository contains the backend of the Healthy App, a health-focused application built using Node.js, Express.js, and MongoDB. It provides a robust API for managing user authentication, activity tracking, goals, progress, and profiles.


###  Backend Features

- **User Authentication**
  - Register users with unique email addresses.
  - Login functionality with username and password.

- **Activity Tracking**
  - Save and retrieve daily and weekly activity data.

- **Progress Tracking**
  - Save and fetch progress information (e.g., cardiac, stretching, swimming).

- **Goals Management**
  - Set and retrieve user goals like running, sleeping, and weight loss targets.

- **Profile Management**
  - Save and retrieve user profiles with details like full name, location, date of birth, height, and weight.

- **Graph Data**
  - Save and retrieve data for visual representation (e.g., steps, calories, heart rate).

## Prerequisites

- Node.js (v16 or higher recommended)
- MongoDB

###  Backend Installation setup

1. Clone the repository:
   ```bash
   git clone https://github.com/hemajeyasri/FitnessTracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd FitnessTracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the MongoDB server:
```bash
Mongod
```

5. Update the MongoDB connection string if needed in the `mongoose.connect` method inside the `server.js` file.

### Running the Server

1. Start the server:
   ```bash
   node server.js
   ```

2. The server will run on `http://localhost:3001`.

## API Endpoints
  

### Authentication

- **Register User**
  ```
  POST /register
  Body: { username, email, password }
  ```

- **Login User**
  ```
  POST /login
  Body: { username, password }
  ```

### Profile Management

- **Save Profile**
  ```
  POST /popup
  Body: { fullName, location, dateOfBirth, height, weight }
  ```

- **Get Profiles**
  ```
  GET /get-popup
  ```

### Activity Tracking

- **Save Activity**
  ```
  POST /home
  Body: { mon, tue, wed, thu, fri, sat, sun, week1, week2, week3 }
  ```

- **Get Activity Info**
  ```
  GET /getactivity-info
  ```

### Progress Tracking

- **Save Progress**
  ```
  POST /progress
  Body: { Cardiac, Stretching, Swimming, Treadmill }
  ```

- **Get Progress Info**
  ```
  GET /getprogress-info
  ```

### Goals Management

- **Set Goals**
  ```
  POST /goal
  Body: { Steps, Running, Sleep, targetWeight, Water }
  ```

- **Get Goals**
  ```
  GET /getgoals
  ```

### Graph Data

- **Save Data**
  ```
  POST /value
  Body: { wat, steps, cal, rate }
  ```

- **Get Data**
  ```
  GET /data
  ```

## Dependencies

- **express**: Web framework for Node.js
- **mongoose**: ODM for MongoDB
- **cors**: Middleware to enable Cross-Origin Resource Sharing



## Acknowledgement

  - Thanks to the contributors of Lucide icons for providing beautiful and scalable SVG icons.
  - Thanks to the developers and communities of React and Axios for making web development easier.
  I would like to extend my sincere gratitude to **Crystal Delta** for providing the Figma design and for offering me this valuable opportunity. 






