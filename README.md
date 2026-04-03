# HRnet

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?logo=redux)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

 
A modern HR management application built with React, Redux Toolkit and [@ngnyan/data-table](https://www.npmjs.com/package/@ngnyan/data-table).
 
## Features
 
- 👤 Create, edit and delete employees
- 📋 Employee list with sorting, searching and pagination
- 🗂️ State management with Redux Toolkit
- 💾 Data persistence with localStorage
- ♿ Accessible forms and tables

 
## Prerequisites
 
- Node.js >= 18.0.0
 
## Installation
 
Clone the repository :
 
```bash
git clone https://github.com/NGnYan/HRnet.git
cd HRnet
```
 
Install dependencies :
 
```bash
npm install
```
 
Run the development server :
 
```bash
npm run dev
```
 
Build for production :
 
```bash
npm run build
```

## Tech Stack
 
| Technology | Version | Description |
|---|---|---|
| React | 19 | UI framework |
| Redux Toolkit | 2.x | State management |
| React Router | 7.x | Client-side routing |
| Vite | 6.x | Build tool |
| @ngnyan/data-table | latest | Data table component |

## Project Structure
```
src/
├── __tests__/            # Unit tests
├── assets/               # Images and static files
├── components/           # Reusable components
│   ├── DateField.jsx     # Date input field
│   ├── EmployeeForm.jsx  # Create and edit employee form
│   ├── Layout.jsx        # App layout with sidebar
│   ├── LoadingState.jsx  # Loading spinner
│   ├── LoginForm.jsx     # Login form
│   ├── Modal.jsx         # Confirmation modal
│   ├── ProtectedRoute.jsx # Route protection
│   ├── SelectField.jsx   # Select input field
│   ├── Sidebar.jsx       # Navigation sidebar
│   └── UserProfile.jsx   # User profile icon
├── data/                 # Static data (states, departments, columns)
├── pages/                # App pages
│   ├── EmployeesList.jsx # Current employees page
│   ├── ErrorPage.jsx     # 404 page
│   ├── Home.jsx          # Create / Edit employee page
│   └── LoginPage.jsx     # Login page
├── redux/                # Redux store and slices
├── styles/               # CSS files
│   ├── components/       # Component styles
│   └── pages/            # Page styles
├── App.jsx               # App entry point
├── employeeService.js    # localStorage service
├── main.jsx              # React entry point
└── utils.js              # Validation utilities
```

## State Management
 
The app uses Redux Toolkit as the primary source of truth. Data is persisted in localStorage as a secondary storage.

## Pages
 
### Create Employee (`/`)
 
Form to create a new employee with the following fields :
 
- First Name, Last Name
- Date of Birth, Start Date
- Street, City, State, Zip Code
- Department
 
### Edit Employee (`/`)
 
Same form as Create Employee, pre-filled with the employee's data. Accessible by clicking the Edit button in the employee list.
 
### Current Employees (`/employees`)
 
Table displaying all employees with :
 
- Search by any field
- Sort by column (dropdown or header click)
- Pagination
- Edit and Delete actions

## Tests
 
Run unit tests :
 
```bash
npm test
```


## License
 
MIT
 
## Author
 
NGnYan