# Rundit Frontend Assignment

As part of our application process, we'd like to see what you can produce by giving you a small assignment. It should take you no more than a few hours to complete the assignment, but any extra polish or features you might want to put in will not go unnoticed.

## Assignment

The goal of this assignment is to build two components that display simplified company investment data from a provided data source.
The two components need to be displayed in the same view and when an investment gets deleted, the changes should be reflected on the other component as well.

Take a look at the detailed [Adobe XD component sketches](https://xd.adobe.com/view/a7c5a29b-f0ee-41b2-97d0-558e25559261-f296/grid) to get spacing values, fonts, colors etc. The font used in the sketches is Open Sans, which is available via Google Fonts.

We do not expect your submission to look pixel perfect, but clear resemblance is desirable.

The provided data can be accessed via the services in the project under `src/services`. There is one service for companies and another for the investments. Import the service where you see fit and use provided methods to access data. The `InvestmentService` also has a method for removing investments.

### Investment Listing

![Invesmtent listing component](https://github.com/Rundit/rundit-frontend-assignment/blob/main/src/assets/images/investment-listing.png?raw=true)

This component lists all company investments, the name of the company, date it occured and the amount that was invested. Each listing item should have a delete button, which should trigger a delete via the provided data source.

### Investment Summary

![Invesmtent summary component](https://github.com/Rundit/rundit-frontend-assignment/blob/main/src/assets/images/investment-summary.png?raw=true)

This component should list the aggregated total invested amounts for each company. In other words, dispaly the company and how much has been invested into it during the selected inspect period. The inspection period is selected from the top right corner (5Y, 3Y, 1Y) and only the investments from that period (last 1, 3 or 5 years) should be included in the total invested amounts.

### Things to consider

- The project is setup with TypeScript and we encourage you to use it even if you're not familiar with it. LogRocket has a [great article](https://blog.logrocket.com/vue-typescript-tutorial-examples/) on how to do common things in Vue with TypeScript. But if you're in a pinch, you can always drop the `lang="ts"` from the top of the script in a Vue single file component.
- Consider how you structure your components and the project in general.
- Styling – whatever css naming approach works for you (BEM, ITCSS, atomic, utility), use it and be consistent.
- State management – use vuex to manage the state.
- Tests - We do not expect you to write tests in this assignment but you can, of course.
- In general if you feel like something should be done better but it would require too much work you can also comment about that in the source code.

Please ask if you have any questions about the assignment.
Happy coding!

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

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

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
