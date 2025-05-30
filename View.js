// Tips
const tips = [
  { icon: "thermometer", title: "การจัดการอุณหภูมิ", description: "เรียนรู้วิธีการควบคุมอุณหภูมิในโรงเรือนและการปรับสภาพแวดล้อมให้เหมาะสมกับพืชแต่ละชนิด", color: "bg-sage" },
  { icon: "leaf", title: "ปุ่ยอินทรีย์", description: "วิธีการทำปุ่ยอินทรีย์เองที่บ้าน การหมัก และการใช้วัสดุเหลือทิ้งจากครัวเรือนให้เกิดประโยชน์", color: "bg-sandy" },
  { icon: "calendar", title: "ปฏิทินการปลูก", description: "การวางแผนปฏิทินการปลูกพืชให้เหมาะสมกับฤดูกาล เพื่อให้ได้ผลผลิตที่ดีตลอดปี", color: "bg-forest" },
  { icon: "bug", title: "การป้องกันศัตรูพืช", description: "สูตรยาฆ่าแมลงธรรมชาติ และวิธีการป้องกันโรคพืชโดยไม่ต้องใช้สารเคมี", color: "bg-saddle" },
  { icon: "droplet", title: "การประหยัดน้ำ", description: "เทคนิคการใช้น้ำอย่างมีประสิทธิภาพ การเก็บน้ำฝน และระบบการรีไซเคิลน้ำในฟาร์ม", color: "bg-sage" },
  { icon: "dollar-sign", title: "การบริหารต้นทุน", description: "วิธีการลดต้นทุนการผลิต การวางแผนการลงทุน และการหาตลาดสำหรับผลผลิต", color: "bg-sandy" },
];

const tipContainer = document.getElementById("tips-container");
tips.forEach((tip) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="icon-box ${tip.color}">
      <i data-lucide="${tip.icon}" class="lucide"></i>
    </div>
    <h3 class="card-title">${tip.title}</h3>
    <p class="card-desc">${tip.description}</p>
  `;
  tipContainer.appendChild(card);
});

// Activities
const activities = [
  { title: "การเตรียมดิน", image: "backup/075.jpg", description: "เรียนรู้เทคนิคการเตรียมดินที่ถูกต้อง...", points: ["การวิเคราะห์คุณภาพดิน", "การไถและพรวนดิน", "การใส่ปุ่ยอินทรีย์"] },
  { title: "การปลูกเมล็ดพันธุ์", image: "backup/294.jpg", description: "เทคนิคการเลือกเมล็ดพันธุ์คุณภาพ...", points: ["การเลือกเมล็ดพันธุ์", "การคำนวณระยะปลูก", "การดูแลต้นกล้า"] },
  { title: "ระบบการให้น้ำ", image: "backup/183.jpg", description: "การออกแบบและจัดการระบบการให้น้ำที่มีประสิทธิภาพ...", points: ["ระบบน้ำหยด", "การจัดการน้ำฝน", "การตรวจสอบความชื้น"] },
  { title: "การจัดการศัตรูพืช", image: "backup/411.jpg", description: "วิธีการป้องกันและกำจัดศัตรูพืชอย่างปลอดภัย...", points: ["การใช้พืชสมุนไพรไล่แมลง", "การเพาะเลี้ยงแมลงตัวห้ำ", "การหมุนเวียนพืช"] },
];

const activityContainer = document.getElementById("activities-list");
activities.forEach((activity) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${activity.image}" alt="${activity.title}">
    <div class="card-content">
      <h3>${activity.title}</h3>
      <p>${activity.description}</p>
      <ul>${activity.points.map(p => `<li><span class="check-icon">✔</span> ${p}</li>`).join("")}</ul>
    </div>
  `;
  activityContainer.appendChild(card);
});

// Trends
const trendFeatures = [
  { title: "การเติบโตของตลาด", description: "ตลาดผลิตภัณฑ์อินทรีย์เติบโต 8-10% ต่อปี"},
  { title: "นโยบายภาครัฐ", description: "สนับสนุนการเกษตรอินทรีย์และการรับรองมาตรฐาน" },
  { title: "เทคโนโลยีสมัยใหม่", description: "AI และ IoT ช่วยเพิ่มประสิทธิภาพการเกษตรอินทรีย์" },
];

const trendCards = [
  { title: "เกษตรดิจิทัล", description: "การใช้เทคโนโลยี AI และ IoT...", growth: "เติบโต +25% ต่อปี", gradient: "from-green-50 to-green-100", textColor: "text-green-600", icon: "🤖" },
  { title: "เกษตรเมือง", description: "การปลูกผักอินทรีย์ในเมือง...", growth: "เติบโต +30% ต่อปี", gradient: "from-blue-50 to-blue-100", textColor: "text-blue-600", icon: "🏢" },
  { title: "อาหาร", description: "ผลิตภัณฑ์อินทรีย์ที่เพิ่มคุณค่าทางโภชนาการ", growth: "เติบโต +20% ต่อปี", gradient: "from-yellow-50 to-yellow-100", textColor: "text-yellow-600", icon: "❤️" },
];

const featureContainer = document.getElementById("trendFeatures");
trendFeatures.forEach((feature) => {
  const item = document.createElement("div");
  item.className = "flex items-start space-x-4";
  item.innerHTML = `
    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
      <svg class="lucide lucide-check text-green-500 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
    </div>
    <div>
      <h4 class="font-semibold text-gray-900">${feature.title}</h4>
      <p class="text-gray-600">${feature.description}</p>
    </div>
  `;
  featureContainer?.appendChild(item);
});

const cardContainer = document.getElementById("trendCards");
trendCards.forEach((card) => {
  const div = document.createElement("div");
  div.className = `card bg-gradient-to-br ${card.gradient}`;
  div.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold">${card.title}</h3>
      <span class="text-xl">${card.icon}</span>
    </div>
    <p class="text-gray-600 mb-4">${card.description}</p>
    <div class="text-sm ${card.textColor} font-medium">${card.growth}</div>
  `;
  cardContainer?.appendChild(div);
});

lucide.createIcons();
