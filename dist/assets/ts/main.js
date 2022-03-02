"use strict";
const cep = document.querySelector("#cep");
const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value =
                result[campo];
            console.log(typeof result[campo]);
        }
    }
};
cep.addEventListener("blur", () => {
    let search = cep.value.replace("-", "");
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default",
    };
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then((response) => {
        response.json().then((data) => {
            showData(data);
        });
    })
        .catch(() => {
        const form = document.querySelector("form");
        let msg = document.createElement("p");
        msg.innerHTML = "Digite um cep válido";
        form.appendChild(msg);
        // msg = ''  
    });
});
//# sourceMappingURL=main.js.map