var assert = require("assert");
var should = require("should");
var rek = require("rekuire");
var logger = rek("logger").get_log();
var elasticModel = rek("elasticModel");
var main = rek("mainController");


describe("mainController", function() {

  describe("get_and_index_timeline", function() {
    it("should return at least one result", function(done) {
      this.timeout(5000);

      var searchKey = {
        index: "justinbieber",
        description: "fans",
        fields: ["description", "screen_name"]
      };

      main._get_and_index_timeline("justinbieber", function(err, res) {
        should.not.exist(err);
        res.total.should.be.above(0);
        done();
      });

    })
  })

});
