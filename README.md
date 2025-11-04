# The React app

## Setup

- initialize the project using **Vite** bundler:
  `npm create vite@latest`
- install dependencies:
  `npm install` or `npm i`
- launch development server:
  `npm run dev`
- create a build for production:
  `npm run build`

## Basic Project setup intro

- **vite.config.js**
  - Settings for build process customization e.g server settings, plugins etc
- **package-lock.json**
  - locks down project dependencies
- **[eslint.config.js](./introToReact/eslint.config.js)**
  - Rules and settings for **ESLint**, a popular linting tool
  - Provides rules and insights on coding style violations, errors & bugs
- **public** directory contains static assets e.g images, icons etc
  - can be refrenced in HTML like: `/favicon.ico`
- **src** contain React components and JS logic

  - like tailwind css
  - **App.jsx** is going to be the main UI of this application
  - **main.jsx** entry point of the React app
  - **index.css** global style file
  - **assets** containing media assets e.g images and icons
  - **App.css** styling file specifically for `App.jsx`

- We will use Appwrite as the dummy backend for this app

## React Basics

**Component**

- Used to create reusable code code blocks e.g card component

**Props**

- Properties used to pass data from one component to another, typically properties are passed from parent component to child component
- similar to arguments to a function
