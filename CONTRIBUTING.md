# Contributing to the Project

Thank you for considering contributing to this project! Your help is much appreciated.

## How to Contribute
  1. **Check Prerequisites:** You should verify all the features to install dependencies and run the project. Check the [README.md](./README.md) to confirm your setup.

  2. **Install Dependencies:** Navigate to the project folder and install the dependencies using the following command:

        ```bash
        cd <folder>
        pnpm i
        ```

  3. **Git Flow:** Before making any changes to the code, you should first create a new branch representing that change.

       4.1: *NOTE:* Remember to use the prefix:
       * `feature/` for new features;
       * `fix/` for fixes during QA text;
       * `bugfix/` for production bugs;
       * `hotfix/` for **critical production bugs** that require **immediate action**;
       * `refactor/` to refactor the code.

  5. **Make Changes:** Make the desired changes to the code.

  6. **Test Changes:** Before saving and submitting, make sure to test your changes locally to ensure everything is working correctly.

  7. **Commit Rules:** Use **conventionalcommits** to write your commit message.

     7.1 *NOTE:* [To learn more about conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/)

     7.2 *NOTE:* It is not possible to commit without this pattern; we use a *hook* to validate the written messages.

     7.3 To facilitate writing the message, you can write it in two ways:

       7.3.1: **Command Line:** After adding the files to the git stage, you can run `make commit` or `make cm` or `pnpm cm`. This way, you will be prompted to fill in all the required fields, and your commit message will be formatted according to the project's pattern.

       7.3.2: **VS Code Extension:** With the [conventional-commits extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits), the same thing will happen as the command line through the VS Code interface.

  8. **Submit Changes:** After making your changes and ensuring everything is working as expected, submit your changes. Be sure to follow the commit guidelines.

  9. **Submit a Pull Request (PR):** Open a Pull Request with your changes. Make sure to provide a clear description of what was changed and why.

     9.1 *NOTE:* Use the pattern defined in the project.


## Project Architecture

This project follows the principles of Clean Architecture to facilitate code maintenance. The goal is to make interfaces less dependent on external providers, such as libraries, protocols, and services.

### Folder structure / organization

```plaintext
project-root/
├── .github/
├── .husky/
├── .vscode/
├── docs/
├── public/
├── scripts/
├── src/
│   ├── shared/
│   │     ├── @types/
│   │     ├── components/
│   │     ├── hooks/
│   │     ├── interface/
│   │     │     └── <context>/
│   │     │           ├── context.dto.ts/
│   │     │           └── contextServer.ts/
│   │     ├── server/
│   │     │     └── <provider>/
│   │     ├── styles/
│   │     └── utils/
│   └── app/
│        └── <path-page>/
│               ├── <components-page>/
│               └── page.tsx
├── tests/
├── .env.development
├── CHANGELOG.md
├── CONTRIBUTING.md
├── Makefile
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```
1. **.github/:** Excellent for maintaining GitHub-related configurations, such as CI/CD workflows.
1. **.husky/:** Useful for maintaining Git hooks, such as pre-commits and pre-pushes.
1. **.vscode/:** Good for specific Visual Studio Code configurations that can be shared by the team.
1. **docs/:** Useful for additional documentation, such as configuration guides and best practices.
1. **public/:** Default directory for static files that will be served directly.
1. **scripts:** Customized scripts that can be used in the CI/CD pipeline or other automated processes.
1. **src/:** Main directory for the source code. It is good practice to separate the code within the src directory.
  * **shared/:** Great for components, hooks, interfaces and other resources shared between different parts of the project.
    * **@types/:** Place for shared TypeScript type definitions.
    * **components/:**  For reusable components.
    * **hooks/:**  For custom hooks.
    * **interface/:**  For specific interfaces and contexts.
      * **<context>/:** Organizes different providers or services.
        * **context.dto.ts:** For context-related DTOs (Data Transfer Objects).
        * **contextServer.ts:** For context-related server logic.
    * **server/:**  For server-side logic.
      * **<provider>/:** Organizes different providers or services.
    * **styles/:**  For global and thematic styles.
    * **utils/:**  For utilities and helper functions.
  * **pages/:**  Next.js' default directory for routes.
    * **<path-page>/:** Organizes specific page components.
      * **<components-page>/:** Specific components for a page.
      * **page.tsx:** Main page file.
1. **test/:** Consider adding a directory for tests (tests/) if the project includes automated tests.
1. **.env.development** File for configuring environment variables.
1. **CHANGELOG.md** : To record changes between versions.
1. **CONTRIBUTING.md:** To guide contributors on how to collaborate on the project.
1. **Makefile:** Facilitates the execution of build commands, tests and other scripts.
1. **package.json and package-lock.json:** To manage project dependencies.
1. **README.md:** Initial project documentation.
1. **tailwind.config.ts:** Tailwind CSS configuration.
1. **tsconfig.json:** TypeScript configuration.(development, production).

### Design Patterns

  * Dependency Inversion Principle (DIP)
  * Single Responsibility Principle (SRP)
  * Composition Pattern
  * SOLID
  * Adapter
  * Strategy
  * Factory

## Creating Components

When creating new components, follow these guidelines:

  1. **Descriptive Naming:** Name your components clearly and descriptively, using camelCase. For example: Header, Sidebar, Button, etc.

     1.1 **`handle` function prefix:** Use the `handle` prefix to denote event handlers for user actions such as clicks, input changes, or other interactions. For example, `handleClick`, `handleChange`, `handleKeyDown` are common function names.

     1.2 **`on` function prefix:** Use the prefix `on` for event handling. Similar to `handle` functions, but for attaching event listeners to DOM elements or components. For example, `onClick`, `onSubmit`, `onChange` are common event listener props provided by React for various user interactions.

  2. **Component Reusability:** Whenever possible, reuse existing components instead of creating new ones. This helps keep the code cleaner and more cohesive.

     2.1 **Variants:** When creating a new component variant use the `tailwind-variants`.

  3. **File Organization:** Keep files related to a component (such as JSX, CSS, tests, etc.) in a single folder with the same name as the component.

  4. **Single Responsibility:** Each component should have a single responsibility. Avoid creating components that perform multiple different tasks.

     4.1 **Business Rules:** In React, the method for using hooks to implement the business rules is called custom hooks. Custom hooks allow encapsulating reusable logic into functions that can be shared between different components.

  5. **Functional Components:** Prioritize the creation of functional components whenever possible, to take advantage of the benefits of React Hooks.

  6. **Client-Side:** Attention, to take advantage of Nest.js benefits, create client-side components wisely.

## Help
If you need help or have any questions, feel free to contact the project administrators.

Thank you for contributing!
