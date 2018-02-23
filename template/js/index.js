const searchForm = document.getElementById('searchForm');
searchForm.onsubmit = (event) => {
  const searchBar = document.getElementById('search');
  if (!searchBar.value) {
    alert('Kindly type an input to the search bar')
  } else {
    alert(searchBar.value)
  }
};