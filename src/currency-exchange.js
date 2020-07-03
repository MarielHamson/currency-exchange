import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { CurrencyExchange } from './../src/currency-exchange-service.js';

  $(document).ready(function() {

    $('#exchange').click(function() {
      const usd = $('#us-dollars').val();
      const currency = $('#currency').val();
      $('#us-dollars').val("");
      
  
      (async () => {
        let currencyExchange = new CurrencyExchange();
        const response = await currencyExchange.getExchange(usd);
        getElements(response);
      })();
  
      function getElements(response) {
        if (response) {
          $('.showExchange').text(`The amount of $ ${usd} is equal to ${response.conversion_rates.currency} in ${currency}`);
        } else {
          $('.showError').text(`There was an error processing your request.`);
        }
      }
    });
  });