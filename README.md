> Due to npm package name availability the repository name has been changed to **frontatish** from **viserion**

# Overview

[frontatish](https://groww.github.io/frontatish/) is a collection of common ui components developed and designed by Groww Engineering Team,which aims to give you all set of most commonly used ui components or helpers at a single place,so that you could only worry about writing the business logic of your app.

# Preview

Below screenshots are some previews of the components which resides in this ui-kit,it is just for demoonstration purposes,the kit contains many more components and helper methods.

 <img src="documentation/static/img/ButtonScreen.png" height="400"/><img src="documentation/static/img/NumpadScreen.png" height="400"/><img src="documentation/static/img/DropdownScreen.png" height="400"/> <img src="documentation/static/img/TableScreen.png" height="400" /><img src="documentation/static/img/EmptyScreen.png" height="400" />

# Set-up
To get started with the project, run `yarn bootstrap` in the root directory to install the required dependencies for each package:

```bash
yarn bootstrap
```

While developing, you can run the example app to test your changes.

To start the packager:

```bash
yarn example start
```

To run the example app on Android:

```bash
yarn example android
```

To run the example app on iOS:

```bash
yarn example ios
```

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```bash
yarn typescript
yarn lint
```

To fix formatting errors, run the following:

```bash
yarn lint --fix
```

Remember to add tests for your change if possible. Run the unit tests by:

```bash
yarn test
```

To edit the Objective-C files, open `example/ios/viserionExample.xcworkspace` in XCode and find the source files at `Pods > Development Pods > viserion`.

To edit the Java files, open `example/android` in Android studio and find the source files at `viserion` under `Android`.

# Contribute

If you are here to conribute into this project kindly follow the below steps to setup this project in your local system
```bash
  > git clone `repo-link`
  > cd frontatish
  > yarn bootstrap
  > yarn example ios or yarn example android
```


# Quick Install
```bash
yarn add frontatish react-native-material-ripple react-native-vector-icons react-native-reanimated react-native-gesture-handler
```

Make sure if you are running on ios device you go to the `ios/` folder and run `pod install` inside it to complete the installation of library like vector icons and reanimated.

# Installation

Follow this [link](https://groww.github.io/frontatish/docs/getting-started) to setup frontatish into you project.

> The library is still under development & we are working to ship more usefull components very soon,below are some components which seems stable to use for now.

# Requirements

Few of our components depends on external libraries to perform well,for example [Checkbox](https://groww.github.io/frontatish/docs/checkbox),it depends on [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) to render icons inside the box,similarly [Button](https://groww.github.io/frontatish/docs/button) uses [react-native-material-ripple](https://www.npmjs.com/package/react-native-material-ripple) so before using these components you should install along with the `frontatish` installation

so please make sure you already have this package installed and linked properly to you react-native project.

We assume it best perform on `react-native` greater than `v0.60`,we have not tested below to that version,if you are on lower versions of react and facing any issue,you can file and issue [here](https://github.com/Groww/frontatish/issues/new)

## Components

1. [Button](https://groww.github.io/frontatish/docs/button)
2. [Checkbox](https://groww.github.io/frontatish/docs/checkbox)
3. [NumPad](https://groww.github.io/frontatish/docs/numpad)
4. [Radiobutton](https://groww.github.io/frontatish/docs/radiobutton)
5. [Table](https://groww.github.io/frontatish/docs/table)
6. [EmptyView](https://groww.github.io/frontatish/docs/emptyview)
7. [Switch](https://groww.github.io/frontatish/docs/switch)
8. [Dropdown](https://groww.github.io/frontatish/docs/dropdown)
9. [Input](https://groww.github.io/frontatish/docs/input)


