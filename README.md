**common ui components for React native  project**

## Disclaimer
The project is under development,so its not have an installation procedure in a any project for now from `npm` or `yarn` command,you need to add it to your `node_modules` manually to make it work. Please report issue even that not work.


## Project Structure
So basically the project contains an example app itself which uses the `supergroww` library,so the main code for the ui-kit resides at src,so all the set of components would be there only. and can be imported from `supergroww` library in the `example` app which resides at `example` folder in the root directory.

## Setup for example project installation

### Installation
Installing dependencies of the project
```bash
$ git clone https://github.com/groww/super
$ cd super && yarn
```

Installing dependencies of example app
```bash
$ yarn bootstrap
```

Installing dependencies of uikit-library
```bash
$ cd src && yarn
```

### Running the example app

```bash
# for ios
$ yarn run ios
# for android
$ yarn run android
```

Once the app starts you can change anything inside the main library which is in `src` folder at the root and it will reflect in the example app without any fresh install.and if you want to change any thing inside the Example app then you can change inside the `example` folder.

### Peer-Dependencies

The ui-kit depends on certain libraries like `react-native-vector-icons`, `react-native-reanimated`,so if you want icons and advance animations components should,just make sure you **manually** install it in the example app.

So this means,any project which install this project as a dependency,should have already install these dependencies,if they want that particular features in the component.

1. [Installation of reanimated](https://software-mansion.github.io/react-native-reanimated/getting-started.html)
2. [Installation of vector-icons](https://github.com/oblador/react-native-vector-icons#installation)

## Contributing
To add any new component in the library just create a new `feature` branch and then create a separate folder for that particular thing whether it be a `component`, `animated-component`, `core-methods` etc.

For example - There is `CustomExample` component so, create a folder inside `src/components` and then update `index.tsx` to export this `CustomExample` component. See other components for better understanding.



