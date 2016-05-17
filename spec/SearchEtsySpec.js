describe("Search Etsy Spec", function(){
  var SearchEtsy = require("../lib/SearchEtsy.js");
  var jsdom = require("jsdom");
  var searchEtsy;
  var $input;
  var $url;

  beforeEach(function(){
    searchEtsy = new SearchEtsy();
    document = jsdom.jsdom("<uldata-js='results_list'></ul>");
    window = document.defaultView;
    $ = require("jquery");
  });

  it("Requests data from URL", function(){
    spyOn(searchEtsy, "useKeyword");
    searchEtsy.useKeyword($url);
    expect(searchEtsy.useKeyword).toHaveBeenCalledWith($url);
  })

  it("Parses API data to inject pieces of information into website", function(){
    spyOn(searchEtsy, "useKeyword");
    searchEtsy.useKeyword($url);
    expect($url).toContain($input);
  })
})
