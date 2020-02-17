// How to calculate the age in days


function ageInDays(){
    var bornYear = window.prompt('When were you born?')
    var ageInDay = (2020 - bornYear) * 365
    

    var h1 = document.createElement('h1')
    var answer = document.createTextNode('You are ' + ageInDay + ' days old')
    h1.setAttribute('id', 'ageInDay')
    h1.appendChild(answer)
    document.getElementById('flex-box-result').appendChild(h1)
}


function reset(){
    document.getElementById('flex-box-result').remove()
}
