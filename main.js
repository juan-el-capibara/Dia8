function fectchPeople(){
    let obt = new XMLHttpRequest()
    let url = `https://swapi.py4e.com/api/people/3`
    obt.open('GET', url,true)
    obt.onreadystatechange=function(){
        if(this.readyState === 4 && this.status === 200){
        let response = JSON.parse(this.responseText)
        displaypeople(response)
        homeworld(response)
    } else if (this.readyState === 4)
        console.log('Error =',this.statusText )

    }
    obt.send()
}
 


fectchPeople()
function displaypeople(data){
    let peopleCara = document.getElementById('people')
    if (data.response === 'error'){
        peopleCara.innerHTML = `<p> Error : ${data.error}</p>`
    }
    else{
       peopleCara.innerHTML =
       `name = ${data.name} <br>
       height = ${data.height}<br>
       mass = ${data.mass}<br>
       hair color = ${data.hair_color}<br>
       skin color = ${data.skin_color}<br>
       eye color = ${data.eye_color} <br>
       birth year = ${data.birth_year} <br>
       gender = ${data.gender} <br>`
       
    }
}

function homeworld(data){
    let url = data.homeworld
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let homeworld = data
        let HomeHtml = `<p>Homeworld</p><ul>`
        for (let i in homeworld){
            HomeHtml += `<li>${i}: ${homeworld[i]}</li>`
        }
        document.getElementById('people1').innerHTML = HomeHtml
    })
    .catch(error => console.error('Error fetching Homeworld:',error))
}
homeworld()