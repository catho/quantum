# Contributor's Guide


## Summary

 - [Contribution Prerequisites](#contribution-prerequisites)
 - [Getting Started](#getting-started)
 - [Submitting a Pull Request](#submitting-a-pull-request)
  


You can contribute in many ways: opening or participating of a issue, reporting a bug, sending a [pull request](#submitting-a-pull-request).

## Contribution Prerequisites

- To collaborate with this project, for security reasons, a Token is needed. More info in [confluence of the project](https://confluence.catho.com.br/pages/viewpage.action?pageId=51675150);

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

5.  After making your changes in the new git branch then add your modified files to git, [How to add, commit, push and go](http://readwrite.com/2013/10/02/github-for-beginners-part-2/)

    ```sh
    git add path/to/filename.ext
    ```

    You can also add all unstaged files using:
    ```sh
    git add .
    ```

    Note, using a `git add .` will automatically add all files. You can do a `git status` to see your changes, but do it before `git add`.

6.  Commit your changes using [commitizen](http://commitizen.github.io/cz-cli/).
 (remember, before of to use commitizen, the packages should be installed previously)
    ```sh
    yarn commitizen
    ```

1.  You'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards defined by project.

    - Select the type of change that you're committing (required)
    - What is the scope of this change (e.g. component or file name)?
    - Write a short, imperative tense description of the change (required)
    - Provide a longer description of the change
    - Are they any breaking changes? (y/N)
    - Does this change affect any open issues? (y/N)

2.  Push your commits to your Fork:

    ```sh
    git push -u origin branch-name
    ```
3.  Submit a pull request.

## Submitting a Pull Request

Open your pull request, if you don't know how do it, check this [tutorial](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
