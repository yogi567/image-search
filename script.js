const accesskey ="RnJ4mroNdecHp9DvPl5FDnem-ZLE9tD9ntzhToXfv0I";

const formelement=document.querySelector("form");
const inputelement=document.getElementById("search");
 const searchresult =document.querySelector(".search-result");
 const showmore=document.getElementById("show-more");


 let inputdata =" ";
 let page =1;


  async function searchimage(){
    inputdata=inputelement.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;

    const response =await fetch(url);
    const data =await response.json();

    const results =data.results;
    if(page==1)
    {
        searchresult.innerHTML=" ";
    }
     results.map((result)=>{
        const imagewrapper =document.createElement('div');
        imagewrapper.classList.add("search-result");
         const image =document.createElement('img');
         image.src=result.urls.small;


         imagewrapper.appendChild(image);
         searchresult.appendChild(imagewrapper);

     });
     page++;

     if(page>1)
     {
        showmore.style.display="block";
     }
 }

 formelement.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchimage();
 })
 showmore.addEventListener("click",()=>{
   
    searchimage();
 })