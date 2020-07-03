import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles.css'
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
      let convertToDollars = Math.round(amount / response.conversion_rates[baseCurrency], 2);
      if (response && response.conversion_rates[currency] !== undefined) {
        $('.showExchange').text(`${amount} in ${baseCurrency} is equal to about ${Number.parseFloat(convertToDollars * response.conversion_rates[currency]).toFixed(2)} in ${currency}`);
      } else {
        $('.showErrors').text("There was an error processing your request.");
      }
    }
  });
});