

let searchInput = document.getElementById('search');
let templete = document.getElementById('templete');
searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
        let searchText = e.target.value;
        searchCovidUser(searchText);
    }
})
async function searchCovidUser(searchconetent){
    let URL = 'https://api.covid19api.com/country';
    let DATA = await window.fetch(`${URL}/${searchconetent}`);
    let JSON = await DATA.json();
    let {Deaths,Country,Confirmed,Active,Date} = JSON[JSON.length-1];
templete.innerHTML =`

<p class="country">${Country} </p>
<main>
    <div>

       <p class="positive">Positive: ${Confirmed}</p>
       <p class="userName">Deaths: ${Deaths}</p>

    </div>

    
    <div id="inner">
    <p class="userName">Active: ${Active}</p>
    <p class="userName">Date: ${Date}</p>
    </div>
</main>`
}
