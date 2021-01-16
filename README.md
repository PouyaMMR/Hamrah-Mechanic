# Project Details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Details

### Components

##### Layout

Layout generates the desired layout based on the rows and columns fed as props. The layout is generated using CCS3's grid layout.

##### App

The main component which renders the whole application in **index.js**. The methods used for handling events are `handleChange` and `parseInput`. `handleChange` is activated when the user changes the input and feeds the value entered to `parseInput` after 750 milliseconds. `parseInput` validates the input and then if it was correctly entered, renders the layout.
