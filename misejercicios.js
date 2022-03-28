const forma = document.getElementById("ownform")
const buttone = document.getElementById("Send")
const results = document.getElementById("resultados")
buttone.addEventListener("click", (event) => {

    event.preventDefault()

    const name = forma.Name.value
    const email = forma.Email.value
    const birthdate = forma.Birthdate.value
    const dessert = forma.Dessert.value

    let dessertyboolean

    if(dessert){
        dessertyboolean = "the user has selected the option"
    } else {
        dessertyboolean = "the user has not selected the option"
    }
 
    const selectedIndexy = forma.raffle.selectedIndex
    const selectedOption = forma.raffle.options[selectedIndexy]
    const selectedOptionTexty = selectedOption.text
    
    return results.innerHTML =  `
    <h1>Datos de envio</h1>
        <p>El nombre es:${name}</p>
        <p>El email es:${email}</p>
        <p>El birthday es:${birthdate}</p>
        <p>${dessertyboolean}</p>
        <p>El número elegido fue: ${selectedOptionTexty}</p>
    `
  






})