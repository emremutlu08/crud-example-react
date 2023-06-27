## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Packages

- [Next.js](https://nextjs.org/)
- [DaisyUI](https://daisyui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Formik](https://formik.org/)
- [React Redux](https://react-redux.js.org/)
- [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [Axios](https://axios-http.com/docs/intro)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [React Toastify](https://www.npmjs.com/package/react-toastify)

# Directory Structure

## src\app

Contains files related to the main application.

## src\app\api\posts

Contains files related to the API endpoints for posts.

## src\app\api\posts[id]

Contains files related to individual posts in the API.

## src\modules\helpers

Contains files with helper functions and utilities.

## src\modules\redux

Contains files related to Redux state management.

## src\modules\posts\apis

Contains files related to API functions for posts.

## src\modules\posts\apis\types

Contains files with types related to the API functions for posts.

## src\modules\posts\components

Contains reusable components for posts.

## src\modules\posts\slices

Contains files related to Redux slices for posts.

## src\modules\posts\types

Contains files with types related to posts.

## src\modules\ui\components

Contains reusable UI components.

## src\modules\ui\icons

Contains SVG icon files used in the UI.

## src\modules\ui\types

Contains files with types related to UI components.

## src\modules

Contains files related to various modules of the application.

# Why are we using modules?

`Organization and Separation of Concerns`: Modules help in organizing the codebase by grouping related functionality together. Each module can represent a distinct feature or area of the application, such as user management, posts, comments, or UI components. This separation of concerns allows for better code organization and makes it easier to locate and work with specific functionality.

`Modularity and Reusability`: Modules promote modularity, enabling encapsulation of functionality within self-contained units. Each module can have its own set of components, API calls, state management, and utility functions. This modularity allows for better reusability of code, as modules can be easily shared across different parts of the application or even in other projects.

`Scalability and Collaboration`: When working on a large-scale application or in a team environment, modules help in managing the complexity and scalability of the codebase. Different team members can work on separate modules concurrently, reducing conflicts and facilitating parallel development. Modules also make it easier to understand and reason about the codebase, as each module focuses on a specific functionality or feature.

`Code Encapsulation and Abstraction`: By encapsulating related functionality within modules, it becomes easier to abstract and isolate implementation details. Modules can expose a clean and well-defined API to other parts of the application, promoting loose coupling and encapsulation of internal logic. This abstraction allows for better maintainability and reduces the impact of changes made within a module on the rest of the application.
