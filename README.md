# MaxComply Frontend Code Challenge

## Objective
Using JavaScript and Vue, your assignment is to implement a responsive task viewer component.

## Brief
The design team have created rough mockups of the new task viewer screen. Your task is to build out the project using the designs inside the `/design` folder as a guide.

## Task
Provided is the default Quasar created project setup with a pinia plugin setup. Current Vue components can be removed as needed. to complete the task
- Create a new private repository using a service of your choosing (do not fork/branch repo) and add the following users access:
  - seamus.ohiggins@iqeq.com
  - sam.cosgrove@iqeq.com
- Extend base pinia plugin to allow for POST requests
- Create task store 
- Recreate provided screens using Quasar components (Note: use Vue 'script setup' syntax for development: https://vuejs.org/api/sfc-script-setup.html)
- Provide feedback to user for loading and notifications where necessary

## Expected Behaviour
- On initial load, make a call to the backend using the `GET /tasks` endpoint provided and display the response to the user
- Once the tasks have been loaded automatically trigger the `GET /tasks/:id` call for the first task
- On clicking a task in the task list trigger the `GET /tasks/:id` call to get the selected task
- Form display uses the supplied column sizing for different devices
- Form validation uses supplied field validation
- On submit button click trigger the `POST /tasks/:id` call and submit the form to the API
- When a task has been completed the user is no longer able to modify or resubmit the form
- The user can use the filter/search input provided to filter the list of tasks visible to them

## Extra Notes
- The design is not final you may alter the design as you see fit, to facilitate this you can add content to the mock responses from the backend
- Feel free to add to the list of behaviour requirements and add in any library usage that you feel could benefit the flow and design
- Comments on functionality using JSDoc syntax: https://jsdoc.app/

## Evaluation Criteria
- JavaScript/Vue best practices
- Show your work through commit history
- Demonstrate how to structure components in a small program
- Design and interpretation of mobile view and layout
- Completeness: Did you complete the features?
- Correctness: Does the functionality act in sensible, thought-out ways?
- Creativity: Did you go above and beyond the requirements?
- Maintainability: Is it written in a clean, maintainable way?
- Testing: Is the system adequately tested?

## Folder Structure
This project is broken down to 4 separate areas:
- frontend: where the coding challenge should be completed
- backend: serves as a fake server containing JSON files to simulate API interaction
- design: mockups of different forms
- assets: image assets and postman collection to test API

# Delivery
Please provide a link to a git/bitbucket repository which contains the application code.

# Setup
## Required packages
- yarn: https://yarnpkg.com/
- Quasar CLI: https://quasar.dev/start/quasar-cli

## Backend
### Install the dependencies
```bash
yarn
```

### Run Backend
```bash
node server
```


## Frontend
### Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
yarn dev
```

### Test the files
```bash
yarn test
```

### Lint the files
```bash
yarn lint
```

# Contact
if you encounter any issues or have any questions you can contact:
- Sam: sam.cosgrove@iqeq.com
- Seamus : seamus.ohiggins@iqeq.com