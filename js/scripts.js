// functions

async function searchAddress() {
    const zipCode = document.querySelector("#zipCode").value
    
    if (zipCode.length !== 8) {
        alert("ZIP Code invalid.");
        return
    }

    const url = `https://viacep.com.br/ws/${zipCode}/json/`

    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
    
    showAddress(data);
}

function showAddress(data) {
    const result = document.querySelector("#result")
    
    if(data.erro) {
        result.innerHTML = "Unable to locate the address."
        result.style.color = "darkred"
    } else {
        result.innerHTML = `<p># Zip Code: ${data.cep}</p>
                        <p># Public Place: ${data.logradouro}</p>
                        <p># Neighborhood: ${data.bairro}</p>
                        <p># City/State: ${data.localidade}/${data.uf}</p>`
    }
}











