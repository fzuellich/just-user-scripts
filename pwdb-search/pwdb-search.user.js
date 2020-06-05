// ==UserScript==
// @name     PWDB Search
// @version  1
// @grant    none
// ==/UserScript==


function expand_tree() {
  document.getElementById('jstree_open').getElementsByTagName('i')[0].click();
}

function filter_tree(e) {
  const value = e.target.value;
  const lis = document.getElementById('jstree').getElementsByTagName('li');
  console.log('value: ', value);
  for (let li of lis) {
    const containsText = li.innerText.toLocaleLowerCase().indexOf(value) >= 0;
    if(!containsText) {
      li.style.display = 'none';
    } else {
      li.style.display = 'block';
    }
  }
}


function add_immediate_search() {
  const search_input = document.getElementById('jstree_search');
  search_input.addEventListener('click', () => expand_tree());
  search_input.addEventListener('keyup', filter_tree);
}

add_immediate_search();
