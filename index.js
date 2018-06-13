function getFirstSelector(selector) {
  var getSelector = document.querySelector(selector);
  return getSelector;
}

function nestedTarget() {
  const nestedSelector = document.getElementById('nested').querySelector('.target');
  return nestedSelector;
}

function increaseRankBy(n) {
  const increaseRank = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < increaseRank.length; i++) {
    increaseRank[i].innerHTML = parseInt(increaseRank[i].innerHTML) + n;
  }
}

function deepestChild() {
  const deepChild = document.getElementById('grand-node').querySelectorAll('div');
  var test;
  for (let i = 0; i < deepChild.length - 1; i++) {
    test = deepChild[i].querySelectorAll('div');
  }
  return test;
}