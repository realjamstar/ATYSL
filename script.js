// รายการประโยคที่คุณต้องการสุ่ม (สามารถแก้ไข/เพิ่มได้ตามใจชอบ)
const quotes = [
    "ความพยายามไม่เคยทำร้ายคนที่ตั้งใจจริง",
    "เริ่มต้นใหม่ได้เสมอในทุกๆ เช้า",
    "วันนี้เป็นวันที่ดีในการเรียนรู้สิ่งใหม่ๆ",
    "พักผ่อนบ้างนะ อย่าหักโหมจนเกินไป",
    "ก้าวเล็กๆ ในทุกๆ วัน ก็นำไปสู่ความสำเร็จได้",
    "เชื่อมั่นในตัวเอง แล้วคุณจะทำได้"
];

const quoteText = document.getElementById("quote-text");
const randomBtn = document.getElementById("random-btn");

function getRandomQuote() {
    // สุ่ม index จากอาร์เรย์ quotes
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // แสดงผลประโยคที่สุ่มได้
    quoteText.innerText = quotes[randomIndex];
}

// ผูกการทำงานปุ่มกับการกดสุ่ม
randomBtn.addEventListener("click", getRandomQuote);