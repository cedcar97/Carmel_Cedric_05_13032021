
        
        
        
        
       let  ProductInfo = document.cookie;
       


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

        readCookie(ProductInfo)
        console.log(document.cookie)
         
        
        const word = ProductInfo.split(",")
         let Pname= word[0];
         let Pprice= word[1];
         let PimageUrl = word[2];
         let Pid = word[3];
         let Plense1 = word[4];
         let Plense2 = word[5];
         let Plense3 = word[6];


       

   
         let articles = [];

         
         
        
                        let Plenses = [Plense1,Plense2,Plense3];

                        let Div = document.createElement('div');
                            Div.classList.add('content-products');

                        let Div2 = document.createElement('div');
                            Div2.classList.add('content-products-cadre');


                        let Img = document.createElement('img');
                            Img.classList.add('content-products-img');
                            Img.src = PimageUrl;


                        let Name = document.createElement('h2');
                            Name.classList.add('content-products-tittle');
                            Name.innerText = Pname;

                            let Price = document.createElement('p');
                            Price.classList.add('content-products-price')
                            Price.innerText = Pprice*0.01+"€";


                            var contentp = document.getElementById("product");
                            contentp.append(Div);                          
                            Div.append(Name);
                            Div.append(Div2);
                            Div2.append(Img);                    
                            Div.append(Price);
                            
                            
                            let Menu = document.getElementsByClassName(" dropdown-item")
                            let tableMenu = Array.from(Menu)
                            let i=0;
                            
                                
                                
                                tableMenu.forEach(function(){
                                    tableMenu[i].append(Plenses[i]);
                                    tableMenu[i].addEventListener("click",function(event){
                                     
                                     let n=tableMenu.indexOf(event.target)
                                     
                                     let lenseResult = document.getElementById("dropdownMenuButton");
                                            lenseResult.innerText = Plenses[n];
                                            article=[Pname,Pprice,PimageUrl,Pid,Plenses[n]];
                                            
                                            let liste_Articles ="";
                                            
                                            
                                            
                                            
                                            
                                            
                                           

                                            
                                            if(articles.length==0){
                                                articles.push(article)
                                                createCookie(liste_Articles,articles,1)
                                               

                                            }
                                            else{
                                                let c=0;
                                                for(a of articles){
                                                    
                                                    if(JSON.stringify(article)!=JSON.stringify(a)){
                                                        c++;

                                                        if(c==articles.length){
                                                        articles.push(article)
                                                        createCookie(liste_Articles,articles,1)
                                                        
                                                       
                                                       
                                                       
                                                         

                                                        
                                                        }
                                                        else{

                                                        }
                                                       
                                                    }
                                                    else{
                                                        
                                                    }

                                                    
                                                
                                                
    
                                                }
                                                
                                                
                                            };
                                           

                                    })
                                    
                                        
                                        if(Plenses[i]==undefined){
                                            tableMenu[i].remove();
                                            
                                        }
                                        else{
                                            
                                        }
                                        i++;
                                        
                                        
                                         })

                                         
                                         let  bt_VotrePanier = document.createElement("button");
                            
                                         bt_VotrePanier.innerText = "Ajouter à votre panier";
                                         bt_VotrePanier.addEventListener('click',function(event){
                                             
                                             
                                            
                                             
                                            if(articles!=""){
                                                document.location.href="Votre_Panier.html"

                                                
                                            }
                                            else{
                                                alert("Choissisez la taille de la lentille")
                                            }
                                            
                                         
                                             
                                         })
                                         
             
                                         Div.append(bt_VotrePanier);
                                         
             
                                     
                                
                                
                            

                           
                                
                           
                                                                        
                                    
                                    


                                       
                                            
                                           
                                    
                                    
                            
                            

                            

                        

                            


                            

                           




         



    

                        

                       