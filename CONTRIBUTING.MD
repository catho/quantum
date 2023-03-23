# Contributor's Guide


## Summary

 - [Contribution Prerequisites](#contribution-prerequisites)
 - [Getting Started](#getting-started)
 - [Editing a Component](#editing-a-component)


---
You can contribute in many ways: opening or participating of a issue, reporting a bug, sending a [pull request](#submitting-a-pull-request).

## Contribution Prerequisites

- Node v16.15.1;

Obs.: We have .nvmrc. When you run nvm use, it will set the node to the same version based on the .nvmrc file in the repository.

- Yarn;

* Docker for the visual tests;

* Commitizen.

Why _commitizen_? To enforce a padronization to the commits and make sure every commit follows the same profile.

---

## Getting Started
1.  Fork the project, [Help Guide to Fork a repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo);
2.  Clone the project;
3. Create a branch specific to the issue you are working on;

    ```sh
    git checkout -b update-readme-file
    ```

4.  Open up the project in your favorite text editor; select the file which you want to contribute and make your changes.

    - If your contribution is a new component you can use our script to generate initial structure for a new component:

        ```sh
        yarn generate ComponentName
        ```

5.  Run Unit Tests;

    To run the Unit Test in the respective componente, use the following command line:

        yarn test components/<name-of-the-new-component>/

    Check the test coverage using:

        yarn test:coverage

6.  If there are visual changes, run the Regression Tests;

    To update the Regression Tests, revise the file `stories/<nome do componente criado>.regression-test.story.jsx`.

    To run Regression Tests, you must get the Storybook running first. You can do it with the command:

        yarn test:regression:storybook

    After the Storybook is up, run the following to check if there are any visual differences:

        yarn test:regression


    This will run a pixel-perfect comparison to protect any visual changes that may happen on the component. If the desired change is detected and according to the desired output, run:

        yarn test:regression:approve

7. Update the live documentation (Storybook);

    Every component must be on the dynamic documentation of the Storybook. For this reason, every behavior of the component must be documented and up to date within the files `stories/<nome do componente criado>.stories.jsx` and `stories/<nome do componente criado>.story.mdx`.


8.  After making your changes in the new git branch, add your modified files to git, [How to add, commit, push and go](http://readwrite.com/2013/10/02/github-for-beginners-part-2/).

    ```sh
    git add path/to/filename.ext
    ```

    You can also add all unstaged files using:

    ```sh
    git add .
    ```

    Note, using a `git add .` will automatically add all files. You can do a `git status` to see your changes, but you must do it before using `git add`.



9.  After making your changes in the new git branch then add your modified files to git, [How to add, commit, push and go](http://readwrite.com/2013/10/02/github-for-beginners-part-2/);

    ```sh
    git add path/to/filename.ext
    ```

    You can also add all unstaged files using:
    ```sh
    git add .
    ```

    Note, using a `git add .` will automatically add all files. You can do a `git status` to see your changes, but do it before `git add`.

10.  Commit your changes using [commitizen](http://commitizen.github.io/cz-cli/);
       ```sh
      yarn commitizen
     ```

11.  You'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards defined by project;

     - Select the type of change that you're committing (required)
     - What is the scope of this change (e.g. component or file name)?
     - Write a short, imperative tense description of the change (required)
     - Provide a longer description of the change
     - Are they any breaking changes? (y/N)
     - Does this change affect any open issues? (y/N)


12.  Push your commits to your Fork:


            git push -u origin branch-name

13.  Submit a pull request;

        Open your pull request. PIf you don't know how do it, check this [tutorial](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

14. Review flow for Pull Requests:

    A Pull Resquest will be opened with the following contract:

    - The URL from Jira with the task's description;
    - A checklist with the items to be reviewed (automatically generated);
    - The `status:ready-to-review` label;
    - Be assigned to the collaborator who submitted it;

    The Pull Request will be approved after receiving two review approvals.
The branch merging **can only be done by the team**, _never_ by the requester.

15.  Publishing on NPM.

        The publication is automatically done after merging. As soon as the task is approved, it will be merged by the team. It will go through the CI/CD proccess and be distributed on semantic-release. The library version will be defined according to the semantic standard of the commits.

---

## Editing a Component


Follow steps [1 and 2](#getting-started) from Getting Started.

3. Run Storybook to understand the current behavior of the component;

        yarn storybook

    The components are subfolders of the `components` folder; therefore, if you want to edit the `Footer`, the path will be `components/footer`.

    All the corresponding documentation and regression tests will be at `story/footer`.

4. Proceed with the desired changes.

    The storybook will provide real-time updates of the component.

5. Update Unit Tests, if needed;

    The component must have 100% coverage on the tests. To run Unit Tests, execute:

        yarn test components/<name-of-the-edited-component>/

    To check the test coverage, run:

        yarn test:coverage

6. Update the Regression Tests, if needed;

    If a behavior that changes the visual aspect of the component is included, this new behavior must be included in the Regression Tests.

    To update the Regression Test, just edit the file `stories/<name-of-the-edited-component>.regression-test.story.jsx`. 

    To run the Regression Test, you must get up the Testing Storybook first:

        yarn test:regression:storybook

    With the Testing Storybook running, execute the following command to compare the visual changes, if there's any:

        yarn test:regression

    This command will run a pixel-perfect comparative test to protect the visual changes of the components, if they happen. If the desired change is detected, execute:

        yarn test:regression:approve

7. Update the live documentation (Storybook);

    Each component must be on the dynamic documentation of the Storybook. Therefore, all the components' behaviors must be registered and updated in the files `stories/<name-of-the-edited-component>.stories.jsx` and `stories/<name-of-the-edited-component>.story.mdx`.

8. Commit your changes using [commitizen](http://commitizen.github.io/cz-cli/);

     ```sh
      yarn commitizen
     ```

9. You'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards defined by project;

     - Select the type of change that you're committing (required)
     - What is the scope of this change (e.g. component or file name)?
     - Write a short, imperative tense description of the change (required)
     - Provide a longer description of the change
     - Are they any breaking changes? (y/N)
     - Does this change affect any open issues? (y/N)

10.  Push your commits to your Fork:


            git push -u origin branch-name

11.  Submit a pull request;

        Open your pull request. If you don't know how do it, check this [tutorial](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

12. Review flow for Pull Requests:

    A Pull Resquest will be opened with the following contract:

    - The URL from Jira with the task's description;
    - A checklist with the items to be reviewed (automatically generated);
    - The `status:ready-to-review` label;
    - Be assigned to the collaborator who submitted it;

    The Pull Request will be approved after receiving two review approvals.
The branch merging **can only be done by the team**, _never_ by the requester.

13.  Publishing on NPM.

        The publication is automatically done after merging. As soon as the task is approved, it will be merged by the team. It will go through the CI/CD proccess and be distributed on semantic-release. The library version will be defined according to the semantic standard of the commits.

