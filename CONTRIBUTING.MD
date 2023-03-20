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
1.  Fork the project, [Help Guide to Fork a repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
2.  Clone the project.
3. Create a branch specific to the issue you are working on.

    ```sh
    git checkout -b update-readme-file
    ```

4.  Open up the project in your favorite text editor; select the file which you want to contribute and make your changes.

    - If your contribution is a new component you can use our script to generate initial structure for a new component:

        ```sh
        yarn generate ComponentName
        ```

5.  Run Unit Tests

    To run the Unit Test in the respective componente, use the following command line:

        yarn test components/<name-of-the-new-component>/

    Check the test coverage using:

        yarn test:coverage

6.  If there are visual changes, run the Regression Tests.

    To update the Regression Tests, revise the file `stories/<nome do componente criado>.regression-test.story.jsx`.

    To run Regression Tests, you must get the Storybook running first. You can do it with the command:

        yarn test:regression:storybook

    After the Storybook is up, run the following to check if there are any visual differences:

        yarn test:regression


    This will run a pixel-perfect comparison to protect any visual changes that may happen on the component. If the desired change is detected and according to the desired output, run:

        yarn test:regression:approve

7. Update the live documentation (Storybook).

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



9.  After making your changes in the new git branch then add your modified files to git, [How to add, commit, push and go](http://readwrite.com/2013/10/02/github-for-beginners-part-2/)

    ```sh
    git add path/to/filename.ext
    ```

    You can also add all unstaged files using:
    ```sh
    git add .
    ```

    Note, using a `git add .` will automatically add all files. You can do a `git status` to see your changes, but do it before `git add`.

10.  Commit your changes using [commitizen](http://commitizen.github.io/cz-cli/).
       ```sh
      yarn commitizen
     ```

11.  You'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards defined by project.

     - Select the type of change that you're committing (required)
     - What is the scope of this change (e.g. component or file name)?
     - Write a short, imperative tense description of the change (required)
     - Provide a longer description of the change
     - Are they any breaking changes? (y/N)
     - Does this change affect any open issues? (y/N)


12.  Push your commits to your Fork:


            git push -u origin branch-name

13.  Submit a pull request.

        Open your pull request, if you don't know how do it, check this [tutorial](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

14. Review flow for Pull Requests:

    A Pull Resquest will be opened with the following contract:

    - The URL from Jira with the task's description;
    - A checklist with the items to be reviewed (automatically generated);
    - The `status:ready-to-review` label;
    - Be assigned to the collaborator who submitted it;

    The Pull Request will be approved after receiving two review approvals.
The branch merging **can only be done by the team**, _never_ by the requester.

15.  Publishing on NPM

        The publication is automatically done after merging. As soon as the task is approved, it will be merged by the team. It will go through the CI/CD proccess and be distributed on semantic-release. The library version will be defined according to the semantic standard of the commits.

---

## Editing a Component