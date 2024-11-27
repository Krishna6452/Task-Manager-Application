# Task Manager App

A simple React, Redux, and TypeScript-based Task Manager app that allows you to add, delete, and filter tasks (Completed or Pending).

## Features
- Add, delete, and toggle task status.
- Filter tasks by status (All, Completed, Pending).

## Technologies
- React.js
- Redux (state management)
- TypeScript
- CSS

## Prerequisites
Ensure you have **Node.js** and **npm** installed. Check versions with:

```bash
node -v
npm -v


Getting Started

Clone the repository:
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
Install dependencies:
npm install
Run the app:
npm start
Open http://localhost:3000 in your browser.

Usage

Add task: Enter task title and click "Add Task".
Mark completed: Click "Mark as Completed" on the task.
Filter tasks: Use the "All", "Completed", or "Pending" buttons.
Delete task: Click "Delete" next to the task.

Folder Structure

/src
  /components
    TaskInput.tsx  # Add task
    TaskList.tsx   # List tasks
  /redux
    store.ts       # Redux store
    tasksSlice.ts  # Task slice
  index.tsx        # App entry point
