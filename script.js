window.onload = function(){

  const text = document.querySelector("h2");
  const apiUrl = 'http://localhost:8080/v1/quote';
  //'https://api.kanye.rest/'

  async function getQuote(){
    try{
      //get json content
      let response = await fetch(apiUrl);
      let content = await response.json();
      console.log(response)
      console.log(content)
      //render content on the page
      text.innerText = content.quote; //Object.values(content);
    }catch(err){
      text.innerText = "No Kanye quote for you!!";
      console.log(err);
    }
  };

  getQuote();
  document.querySelector(".container").addEventListener("click", getQuote);

}
