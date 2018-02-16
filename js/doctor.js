import apiKey from './../.env';

export let promise = function(stuff) {
  return new Promise(function(resolve, reject) {
    console.log(apiKey);
    let request = new XMLHttpRequest();
    let url = ``;
    console.log(url);
    request.onload =function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  })
}
