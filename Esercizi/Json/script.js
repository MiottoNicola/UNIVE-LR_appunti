let requestURL = "./classe.json";
let request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
  const classe = request.response;
  console.log(classe);
};
