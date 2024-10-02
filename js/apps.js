

const getCategory = async()=>{
   const url = "https://openapi.programming-hero.com/api/phero-tube/categories";
   const res = await fetch(url);
   const data = await res.json();
   displayCategory(data.categories)
};

const displayCategory = (category)=>{
 
}







getCategory();