window.onload = function(){

  const text = document.querySelector("h2");

  async function getQuote(){
    try{
      //get json content
      let response = await fetch('https://api.kanye.rest/');
      let content = await response.json();
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
