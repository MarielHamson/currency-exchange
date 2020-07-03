import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { CurrencyExchange } from './../src/currency-exchange-service.js';

$(document).ready(function() {

  $('#exchange').click(function() {
    const usd = parseInt($('#us-dollars').val());
    const currency = $('#currency').val();
    $('#us-dollars').val("");
    
    if (!isNaN(usd)) {
      (async () => {
        let currencyExchange = new CurrencyExchange();
        const response = await currencyExchange.getExchange();
        getElements(response);
        $('.showErrors').hide();
      })();
    } else {
      $('.showErrors').text("Please enter a valid amount");
      }

    function getElements(response) {
      if (response) {
        $('.showExchange').text(`The amount of ${usd} is equal to ${response.conversion_rates[currency] * usd} in ${currency}`);
      } else {
        $('.showErrors').text("There was an error processing your request.");
      }
    }
  });
});