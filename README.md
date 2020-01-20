# CartoCosmos - Leaflet Plugin for Planetary Mapping

Repository for the CartoCosmos Capstone Team.

### Building and running on localhost

##### First install dependencies:

```sh
npm install
```

##### To create a production build:

```sh
npm run build
```

This will create a folder "dist" with all of the production files needed.

##### To run the development server:

```sh
npm start
```

This will open a development server on port 8000 which will automatically compile and update in the browser window on save.

#### Linting and Formatting

##### Run ESLint:

```
npm run lint
```

This will display linting errors in the terminal window.

##### Fix ESLint errors:

```
npm run fix
```

This will fix the errors that ESLint knows how to.

##### Tell Prettier to format file on change:

```
npm run prettier-watch
```

This will tell Prettier to watch all javascript files and automatically format them on save.

###### Note: I recommend doing the following instead

_Works best in VSCode_

- Install the following extensions in VSCode:
  - Babel Javascript
  - Prettier - Code formatter
  - ESlint
- Go to your Settings and look for "Auto format on Save' and enable it.
- Set Prettier as your default formatter for javascript files.

This will automatically do all the linting and formatting for you.

#### Adding local assets for use

Add any files to

```
src/assets/
```

then simply import them in the file you need to use them inside. If you have any problems with this contact me.
