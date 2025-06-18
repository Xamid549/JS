const ota = document.getElementById("ota");
const sum = document.getElementById("sum");
const box = document.getElementById("box");
const products = document.getElementById("products");
const korzinka = document.getElementById("korzinka");
const buyBtn = document.getElementById("buy-btn");

korzinka.addEventListener("click", () => {
  let narx=0;
  box.style.display = "block";
  ota.style.filter = "blur(20px)";
  tanlanganMahsulotlar.map((e,i)=>{
    narx=narx+e.price;
    const li=document.createElement("li");
    li.textContent=e.title.slice(0,25)+" : "+e.price+ "$";
    products.appendChild(li);

  });
  sum.textContent="Umumiy Summa: "+narx+ "$";
});

buyBtn.addEventListener("click", () => {
  location.reload();
});

let mahsulotlar = [];
let tanlanganMahsulotlar=[];
fetch("https://fakestoreapi.com/products?limit=30")
  .then((res) => res.json())
  .then((data) => {
    kopiyaQil(data);
    mahsulotlar=data;
  });

function kopiyaQil(malumot) {
  ota.innerHTML = "";
  malumot.map((m) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
         <img src=${m.image} alt="">
            <h2>${m.title.slice(0, 50)}</h2>
            <p>${m.description.slice(0, 90)}</p>
            <h3>${m.price} $</h3>
            <button onclick='hisobla(${m.id})'>Sotib olish</button>
        
        `;
    ota.appendChild(div);
  });
}

function hisobla(e) {
  tanlanganMahsulotlar.push(mahsulotlar.filter(m=> m.id==e)[0]);
  console.log(tanlanganMahsulotlar);
  
}
