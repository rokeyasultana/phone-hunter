const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';

    const url = `
    https://openapi.programming-hero.com/api/phones?search=${searchText} `;
   // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult (data.data.slice(0,20)));

    // phone search result
const displaySearchResult = data =>{
    console.log(data);
    const SearchResult= document.getElementById('search-result');
    data.forEach (brand => {
      console.log (brand) ;
      const div =document.createElement('div');
      div.classList.add('col');
      div.innerHTML= `
      <div onclick="" class="card h-100">
      <img class="card-img-top" src="${brand.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${brand.brand}</h5>
      <h5 class="card-title">${brand.phone_name}</h5>
      <button onclick="loadPhoneDetail('${data.slug}')" type="button" class="btn btn-primary">Details</button>
      </div>
    </div>
       `;
       SearchResult.appendChild(div);

    })

}











}