import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
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
      let convertToDollars = amount / response.conversion_rates[baseCurrency];
      convertToDollars * response.conversion_rates[currency]
      if (response && response.conversion_rates[currency] !== undefined) {
        $('.showExchange').text(`The amount of ${amount} in ${baseCurrency}is equal to ${convertToDollars * response.conversion_rates[currency]} in ${currency}`);
      } else {
        $('.showErrors').text("There was an error processing your request.");
      }
    }
  });
});