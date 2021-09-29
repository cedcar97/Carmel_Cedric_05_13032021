function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/; SameSite=None ; Secure";
}

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

    fetch('http://localhost:3000/api/cameras')  //récupère les données puis les insèrent à la page produits
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(cameras) { 
        
       
        
        
           
        function Cameras_Content(){
            
           
            for(let camera of cameras){
                var content = document.getElementById("cameras"); 

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

                let newDesc = document.createElement('p');
                    newDesc.classList.add('content-products-desc');
                    newDesc.innerText =camera.description;

                let newPrice = document.createElement('p');
                    newPrice.classList.add('content-products-price')
                    newPrice.innerText = camera.price*0.01 + "€";

                let newLink = document.createElement('a');
                    newLink.setAttribute("id",camera.name);
                    newLink.href = 'Produits.html';
                    newLink.addEventListener('click',function(event)
                    {    // adapte le contenu Produit à l'élément cliqué
                     
                       
                       event.preventDefault()
                        const info0 = camera.name;
                        const info1 = camera.price;
                        const info2 = camera.imageUrl;
                        const info3 = camera._id;
                        const info4 = camera.lenses;
                        
                        const info = [info0,info1,info2,info3,info4];

                        let ProductInfo=""
                        
                        createCookie(ProductInfo,info,1);
                        let Pinfo = readCookie(ProductInfo);
                       
                        console.log(Pinfo );

                        
                       

                        
                    

                        
                        
                        

                            

                    })
        
                    content.append(newLink);
                    newLink.append(newDiv);
                    newDiv.append(newName);
                    newDiv.append(newDiv2);
                    newDiv2.append(newImg);                    
                    newDiv.append(newDesc);
                    newDiv.append(newPrice);


                    


    
                    
                      
            }
            
            
        }

        window.onload(Cameras_Content(cameras));
        console.log(document.cookie)  

        
      
    })
    .catch(function(err) {
      // Une erreur est survenue
    });

    

    