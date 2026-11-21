const API_URL = "https://dummyjson.com/products/category/laptops?limit=4";
const fallbackProducts = [
  {id:1,title:"Notebook Performance",category:"Notebook",price:3899,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"},
  {id:2,title:"Computador Gamer",category:"Computador",price:5299,image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600"},
  {id:3,title:"Headset Pro",category:"Periférico",price:349,image:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600"},
  {id:4,title:"Teclado Mecânico RGB",category:"Periférico",price:289,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600"}
];
const track = document.getElementById("productTrack");
const money = value => Number(value).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
function renderProducts(products){
  track.innerHTML = products.map(product => `
    <article class="product-card">
      <div class="product-image"><img src="${product.thumbnail || product.image}" alt="${product.title}" loading="lazy"></div>
      <div class="product-info">
        <span class="product-category">${product.category || "Tecnologia"}</span>
        <h3>${product.title}</h3>
        <div class="product-price">${money(product.price)}</div>
        <button type="button" class="interest-btn" data-product="${product.title}">Tenho interesse <i class="bi bi-arrow-right"></i></button>
      </div>
    </article>`).join("");
  document.querySelectorAll(".interest-btn").forEach(button => button.addEventListener("click",()=>{
    const toast = bootstrap.Toast.getOrCreateInstance(document.getElementById("feedbackToast"));
    toast.show();
  }));
}
async function loadProducts(){
  try{
    const response = await fetch(API_URL);
    if(!response.ok) throw new Error("Falha ao consultar API");
    const data = await response.json();
    const products = data.products.slice(0,4).map(item=>({...item,price:item.price*5.2,category:"Notebook"}));
    renderProducts(products.length ? products : fallbackProducts);
  }catch(error){
    console.warn("API indisponível; exibindo catálogo local.",error);
    renderProducts(fallbackProducts);
  }
}
loadProducts();

document.getElementById("nextProducts").addEventListener("click",()=>track.scrollBy({left:track.clientWidth*.8,behavior:"smooth"}));
document.getElementById("prevProducts").addEventListener("click",()=>track.scrollBy({left:-track.clientWidth*.8,behavior:"smooth"}));

const themeToggle=document.getElementById("themeToggle");
themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark-mode");
  const dark=document.body.classList.contains("dark-mode");
  themeToggle.innerHTML=dark?'<i class="bi bi-sun"></i>':'<i class="bi bi-moon-stars"></i>';
  themeToggle.setAttribute("aria-label",dark?"Ativar modo claro":"Ativar modo escuro");
  localStorage.setItem("tech-theme",dark?"dark":"light");
});
if(localStorage.getItem("tech-theme")==="dark"){
  document.body.classList.add("dark-mode");
  themeToggle.innerHTML='<i class="bi bi-sun"></i>';
  themeToggle.setAttribute("aria-label","Ativar modo claro");
}
document.getElementById("year").textContent=new Date().getFullYear();

// Ponto de integração com CMS: substitua API_URL pelo endpoint REST do WordPress
// (por exemplo, /wp-json/wp/v2/) quando o CMS estiver configurado.
