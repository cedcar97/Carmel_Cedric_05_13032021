

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


function createCookie(name,value,days) {
  if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/; SameSite=None ; Secure";
}


lArticles = readCookie("liste_Articles");

let products=[]
let tableprix=[]
let videCookie=[]

const word = lArticles.split(",")
         let Pname= word[0];
         let Pprice= word[1];
         let PimageUrl = word[2];
         let Pid = word[3];
         let Plense = word[4];

         infosarticle= [Pname,Pprice,PimageUrl,Pid,Plense]

         createCookie(Pname+Plense, infosarticle,1)


         fetch('http://localhost:3000/api/cameras')  //récupère les données puis les insèrent à la page produits
         .then(function(res) {
           if (res.ok) {
             return res.json();
           }
         })
         .then(function(cameras) { 

          for (camera of cameras){
            for(lense of camera.lenses){
              ProductCookie=readCookie(camera.name+lense)

              if (ProductCookie!= null){

                products.push(camera._id)
                
                tableprix.push(camera.price*0.01)
                
                videCookie.push(camera.name+lense)
               

                var content = document.getElementById("Votre_Panier"); 

                let newDiv = document.createElement('div');
                    newDiv.classList.add('content-products');

                let newDiv2 = document.createElement('div');
                    newDiv2.classList.add('content-products-cadre');


                let newImg = document.createElement('img');
                    newImg.classList.add('content-products-cadre-img');
                    newImg.src = camera.imageUrl;

                let newName = document.createElement('h3');
                    newName.classList.add('content-products-tittle');
                    newName.innerText = camera.name;

                let newPrice = document.createElement('p');
                    newPrice.classList.add('content-products-price')
                    newPrice.innerText = camera.price*0.01 + "€";

                    
                    content.append(newDiv);
                    newDiv.append(newName);
                    newDiv.append(newDiv2);
                    newDiv2.append(newImg);                    
                    newDiv.append(newPrice);
              }
            }       
          }

          const reducer = (previousValue, currentValue) => previousValue + currentValue;
          var prixTotal=tableprix.reduce(reducer)

          let Total = document.createElement('p');
          Total.classList.add('content-products-price')
          Total.innerText = prixTotal + "€";

          content.append(Total)
         })

         
            
let EnvoyerInfo =document.getElementById("Envoyer");
    EnvoyerInfo.addEventListener('click',function(event){
      event.preventDefault()
      let contact = {
        lastName:document.forms["contact"].lastname.value,
        firstName:document.forms["contact"].firstname.value,
        city:document.forms["contact"].city.value,
        address:document.forms["contact"].address.value,
        email:document.forms["contact"].email.value,  
      }
  decodedEmail=contact.email.split(/[@\\.]/)
  console.log(decodedEmail)
if (decodedEmail.length==3){

     
        
        let data= {
          contact,
          products
        }
        console.log(data)

        fetch("http://localhost:3000/api/cameras/order", {
	    method: "Post",
	headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json' 
    },
	    body: JSON.stringify(data)
    })
    .then(function(res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function(){

        for (cookie of videCookie){
            createCookie(cookie,"",1)
        }
        document.forms["contact"].lastname.value=""
        document.forms["contact"].firstname.value=""
        document.forms["contact"].city.value=""
        document.forms["contact"].address.value=""
        document.forms["contact"].email.value=""

        alert("Merci pour votre commande")

      })
    }

    else{
      alert("email invalide, ou vous n'avez pas complété les champs")
      document.forms["contact"].lastname.value=""
        document.forms["contact"].firstname.value=""
        document.forms["contact"].city.value=""
        document.forms["contact"].address.value=""
        document.forms["contact"].email.value=""
    }

    })
  