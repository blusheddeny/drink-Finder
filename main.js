const myForm = document.getElementById('myForm')

const result = document.getElementById('test')


myForm.onsubmit = async (e) => {
    result.innerHTML = ''
    e.preventDefault()
    const query = document.getElementById('query').value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    const formData = new FormData()
    formData.append('query', query)

    const response = await fetch(url, {
        method: 'POST',
        body: formData,
    })
    const data = await response.json()
    console.log(data)
    if(data.drinks === null){
      alert('Try with another query')
    }else showResults(data.drinks)
    
}

async function examples(example){
   result.innerHTML = ''

    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${example}`)
    console.log(response)
    const data = await response.json()
    showResults(data.drinks)

}
function showResults(drinks) {
  drinks.map(function(x){
      const title = x.strDrink
      const img = x.strDrinkThumb
      const inst = x.strInstructions
      
      result.innerHTML += `
      <div class=" eximg col s12 m10 l3">
              <div class="card">
                <div class="card-image">
              <img class="drink-img" id="img" src="${img}" alt=""/>
              </div>
              <div class="card-title secondary">
              <span class="drinkName" id="title">${title}</span>
              </div>
              <div class="card-content terciary">
                <span class="truncate">
                ${inst}
                  </span>
                  <div class="card-action">
        <a id="show" href="main.html">See more</a>
      </div>
              </div>
              </div>
              </div>
              `
  })
  
}
function changeTheme(){
  const theme = document.getElementsByTagName('link')[1]
  if(theme.getAttribute('href') === "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"){
    theme.setAttribute("href", "main.css")
  }else theme.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" )
}
const toggle = document.getElementById('changeTheme')
toggle.addEventListener('click', changeTheme)


