const cep = document.querySelector("#cep") as HTMLInputElement;

const showData = (result: { [x: string]: string; }) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      (<HTMLInputElement>document.querySelector("#" + campo)).value =
        result[campo];
      console.log(typeof result[campo]);
    }
  }
};

cep.addEventListener("blur", () => {
  let search = cep.value.replace("-", "");

  const options: object = {
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
      const form = document.querySelector("form") as HTMLFormElement;
      let msg = document.createElement("p") as HTMLParagraphElement;
      msg.innerHTML = "Digite um cep válido";
      form.appendChild(msg);
      // msg = ''  
    });
});
