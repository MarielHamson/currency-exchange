import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles.css';
import $ from 'jquery';
import { CurrencyExchange } from './../src/currency-exchange-service.js';

$(document).ready(function() {

  $('#exchange').click(function() {
    const amount = parseInt($('#amount').val());
    const currency = $('#currency').val();
    const baseCurrency = $('#base-currency').val();
    $('#amount').val("");    
    if (!isNaN(amount)) {
      (async () => {
        let currencyExchange = new CurrencyExchange();
        const response = await currencyExchange.getExchange();
        getElements(response);
      })();
    } else {
      $('.showErrors').text("Please enter a valid amount");
    }
    function getElements(response) {
      if (response.result === "error") {
        $('.showErrors').show();
        $('.showErrors').text("Your request did not go through. Please check your API key and try again");
      } else {let convertToDollars = Number.parseFloat(amount / response.conversion_rates[baseCurrency], 2);
        let newCurrency = Number.parseFloat(convertToDollars * response.conversion_rates[currency]);
        if (response && response.conversion_rates[currency] !== undefined) {
          $('.showExchange').text(`${amount} in ${baseCurrency} is equal to about ${newCurrency} in ${currency}`);
        } else if (response.status !== 200 || response.conversion_rates[currency == undefined]) {
          $('.showErrors').text("There was an error processing your request. Error code: " + response.status);}
      }
    }
  });
});