function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div div div div.target')
}

function increaseRankBy(n){
  var list = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i< list.length; i++){
    list[i].innerHTML = n + parseInt(list[i].innerHTML);
  }
}

function deepestChild(){
  var test = document.querySelector('div#grand-node');
  var next = test.querySelector('div');
  
  while(next){
    test = next;
    next = test.querySelector('div');
  }
  
  return test
}