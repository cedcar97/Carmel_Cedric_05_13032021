function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

liste_Articles=""
lArticles = readCookie(liste_Articles);
console.log(lArticles)


 


  
         

         
         











         











let EnvoyerInfo =document.getElementById("Envoyer");
    EnvoyerInfo.addEventListener('click',function(event){
        
        event.preventDefault();

        fetch("http://localhost:3000/api/order", {
	    method: "Post",
	headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json' 
    },
	    body: JSON.stringify(ProductInfo)
    })
    .then(function(res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function(order){




      })



      

        







    })