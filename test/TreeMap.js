var expect = require('chai').expect;
var TreeMap = require('../lib/TreeMap');

describe('TreeMap', function() {
  var treeMap;
  var firstKey;
  var secondKey;
  var firstValue;
  var secondValue;

  it('can be constructed', function() {
    treeMap = new TreeMap();
    expect(treeMap).to.exist;
  });

  it('one element can be put', function() {
    firstKey = {
      number : 2,
      compareTo : function(a) {
        if (this.number === a.number) {
          return 0;
        } else if (this.number > a.number) {
          return 1;
        } else if (this.number < a.number) {
          return -1;
        }
      }
    };
    firstValue = "firstValue";

    treeMap.put(firstKey, firstValue);

    expect(treeMap.size()).to.equal(1);
  });

  it('second element can be put', function() {
    secondKey = {
        number : 1,
        compareTo : function(a) {
          if (this.number === a.number) {
            return 0;
          } else if (this.number > a.number) {
            return 1;
          } else if (this.number < a.number) {
            return -1;
          }
        }
      };
    secondValue = "secondValue";

    treeMap.put(secondKey, secondValue);

    expect(treeMap.size()).to.equal(2);
  });

  it('second element should be enumerated as first because of natural key order', function() {
    var iterator = treeMap.values().iterator();
    var e = iterator.next();

    expect(e).to.equal(secondValue);
  });

});
