function SearchEtsy(){
  var searchEtsy = this;
  var $results = "[data-js='results']";
  var $input;
  var $url;

  searchEtsy.useKeyword = function(){

    $("[data-js='input']").on("keyup", function(e){
      $input = e.target.value;
      $url = "https://openapi.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=" + $input + "&includes=Images&callback=?";

        if (e.keyCode === 13) {
          console.log($input);
        $.getJSON($url, function(data){
          console.log($url);

          data.results.forEach(function(results){
            $("[data-js='results_list']").append(`

              <li class="results__item" data-js="results_item">
                1. Title: ${results.title}</br>
                2. Price: $${results.price}</br>
                3. When is it made: ${results.when_made}</br>
                4. Who made it: ${results.who_made}</br>
                5. Item for: ${results.recipient}</br>
                6. Description: ${results.description}
              </li>

            `)
          })
        })
      }
    })
  }
}
module.exports = SearchEtsy;
