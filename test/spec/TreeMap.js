describe('javascript.util.TreeMap', function() {
  var treeMap;
  var firstKey;
  var secondKey;
  var firstValue;
  var secondValue;
  
  it('can be constructed', function() {
    treeMap = new javascript.util.TreeMap();
    expect(treeMap).toBeDefined();
  });
  
  it('one element can be put', function() {
    firstKey = "2";
    firstValue = "firstValue";
  
    treeMap.put(firstKey, firstValue);
    
    expect(treeMap.size()).toEqual(1);
  });
  
  it('second element can be put', function() {
    secondKey = "1";
    secondValue = "secondValue";
  
    treeMap.put(secondKey, secondValue);
    
    expect(treeMap.size()).toEqual(2);
  });
  
  it('second element should be enumerated as first', function() {
    var iterator = treeMap.values().iterator();
    var e = iterator.next();
    
    expect(e).toEqual(secondValue);
  });
  
});
