# Contributor's Guide

You can contribute in many ways: openning or participating of a issue, reporting a bug, sending a [pull request](#submitting-a-pull-request).

## Contribution Prerequisites

- Node installed at v12.16.1 and Yarn.
- Docker for the visual tests.

## Getting Started
1.  Fork the project, [Help Guide to Fork a repository](https://docs.gitlab.com/ce/gitlab-basics/fork-project.html/).
2.  Clone the project.
3. Create a branch specific to the issue you are working on.
    ```sh
    git checkout -b update-readme-file
    ```

4.  Open up the project in your favourite text editor, select the file you want to contribute to and make your changes.

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
    ```sh
    yarn commitizen
    ```

7.  You'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards defined by project.
    
    - Select the type of change that you're commiting (required)
    - What is the scope of this change (e.g. component or file name)?
    - Write a short, imperative tense description of the change (required)
    - Provide a longer description of the change
    - Are they any breaking changes? (y/N)
    - Does this change affect any open issues? (y/N)


8.  Push your commits to your Fork:

    ```sh
    git push -u origin branch-name
    ```
9.  Submit a pull request.

## Submitting a Merge Request

Open your pull request, if you don't know how do it, check this [tutorial](https://docs.gitlab.com/ee/gitlab-basics/add-merge-request.html/)

## Code Style

For the good manutance of the project, follow all the code styles:
- [Editorconfig](http://gitlab.devel/frontend-platform/quantum/blob/master/.editorconfig)
- [Eslint Airbnb](http://gitlab.devel/frontend-platform/quantum/blob/master/.eslintrc.js)