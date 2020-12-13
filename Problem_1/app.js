document.getElementById("btn-1").addEventListener("click",onLoad);
var table=document.getElementById("table");

function onLoad(){
        
         var body=document.querySelector("body");  
         
        
 for(let i=9;i>4;i--){
         let xhr= new XMLHttpRequest();
         var data=[];
         var rates=[];
         var t=document.createElement("table");
         body.appendChild(t);
         t.setAttribute("class","content")

            var url=`https://api.exchangeratesapi.io/2020-${i}-12`;
            console.log(url);
            xhr.open("GET",url,true);
            xhr.send();
             xhr.onload=function(){
                    data=JSON.parse(xhr.responseText);
                  
                    if(xhr.status=="200" && xhr.readyState==4){
                        rates=data.rates;
                        console.log(rates);
                        var aud=rates.AUD;
                        var bgn=rates.BGN;
                        var brl=rates.BRL;
                        var cad=rates.CAD;
                        var chf=rates.CHF;
                
                        var html="";
                        html+=
                        `
                        <tr class="row">
                                <td>Curreny</td>
                                <td>Price</td>
                        </tr>
                        <tr class="row">
                                <td>AUD</td>
                                <td>${aud}</td>
                        </tr>
                        <tr class="row">
                                <td>BGN</td>
                                <td>${bgn}</td>
                        </tr>
                        <tr class="row">
                                <td>BRL</td>
                                <td>${brl}</td>
                        </tr>
                        <tr class="row">
                                <td>CAD</td>
                                <td>${cad}</td>
                        </tr>
                        <tr class="row">
                                <td>CHF</td>
                                <td>${chf}</td>
                        </tr>`;
                       
                        t.innerHTML=html;

                        
                    }
                   
                    
                    
         }
         
        }
        

         

}