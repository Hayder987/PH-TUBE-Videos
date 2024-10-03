

const getCategory = async()=>{
   try{
    const url = "https://openapi.programming-hero.com/api/phero-tube/categories";
   const res = await fetch(url);
   const data = await res.json();
   displayCategory(data.categories)
   }
   catch(err){
    console.log(`ERROR : ${err}`);
   }
};

const getVideos = async()=>{
    try{
      const url = "https://openapi.programming-hero.com/api/phero-tube/videos" ;
      const res = await fetch(url);
      const data = await res.json();
      displayVideo(data.videos);
    }
    catch(err){
        console.log(`ERROR : ${err}`);
    }
   
 };

const displayCatVideos = async(id)=>{
  try{
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}` ;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.category)
    displayVideo(data.category)
  }
  catch(err){
      console.log(`ERROR : ${err}`);
  }
};

const displayCategory = (category)=>{
   const categorySection = document.getElementById("categorySection");
   category.map(data =>{
     let button = document.createElement("button");
     button.classList.add("px-6","btnAll", "py-3", "rounded-xl", "border-2","border-gray-300","text-xl", "font-bold");
     button.innerText = data.category;
     button.setAttribute("id", `btn-${data.category_id}`);
     
     button.addEventListener("click", (e)=>{
      btnHandler(e.target);
      displayCatVideos(data.category_id)
     });
     
     
     categorySection.appendChild(button);
   });  
}

const displayVideo = (videos)=>{
  const videoSection = document.getElementById("videoSection");
  videoSection.innerHTML = "";
   videos.map(item =>{
    let div = document.createElement("div");
    div.classList.add("p-2");
    div.innerHTML = `
      <div class= "relative">
      <img class="h-[200px] w-full object-cover" src=${item.thumbnail}>
      ${item.others.posted_date.length === 0 ? "" : 
        `<div class= "absolute bottom-6 right-2 bg-black text-white text-xs p-2 rounded-lg">
        <p>${timeStamp(item.others.posted_date)}</p>
      </div>`
      };
      
      </div>
      <div class= "mt-4 flex items-center gap-4">
        <div>
           <img class="h-10 w-10 rounded-full object-cover" src=${item.authors[0].profile_picture} >
        </div>
        <div>
          <h2 class="text-xl font-bold">${item.title}</h2>
        </div>
      </div>
      <div class="ml-14 flex items-center gap-10 mb-3">
        <p>${item.authors[0].profile_name}</p>
         ${item.authors[0].verified === true ? `<span><img class="w-5 h-5" src="./assets/icon2.png"></span>` : ""}
        
      </div>
      <p class="ml-14">${item.others.views} Views</p>
    `

    videoSection.appendChild(div);
   })
  
  
}







getCategory();
getVideos();