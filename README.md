# PageFly Documentation
## **Setup Project**

### Frontend (pfcore)

```bash
# clone this repo with SSH
# make sure you setup the SSH in bitbucket setting
git clone git@bitbucket.org:bravebits/pfcore.git

# go to cloned pfcore folder
cd pfcore

# install the dependencies
pnpm install

# if you failed to install and the console is throwing permission issue, please chmod the node_modules:
sudo chmod -R 777 node_modules
# then yarn install again.

# Start the app in port 3000
pnpm run start

```

### Backend (pfserver)
- Download and install Docker: [Docker](https://www.docker.com/)

- Download ngrok: `brew install ngrok`

Tips for install mongo and redis in M1 Mac:
- Redis:
`sudo redis-server --daemonize yes`


- Mongo: 
`mongod --dbpath ~/Workspace/mongo-data --fork --logpath ~/Workspace/mongo-data/log.txt`

```bash

# Clone the backend project
git clone git@bitbucket.org:bravebits/pfserver.git

# go to backend source
cd pfserver

# create .env file from .env.example file
cp .env.example .env
# Remember to update all config behind that

# Install dependencies
yarn install

# Run Docker
docker compose up -d

```
Start ngrok
```bash
ngrok http 3000

# Copy the https link 
```

Start server
```bash
yarn dev-shopify --tunnel-url=<your-ngrok-url>:3000

// or

yarn shopify app dev --tunnel-url=<your-ngrok-url>:3000
```

## **Pricing Plans**
### Update local plans to database for testing
Go to this link: [http://localhost:3000/api/seed-plan-db](http://localhost:3000/api/seed-plan-db)

## **Localization**
### Update locales
- With npm: `npm run trans`
- With yarn: `yarn trans`
- With pnpm: `pnpm trans`

### Usage
**Note**: Translations list can be found here: [Check Translations](https://docs.google.com/spreadsheets/d/1zHUSpQGypC_GTz0HUQmPTrIYNi8mxc85EwLkAhdb2Uw/edit#gid=2120374730), **please don't add any translation to the sheet, the job should be done by our Design team**

Use the hook `useTranslation` provided by react-i18next. [Read Docs](https://react.i18next.com/latest/usetranslation-hook)
```jsx
const MyComponent = () => {
  const { t } = useTranslation()

  return <div>
    <h1>{t('THIS_WILL_BE_TRANSLATED')}</h1>
    <p>{t('THIS_TEXT_WILL_BE_TRANSLATED')}</p>
  </div>
}
```
To translate a complex string (text with link, text with html,...), use `Trans` component provided by `react-i18next`
```jsx
// {
//   "TEST1": "This is a text with a <url>link</url>. You have {{ count }} new messages"
// }

<Trans
  i18nKey="TEST1"
  values={{ count: 100 }}
  components={{ url: <a href="#" /> }}
/>
```
```jsx
// {
//   "TEST1": "This text has <b>bold</b> and <i>italic</i>"
// }

<Trans
  i18nKey="TEST1"
  values={{ count: 100 }}
  components={{ b: <strong />, i: <i /> }}
/>
```
Plurals: Deal with one and many
```jsx
// {
//   "PAGE_COUNT_one": "{{count}} page",
//   "PAGE_COUNT_zero": "{{count}} page",
//   "PAGE_COUNT_other": "{{count}} pages",
// }

const MyComponent = () => {
  const { t } = useTranslation()

  return <div>
    <p>{t('PAGE_COUNT', { count: 0 })}</p>  // 0 page
    <p>{t('PAGE_COUNT', { count: 1 })}</p>  // 1 page
    <p>{t('PAGE_COUNT', { count: 4 })}</p>  // 5 pages
  </div>
}
```

If you need to translate content outside a React component, just simply import the `i18n` instance from `i18n.ts`
```ts
import i18n from "@/i18n"

const t = i18n.t

const myArray = [
  { label: t('LABEL_1'), value: 'value1' },
  { label: t('LABEL_2'), value: 'value1' },
  { label: t('LABEL_3'), value: 'value1' },
]
```

Format string:
```ts
import i18next from 'i18next'

const MyComponent = () => {
  const { t } = useTranslation()

  return <div>
    {i18next.format(t('MY_STRING_KEY'), 'uppercase')} // THIS IS A TEXT
    {i18next.format(t('MY_STRING_KEY'), 'lowercase')} // this is a text
    {i18next.format(t('MY_STRING_KEY'), 'capitalize')} // This is a text
  </div>
}
```

## **Preview Page Setup**
  - Go to you app set up in Shopify Partner > Apps > Your app setting > Manage App Proxy

 - Update your proxy like follow:  https://your-app-domain/api/public/preview

 - Set your own custom path/subpath. Example: /a/your_proxy_path

 - Update your backend .env:  SHOPIFY_PROXY_PATH=/a/your_proxy_path

 - Save and restart the app (you might need to re-install the app as well)


#### This project bootstrapped by ejecting Create React App but still keep many functions from it, so you should take a look at [CRA Docs](https://create-react-app.dev/docs/getting-started/)


## **Useful tools for your Mac**
- [Oh My ZSH](https://ohmyz.sh/): Provide useful commands support for Git and others
- [ni](https://github.com/antfu/ni): Use the right package manager

## **Usefull Extensions for VSCode**
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot): Your AI pair programmer
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Intergrates ESLint JS into VS Code
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): Powerful Git visualization for VS Code
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Code formatter

## **Technology / Libraries**

### Dependencies:
* [React](https://reactjs.org/)
* [React Hooks](https://reactjs.org/docs/hooks-overview.html)
* [Ant Design](https://ant.design/)
* [Styled Components](https://styled-components.com/): CSS in JS
* [Unstated X](https://github.com/paul-phan/unstated-x): State Management Library
* [Global State Hook](https://github.com/paul-phan/global-state-hook): State sharing with Hooks
* [Wouter](https://github.com/molefrog/wouter): React Routing library with Hooks
* [Lodash](https://lodash.com/): JavaScript utility library
* [ky](https://github.com/sindresorhus/ky): HTTP client for requesting API
* [date-fns](https://date-fns.org/): Modern JavaScript date utility library
* [react-color](https://casesandberg.github.io/react-color/): React Color Pickers
* [Graphql](https://www.apollographql.com/): GraphQL
* [react-image-crop](https://github.com/DominicTobias/react-image-crop): A responsive image cropping tool for React

### Dev Dependencies:
* [TypeScript](https://www.typescriptlang.org/)
* [Babel](https://babeljs.io/): JavaScript compiler
* [Webpack](https://babeljs.io/): Module bundler
* [Eslint](https://eslint.org/): Javascript Linter
* [react-dev-utils](https://www.npmjs.com/package/react-dev-utils): Create React App utilities


#### And many others libraries that help build necessary part like Chart.js, slider-x, codemirror, sortable.js,...


## **Folder structure**
+ **assets**: Storing assets like `images, css file,...`
+ **components**: Building your React Component here
+ **constants**: Defining exportable constants like data object, context, ref,...
+ **elements**: Creating PageFly Element here
+ **helpers**: Writing frontend helper for live page
+ **hooks**: Creating custom hooks logic
+ **modules**: Creating Modules like: `inspector, navbar, workspace, header,...`
+ **stores**: Creating container, subscription store
+ **utilities**: Creating utilities function
+ **views**: Creating views, ex: `editor`, `dashboard`, `install`, `plan`,...


## **Coding standard**

### Code Style
ESLint with `react-app` rules

#### **Rule #1: Always define your function/component type**
And put it into `src/types` folder

#### **Rule #2: Always format your code before committing.**
This project is using pre-commit hooks to check if your code is valid and formatted or not, otherwise you cannot commit and push your code to the repository.
So please make sure that your code is formatted and linted using ESlint before you commit.


**Tips:** If you use Webstorm, please navigate to `Preferences` => `ESLint` and enable the ESLint.
After that, go to `Keymap` and search for `Fix Eslint problems` and assign a shortcut to use.

### **Rule #3: Commenting your code**
Please read this article to see how to documenting your code: https://react-styleguidist.js.org/docs/documenting.html

### **Rule #4: Write test for your code**
Resource: https://jestjs.io/docs/en/getting-started.html

### **Rule #5: Separation of Concerns**
- Do not write Logic, UI view, Data in one single file, we have to separate it into Components/Custom Hooks/ Stores,...
- Limiting usage of state-full component since it storing data and View in one file.
The better way to do it is using hook & custom hook.
- Each code file should not contain more than 300 line of code, we should break it down to a smaller file.

## **Conventional Commits**
The commit message should be structured as follows:<br>
`[issue_key][optional type]: <description>`

The commit contains the following structural elements<br>
**Issue Key**: A Jira issue key, this is required field<br>
**Optional Type**: A commit type, includes:
* Fix: a commit of the type `fix` patches a bug in codebase.
* Improve: a commit of the type `improve` contains the improvement in codebase.
* Feat: a commit of the type `feat` introduces a new feature to the codebase.
* Refactor: a commit that has a `Refactor` introduces a breaking change

#### Example
`[PFSHOPIFY-1][Feat]: Add Conventional Commits to project`

## **References**
- https://overreacted.io/
- https://kentcdodds.com/
- https://reacttraining.com/blog/
- https://dev.to/t/react
- https://youmightnotneed.com/
