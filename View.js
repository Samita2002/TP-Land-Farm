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
  // Check if image exists, otherwise use placeholder
  const imageHtml = activity.image 
    ? `<img src="${activity.image}" alt="${activity.title}">`
    : `
      <div class="activity-image-placeholder">
        <i data-lucide="image"></i>
        <p>Image Not Available</p>
      </div>
    `;

  card.innerHTML = `
    ${imageHtml}
    <div class="card-content">
      <h3>${activity.title}</h3>
      <p>${activity.description}</p>
      <ul>${activity.points.map(p => `<li><span class="check-icon">✔</span> ${p}</li>`).join("")}</ul>
    </div>
  `;
  activityContainer.appendChild(card);
});


// Trends Features - styled like harvest section list items
const trendFeatures = [
  { title: "การเติบโตของตลาด", description: "ตลาดผลิตภัณฑ์อินทรีย์เติบโต 8-10% ต่อปี" },
  { title: "นโยบายภาครัฐ", description: "สนับสนุนการเกษตรอินทรีย์และการรับรองมาตรฐาน" },
  { title: "เทคโนโลยีสมัยใหม่", description: "AI และ IoT ช่วยเพิ่มประสิทธิภาพการเกษตรอินทรีย์" },
];

// Trend Cards
const trendCards = [
  { title: "เกษตรดิจิทัล", description: "การใช้เทคโนโลยี AI และ IoT เพื่อเพิ่มประสิทธิภาพการผลิต", growth: "เติบโต +25% ต่อปี", gradient: "bg-gradient-green", textColor: "text-green-600", icon: "🤖" },
  { title: "เกษตรเมือง", description: "การปลูกผักอินทรีย์ในเมืองและพื้นที่จำกัด", growth: "เติบโต +30% ต่อปี", gradient: "bg-gradient-blue", textColor: "text-blue-600", icon: "🏢" },
  { title: "อาหารฟังก์ชัน", description: "ผลิตภัณฑ์อินทรีย์ที่เพิ่มคุณค่าทางโภชนาการ", growth: "เติบโต +20% ต่อปี", gradient: "bg-gradient-yellow", textColor: "text-yellow-600", icon: "❤️" },
];

// Populate trend features in harvest-style format
const featureContainer = document.getElementById("trendFeatures");
trendFeatures.forEach((feature) => {
  const li = document.createElement("li");
  li.innerHTML = `<span class="check-icon">✔</span> <strong>${feature.title}:</strong> ${feature.description}`;
  featureContainer.appendChild(li);
});

// Populate trend cards
const cardContainer = document.getElementById("trendCards");
trendCards.forEach((card) => {
  const div = document.createElement("div");
  div.className = `card ${card.gradient}`;
  div.innerHTML = `
    <div class="trend-card-header">
      <h3 class="trend-card-title ${card.textColor}">${card.title}</h3>
      <span class="trend-card-icon">${card.icon}</span>
    </div>
    <p class="trend-card-description">${card.description}</p>
    <div class="trend-card-growth ${card.textColor}">${card.growth}</div>
  `;
  cardContainer.appendChild(div);
});

// Initialize Lucide icons
lucide.createIcons();