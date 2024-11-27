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
```

## Getting Started

1 Clone the repository:
```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
```
2 Install dependencies:
```bash
npm install
```
3 Run the app:
```bash
npm start
```
- Open http://localhost:3000 in your browser.

## Usage

- Add task: Enter task title and click "Add Task".
- Mark completed: Click "Mark as Completed" on the task.
- Filter tasks: Use the "All", "Completed", or "Pending" buttons.
- Delete task: Click "Delete" next to the task.

## Folder Structure

```bash

/src
  /components
    TaskInput.tsx  # Add task
    TaskList.tsx   # List tasks
  /redux
    store.ts       # Redux store
    tasksSlice.ts  # Task slice
  index.tsx        # App entry point

```
https://github.com/user-attachments/assets/7150e3e5-ead7-4914-94d9-e81b76ab7129

