const WHATSAPP_NUMBER="966532921615";
document.getElementById("year").textContent=new Date().getFullYear();
const select=document.getElementById("serviceSelect");
document.querySelectorAll("[data-service]").forEach(a=>a.addEventListener("click",()=>select.value=a.dataset.service));
document.getElementById("bookingForm").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const msg=["مرحباً مركز النطاق العربي 6، أرغب في حجز موعد / الاستفسار.","",`الاسم: ${d.get("name")}`,`رقم التواصل: ${d.get("phone")}`,`السيارة: ${d.get("car")}`,`الخدمة: ${d.get("service")}`,`التفاصيل: ${d.get("details")||"لا توجد تفاصيل إضافية"}`].join("\n");window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank","noopener");});
const menu=document.getElementById("menu"),nav=document.getElementById("nav");menu.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
