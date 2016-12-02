// **Bonus Task 4:**
// Write a simple test which exercises the function that will determine if the favorite item exists in the menu or doesn't exist. Note, that you will need to use the $httpBackend service (and probably look up the docs for it as well) to achieve this test properly.

describe("Check client favorite dish", function() {

  var service;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      service = $injector.get('ClientService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it("The dish 'A1' exists", function (){
    var item = 'A1';
    var response_a1 = {"id":1,"short_name":"A1","name":"Won Ton Soup with Chicken","description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","created_at":"2016-11-23T20:52:07.072Z","updated_at":"2016-11-23T20:52:07.072Z","category_short_name":"A","image_present":true};

    // console.log('ApiPath ', ApiPath);
    $httpBackend.whenGET(ApiPath + '/menu_items/' + item + '.json').respond(response_a1);

    service.favChecking(item).then(function (response){
      expect(response.data).toEqual(response_a1);
    });

    $httpBackend.flush();
  });

  it("The dish 'A' doesn't exist", function (){
    var item = 'A';
    var response_a = {"status":"500","error":"Internal Server Error"};

    $httpBackend.whenGET(ApiPath + '/menu_items/' + item + '.json').respond(response_a);

    service.favChecking(item).then(function (response){
      expect(response.data).toEqual(response_a);
    });

    $httpBackend.flush();
  });
});
