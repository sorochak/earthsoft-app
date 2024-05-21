# EarthSoft Text Analyzer

## Description

EarthSoft Text Analyzer is a simple React web application that allows users to enter multiple sentences of text and analyzes the text to count the occurrences of each letter. The application is built using React and Material UI, and it provides an interface for text input and result display. The application is deployed to an S3 bucket and can be accessed [here](http://earthsoft-app.s3-website-us-east-1.amazonaws.com).

## Assumptions

1. **Character Limit**: Since the instruction was to allow users to enter multiple sentences of text, a 500 character limit was implemented. This decision was made to prevent users from entering an unspecified number of characters, which could affect the performance and usability of the application.

## Installation and Running the Application Locally

To run the EarthSoft Text Analyzer on your local machine, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine. You can download Node.js from [here](https://nodejs.org/).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sorochak/earthsoft-app.git
   cd earthsoft-text-analyzer
   ```

2. **Install Dependencies**

```bash
   npm install
```

### Running the Application

1. **Start the Development Server**

```bash
   npm start
```

This will start the development server and open the application in your default web browser. If it doesn't open automatically, navigate to http://localhost:3000 in your browser.

### Building for Production

1. **Build the Application**

```bash
   npm run build
```

This will create a build directory with the optimized production version of your app.

### Deployment to AWS S3

To deploy the application to an AWS S3 bucket, follow these steps:

1. **Create an S3 Bucket:** In the AWS S3 console, create a new bucket and configure it for static website hosting.
2. **Upload the Build Files:** Upload the contents of the build directory to the S3 bucket.
3. **Set Permissions:** Ensure the files are publicly accessible by setting the appropriate bucket policy.
4. **Automated Deployment with GitHub Actions:** The deployment process for this application automated using GitHub Actions. The workflow file located at `.github/workflows/build-deploy.yaml` is set up to build and deploy the application to an S3 bucket on every push to the main branch.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
