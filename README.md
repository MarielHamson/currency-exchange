# _Currency Exchange_

#### _Lookup currency exchange rates from USD, 7.3.2020_

#### By _**Mariel Hamson**_

## Description

This is an app that will allow you to look up the current exchange rate for your currency of choice, from US Dollars.

## Specs

| Behavior | Input | Output |  Completed(Y/N?)  | 
| -------- | ----- | ------ | -------- |
|  Return an error when non-number input is received |  abcd! | "Error!"   | N |
|  Return an appropriate, user-friendly error message for any API error | API response 402 | "Your request could not be completed at this time" | N |
   Return an appropriate, user-friendly error for an incorrect currency input | Canadian Cero | "This currency does not exist" | N |
|  Convert input from USD to currency selected (5 choices) | $10.00 | €8.89 | N |

## Setup/Installation Requirements

### Obtaining API Key

* In order to use this app, you must obtain an API key from https://www.exchangerate-api.com/. On the homepage, enter your email address and click "Get Free Key"
* Enter your name and create a password in order to see the API key. Hold on to the key as you will need to enter it in the next step

### Clone from GitHub and Run app via NPM

* First, ensure you have node.js and NPM installed
* Navigate to: www.github.com/marielhamson/currency-exchange
* Find the "Code" button and either download the .zip or use the .git filename to clone the repository on your command line into the desired location ("git clone https://github.com/MarielHamson/currency-exchange.git)
* Open the project in your code editor of choice
* Add a file in the root directory called ".env"
* Add the following line: API_KEY= {insert your API key here}
* run npm install _and_ npm start to see the app on a live server

## Known Bugs

_No Known Bugs at this time_

## Support and contact details

_Please let me know if you have any questions or concerns at mariel.hamson@gmail.com_

## Technologies Used

_HTML, CSS(Bootstrap), Javascript(jQuery), ExchangeRate API_

### License

*MIT License*

Copyright (c) 2020 **_Mariel Hamson**