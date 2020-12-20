# Helping Doctor V1.0
Official Version 1.0 web application for Helping Doctor Web app

****************
Team: HelpingDoctor
****************

A guide on how to use the repo!
you can contact @umarmuhd for help

Please before you push your codes to the repository make sure you pull from the main repository (), so the changes that have been made can be reflected on your local machine, for us to avoid merge conflicts use the git command line
   
    git pull upstream main

## Developers guide

This process here should be able to guide you on how to contribute effectively to this project, follow the steps below. You should not be new to the git workflow process however if you still are, the guide should still be able to help you through the process.

## Main is the default branch

    * Fork the repository to generate a copy of your own.

    * Clone the repository.

        ```
            git clone (the repository link)
        ```
        
    * Make your the main repo the remote upstream 
        ```
            git remote add upstream https://github.com/helping-doctor/Africahack-helping-doc-FE.git
        ```
    * swich to your branch 

        ```
        git checkout -b (name-of-branch)
        ```
    * run npm install tp install all dependencies, libraries and tools the project needs installed, from the package.json file.

        ```
        npm install
        ```

    After changes have been made do:
        ```
        git pull upstream main
        ```
    Consistently pull from the upstream to avoid not getting your pull request merged and to avoid conflicts.
    This way you can resolve conflicts from your local computer even before pushing always check what branch you are on when making changes
    
    * Make your changes, add them and make your commits

        ``` 
        git add .
        git commit -m "your message"
        ```
    Write good commit messages, this is very important, so that other teamates reviewing would know what your code is doing.

    * Push your codes to your forked repository, make sure you are pushing to your branch please
        
        ```
            git push origin (name-of-branch)
        ```
    Make your Pull request from that branch of your repo to the branch of this repo and wait for it to be merged.

Write good commit messages, this is very important, so people reviewing can know what your fix, feature e.t.c. is doing
Your PR should carry good story. 
if you are going to make changes to an existing code, state why you are doing so in the commit messages

Please use link the issue solved to the PR you made

Your branch name should be the number of issue you are solving. For example, you were assigned issue 16 on github, your branch should be issue-16. So you checkout by typing: git checkout -b issue-(the number)
it is not just about the code, user workflow matters too!!

### Code with Love

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
