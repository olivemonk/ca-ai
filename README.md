# CodeAnt AI - Frontend Developer Intern Hiring Assignment

## [Live Link](https://ca-ai-omega.vercel.app/)

## Project Overview

This project is a frontend implementation for the **CodeAnt AI** hiring assignment for the position of **Frontend Developer Intern**. This project showcases the ability to build a fully responsive and functional user interface based on the provided Figma design.

---

## Features

- **Responsive Sidebar**:
  - Full-featured navigation menu for desktop users.
  - Mobile sidebar with a hamburger menu for smaller screens.
- **Repository Management**:
  - List of repositories with detailed information (visibility, size, language, etc.).
  - Buttons to add new repositories and refresh the list.
- **User Management**:
  - Dropdown to select and display user details.
- **Search Functionality**:
  - Search bar to filter repositories dynamically.
- **Modern Design**:
  - Implemented following the Figma design for both desktop and mobile views.
- **Auth Protected Routes**:
  - Implemented the dummy authentication which check for auth token when user try to visit home page and if not user will be redirect to signin page.

---

## Tech Stack

- **React**: Library for building user interfaces.
- **TypeScript**: For static typing and improved code quality.
- **Vite**: A fast build tool for development and production.
- **Emotion**: CSS-in-JS library for styling components.
- **Lucide React**: Icon library for modern UI elements.

---

## Setup Instructions

Follow the steps below to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/olivemonk/ca-ai
cd ca-ai
```


### 2. Install Dependencies
Make sure you have Node.js and npm installed. Then, install the project dependencies:

```bash
npm install
```


### 3. Start the Development Server
Run the Vite development server:

```bash
npm run dev
```
The application will be accessible at `http://localhost:5173` .

### 4. Build for Production
To build the project for production:

```
npm run build
```

---

#### Responsive Design
This project has been designed to be fully responsive, ensuring compatibility with:

- Desktop: Displays a full sidebar and main content layout.
- Tablet: Sidebar toggles with a hamburger menu.
- Mobile: Compact and user-friendly interface for small screens.

**Thank you, it was pleasure working on this assignment, tried emotion for the first time, maza aaya!**
