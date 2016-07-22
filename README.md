# react-store
React+Redux+Webpack

### Table of Contents
1. [Installation](#installation)
2. [Develop](#develop)
3. [Testing](#test)
4. [Linting](#linting)
5. [Create Version](#version)
6. [Build bundles](#bundles)
7. [TODO](#todo)

---

<div id="installation"></div>

### 1. Installation

Install all the dependencies for the project.

```
npm install
```


### 2. Develop
Runs a development server at *https://localhost:8080* and use Hot Module Replacement.
To override the default host and port through env (HOST, PORT)

```
npm start
```

<div id="test"></div>

### 3. Testing
Using Karma as test runner, mocha as test library and chai as assertions library.

To run test once:
```
npm test
```

To run tests with watcher:
```
npm run test:tdd
```

<div id="linting"></div>

### 4. Linting
Eslint to check code consistence
```
npm run test:lint
```

**Test and lint together:**
```
npm run test:all
```

<div id="version"></div>

### 5. Create Version
Updates */dist* and *package.json* with the new package version and create a version tag to Git
```
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]
```

Example:
```
npm version patch -m "Upgrade to %s for reasons"
```

<div id="bundles"></div>

### 6. Build bundles
Generate library bundles without minification
```
npm run dist:normal
```
Generate library bundles minificated
```
npm run dist:min
```
Generate server bundle
```
npm run dist:server
```
Generate all bundles
```
npm run dist
```


---