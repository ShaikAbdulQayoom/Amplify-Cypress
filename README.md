# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This sample application shows how to use GraphQL to build an application that a user can login to the system.
The sample is written in React and uses AWS AppSync, Amazon Cognito as well as the Amplify CLI. The AWS Amplify CLI will create an Amazon Cognito User Pool and Identity Pool.
The sample uses AWS Amplify to perform the Sign-Up and Sign-In flows with a Higher Order Component.

If the application runs successfully you should be able to create Todos. This will make a GraphQL call to enter the record into the database. An immediate fetch of the record will then be at the bottom of the screen.
