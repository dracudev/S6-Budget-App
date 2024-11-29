# S6 React Web Budget Calculator

## 📄 Description

This project involves building a React application designed to simplify web budgeting. The app enables users to select services, customize their requirements, and calculate the total cost dynamically. Users can create, sort, search, and share multiple budgets, making it a useful tool for freelancers and businesses.


### Objectives

- Practice using Bootstrap in React.
- Strengthen communication between components in React.
- Build an interactive interface using checkboxes, input fields, and buttons to dynamically calculate a web budget.
- Enhance React fundamentals such as state management, routing, and component structure.
- Learn to structure React projects for scalability, maintainability, and testability.

<br>

## 📐 Project Structure

### ⭐ **Level 1**

#### **Exercise 1**
Start with a form containing three checkboxes for services:
1. **SEO Campaign** (€300)
2. **Advertising Campaign** (€400)
3. **Web Development** (€500)

- Dynamically update the total budget based on selected services.
- Store checkbox states using either individual `useState` hooks or a centralized state (array/object).
- Store the total budget in a state.

#### **Exercise 2**
Add customization for web development:
- Allow users to select the number of pages and languages for the website.
- Create a component visible only when "Web Development" is selected.
- Calculate the cost of the website as:
({Number of Pages} + {Number of Languages}) * 30€

#### **Exercise 3**
Enhance input usability:
- Add buttons to increment or decrement the number of pages and languages by one.

#### **Exercise 4**
Create a welcome screen:
- Explain the app's purpose and functionality.
- Include a button to navigate to the main calculator page.
- Add a button on the calculator page to navigate back to the welcome screen using **React Router**.

#### **Exercise 5**
Enable users to manage multiple budgets:
- Add inputs for **budget name** and **client name**.
- Allow users to save budgets with selected services and calculated total price.
- Display saved budgets in a list.

---

### ⭐⭐ **Level 2**

#### **Exercise 6**
Add tooltips or modals for clarification:
- Include a button with an info icon next to inputs for the number of pages and languages.
- Show a modal using Bootstrap or Tailwind with guidance on using these inputs.

#### **Exercise 7**
Enhance budget list usability:
- Add three buttons to the budget list:
  1. Sort budgets alphabetically.
  2. Sort budgets by date.
  3. Reset the sorting order.

#### **Exercise 8**
Implement a search functionality:
- Allow users to search budgets by name, filtering the displayed results.

#### **Exercise 9**
Introduce a discount feature:
- Add a toggle button for a 20% annual discount.
- Update the interface to indicate when the discount is applied.

---

### ⭐⭐⭐ **Level 3**

#### **Exercise 10**
Enable budget sharing:
- Dynamically update the URL based on budget selections, such as:
http://localhost:4200/home?WebPage=true&CampaignSEO=true&pages=2&lang=3
- Ensure shared URLs display the same budget configuration.

<br>

## 💻 Technologies Used

- **Vite** for development and building.
- **React** and **React-DOM** for creating component-based UI.
- **Bootstrap 5** and **React-Bootstrap** for responsive styling.
- **React Router DOM** for navigation between views.
- **Date-fns** for handling date formatting and operations.
- **React Icons** for icon integration.
- **Styled Components** for scoped and dynamic styling.
- **PropTypes** for runtime type checking of props.
- **Node.js** and npm/yarn for dependency management.
- **ESLint** for code quality and linting.

<br>

## 📋 Requirements

- **Node.js 16 or newer**: JavaScript runtime for executing the project.
- **npm** or **yarn**: Package manager to install dependencies.
- **A modern web browser**: Required to run the application.
- **Vite**: Preconfigured as part of the project for development and build processes.

<br>

## 🛠️ Installation

1. Clone this repository: 
  ```bash
  git clone https://github.com/dracudev/S6-Budget-App.git
  ```
2. Navigate to the project directory: 
  ```bash
  cd S6-Budget-App
  ```
3. Open the project in your text editor and start coding.
  ```bash
  code .
  ```

<br>

<br>

## ▶️ Execution

1. Install the dependencies and run the server.
  ```bash
  npm install
  npm run dev
  ```
