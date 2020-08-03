## What you've built

I built simple app that allows you to search for recipes based on ingredients and recipe name.

There is sidebar with inputs for recipe name and ingredients. If you want to add multiple ingredients, you can create new input fields for ingredients by clicking `Add ingredient` button. When you are done, click `Search` button and recipes will appear in list view.

I had troubles with CORS when making API requests so I needed to view app in Chrome without web security.

## Which technologies you've used and how it is tied together

- ReactJS
  - I used Context API for storing selected ingredients and recipe name in global state
- Typescript
- Prettiet and ESlint
- [Ant design](https://ant.design/)
  - I used it to simplify UI
- [Apollo Client](https://www.apollographql.com/docs/react/)
  - I used it to make API requests instead of fetch or Axios
  - I like to use it because it caches request data and it makes sure that same request isn't called multiple times unnecessary
- [Cypress](https://www.cypress.io/)
  - I used it for testing
