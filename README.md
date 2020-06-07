# vue-deck-of-cards

`This small project consists in an application to analyze a set of cards provided by the user.`

See [DEMO](https://5edd244d4265fff79c4f0e19--pedantic-haibt-e65a21.netlify.app)

## Example of inputs

```
User Input - Cards: 7D, AS, QH, 9S, 6D and Rotation Card: 10C
Ordered Pile: 9S, AS, QH, 7D, 6D
High Card: 9S
Full House Combinations: None


User Input - Cards: AS, AD, AC, KH, KS and Rotation Card: 2H
Ordered Pile: KH, AD, AC, AS, KS
High Card: KH
Full House Combinations: AD, AC, AS, KH, KS
```

## Tech stack

- Vue
- VueX
- Jest
- Typescript
- vue-class
- js-combinations
- axios
- API [https://deckofcardsapi.com](https://deckofcardsapi.com/)

## Project setup

`Clone the repository, go into the project folder and run:`

```
yarn install
```

`or`

```
npm install
```

### Compile and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```
