function toRoman(num) {
  var map = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

  var result = '';
  for (var i = 0; i < map.length; i++) {
    var value = map[i][0];
    var symbol = map[i][1];
    while (num >= value) {
      result = result + symbol;
      num = num - value;
    }
  }
  return result;
}

function fromRoman(str) {
  var values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var total = 0;
  for (var i = 0; i < str.length; i++) {
    var current = values[str[i]];
    var next = values[str[i + 1]];

    if (next && current < next) {
      total = total - current;
    } else {
      total = total + current;
    }
  }
  return total;
}