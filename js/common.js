const btnHandler =(id)=>{
  let btnAll = document.getElementsByClassName("btnAll");
  for(let item of btnAll){
    item.classList.remove("bg-btnBg", "text-white")
  };

  id.classList.add("bg-btnBg", "text-white")
};


const timeStamp=(time)=>{
  // const year = parseInt(time/31536000);
  // const remainSec3 = time%31536000;
  // const month = parseInt(remainSec3/7862400);
  // const remainSec4 = remainSec3/7862400;
  const days = parseInt(time/86400);
  const remainSec = time%86400;
  const hour = parseInt(remainSec/3600);
  const remainSec2 = remainSec%3600;
  const minutes = parseInt(remainSec2/60);
  const seconds = remainSec2%60;
  
  const result = `${days} Days ${hour} Hours ${minutes} Minutes ${seconds} Seconds Ago`
  return result;
}


