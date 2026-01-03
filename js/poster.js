async function posters(id,index) {
 
   const template = 
   await fetch("poster.html")
   .then(response => response.text());
 
  
  const data  = await fetch("jason/filmes.json")
  .then(response => response.json());
  
  
  

  if (index==0)
  {
       poster=document.getElementById("poster1");
  }
  else if (index == 1)
 {
      poster=document.getElementById("poster2");
  }
  else
  {
       poster=document.getElementById("poster3");
 }

 

  const itens = await data.find(data => data.id === id   );

 const elemento =document.createElement("div");
 elemento.innerHTML=template;

 


 elemento.querySelector(".name").textContent=itens.nome;
  
  elemento.querySelector (".genero").textContent=itens.genero; 

    elemento.querySelector(".ano").textContent=itens.ano; 

   elemento.querySelector(".duracao").textContent=itens.duração; 

   elemento.querySelector(".idade").textContent=itens.idaderecomendada; 

   elemento.querySelector(".imagem").src=itens.caminhodeimagem; 

   poster.appendChild(elemento);

 

}

document.addEventListener("DOMContentLoaded",()=>{posters("1",0)


posters("7",1);

posters("20",2);
});
