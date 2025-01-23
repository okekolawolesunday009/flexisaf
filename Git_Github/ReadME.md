# Flexisaf Project

This repository is a collection of tasks and projects focused on **Front-End Development** and Git version control workflows. The projects are created as part of the **Flexisaf Internship Program** and emphasize mastering both technical and collaborative development processes.

## Key Objectives

- Mastery of Git and GitHub workflows, including:
  - Creating and cloning repositories.
  - Creating and managing branches.
  - Committing and reverting commits.
  - Pulling and pushing changes downstream and upstream.
  - Fetching, merging, and renaming branches.
  - Creating, reviewing, merging, and reverting pull requests.

## Git Workflow Highlights

### Repository Creation
1. **Initialize and set up a repository:**
    ```bash
    echo "# flexisaf" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin git@github.com:okekolawolesunday009/flexisaf.git
    git push -u origin main
    ```

### Branch Management
1. **Creating a new branch:**
    ```bash
    git checkout -b kolawole
    ```

2. **Renaming a branch:**
    ```bash
    git branch -M kolawole-new
    ```

### Collaboration
1. **Fetching and merging changes:**
    ```bash
    git fetch origin
    git merge origin/main
    ```

2. **Creating and merging pull requests:**
    - Open a pull request on GitHub for the branch.
    - Review and merge using the GitHub interface or CLI.

### Committing Changes
1. **Adding and committing files:**
    ```bash
    git add .
    git commit -m "commit message"
    ```

2. **Reverting commits:**
    ```bash
    git revert <commit-hash>
    ```

3. **Pushing changes to remote:**
    ```bash
    git push
    ```

## Features Implemented

1. **JavaScript Refresher Tasks**
    - Practical implementations of JavaScript fundamentals.


2. **Enhanced Git Workflow**
    - Integrated `.gitignore` to manage unnecessary files.
    - Implemented robust Git practices for collaboration.

## How to Use

1. **Clone the repository:**
    ```bash
    git clone git@github.com:okekolawolesunday009/flexisaf.git
    ```
2. **Navigate to the project folder:**
    ```bash
    cd flexisaf
    ```
3. **Contribute or test:**
    - Modify code, add features, and commit changes.

## Notes

For further clarification or collaboration, please reach out to [Kolawole Sunday Oke](https://github.com/okekolawolesunday009).

## License

This project is licensed under the MIT License. Use it freely for educational or personal purposes.
