
    let request=new XMLHttpRequest();
    request.open("GET","https://rest-countries-api-techieegy.herokuapp.com/v1/all",true);
    request.send();
    request.onload=()=>{
        let data=JSON.parse(request.response);
        data.forEach((item)=>{
                console.log(data);


                const maincontainer=document.createElement("div");
                document.querySelector('body').appendChild(maincontainer);
                maincontainer.className="maincontainer";
                const container=document.createElement("div");
                container.className="container";
                maincontainer.appendChild(container);
        //        
                const name=document.createElement('h4');
                name.innerHTML=`${item.name}`;
                name.className="name";
                container.appendChild(name);
                const images=document.createElement("img");
                images.setAttribute("src",item.flags[0]);
                images.className="images";
                container.appendChild(images);
                const capital=document.createElement("p");
                capital.innerHTML=`Capital:&nbsp;&nbsp;`;
                const p1=document.createElement("span");
                p1.innerHTML=`${item.capital}`;
                capital.appendChild(p1);
                p1.className="p1";
                capital.className="capital";
                container.appendChild(capital);
        
                const countrycode=document.createElement('p')
                countrycode.innerHTML=`Country Codes:&nbsp;&nbsp;`;
                countrycode.className="countrycode";
                const p2=document.createElement("span");
                p2.innerHTML=`${item.alpha2Code[0]}`;
                countrycode.appendChild(p2);
                p2.className="p2";
                container.appendChild(countrycode);
        
                const Region=document.createElement('p');
                Region.innerHTML=`Region:&nbsp;&nbsp;`;
                Region.className="region";
                const p3=document.createElement("span");
                p3.innerHTML=`${item.region}`;
                Region.appendChild(p3);
                p3.className="p3";
                container.appendChild(Region);
        
                const latlng=document.createElement("p");
                latlng.innerHTML=`Latlng:&nbsp;&nbsp;`;
                latlng.className="lating";
                const p4=document.createElement("span");
                p4.innerHTML=`${item.latlng}`;
                latlng.appendChild(p4);
                p4.className="p4";
                container.appendChild(latlng);       
        
      if(item.currencies){
       
        const currencycode=document.createElement("p");
        currencycode.className="currencycode";
        currencycode.innerHTML=`Currency-Code:&nbsp;&nbsp;`;
        const p5=document.createElement("span");
        p5.innerHTML=`${item.currencies[0].code}`;
        currencycode.appendChild(p5);
        p5.className="p5";
        container.appendChild(currencycode);

        const currencyname=document.createElement("p");
        currencyname.className="currencyname";
        currencyname.innerHTML=`Currency-Name:&nbsp;&nbsp;`;
        const p6=document.createElement("span");
        p6.innerHTML=`${item.currencies[0].name}`;
        currencyname.appendChild(p6);
        p6.className="p6";
        container.appendChild(currencyname);

        const currencysymbol=document.createElement("p");
        currencysymbol.className="currencysymbol";
        currencysymbol.innerHTML=`Currency-Symbol:`;
        const p7=document.createElement("span");
        p7.innerHTML=`&nbsp;&nbsp;${item.currencies[0].symbol}`;
        currencysymbol.appendChild(p7);
        p7.className="p7";
        container.appendChild(currencysymbol);
        

 

        
        
      }
    


         

        else{
                const currencycode=document.createElement("p");
                currencycode.className="currencycode";
                currencycode.innerHTML="Currency-Code: Empty";
                container.appendChild(currencycode);

                const currencyname=document.createElement("p");
                currencyname.className="currencyname";
                currencyname.innerHTML="Currency-Name: Empty";
              
                container.appendChild(currencyname);
        
                const currencysymbol=document.createElement("p");
                currencysymbol.className="currencysymbol";
                currencysymbol.innerHTML="Currency-Symbol: Empty";
               
                container.appendChild(currencysymbol);

               
              }
         
     
    });

    



     
    
    }

