// เคล็ดลับการทำฟาร์ม
const tips = [
  {
    icon: "thermometer",
    title: "การจัดการอุณหภูมิ",
    description: "เรียนรู้วิธีการควบคุมอุณหภูมิในโรงเรือนและการปรับสภาพแวดล้อมให้เหมาะสมกับพืชแต่ละชนิด",
    color: "bg-sage",
  },
  {
    icon: "leaf",
    title: "ปุ่ยอินทรีย์",
    description: "วิธีการทำปุ่ยอินทรีย์เองที่บ้าน การหมัก และการใช้วัสดุเหลือทิ้งจากครัวเรือนให้เกิดประโยชน์",
    color: "bg-sandy",
  },
  {
    icon: "calendar",
    title: "ปฏิทินการปลูก",
    description: "การวางแผนปฏิทินการปลูกพืชให้เหมาะสมกับฤดูกาล เพื่อให้ได้ผลผลิตที่ดีตลอดปี",
    color: "bg-forest",
  },
  {
    icon: "bug",
    title: "การป้องกันศัตรูพืช",
    description: "สูตรยาฆ่าแมลงธรรมชาติ และวิธีการป้องกันโรคพืชโดยไม่ต้องใช้สารเคมี",
    color: "bg-saddle",
  },
  {
    icon: "droplet",
    title: "การประหยัดน้ำ",
    description: "เทคนิคการใช้น้ำอย่างมีประสิทธิภาพ การเก็บน้ำฝน และระบบการรีไซเคิลน้ำในฟาร์ม",
    color: "bg-sage",
  },
  {
    icon: "dollar-sign",
    title: "การบริหารต้นทุน",
    description: "วิธีการลดต้นทุนการผลิต การวางแผนการลงทุน และการหาตลาดสำหรับผลผลิต",
    color: "bg-sandy",
  },
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

// กิจกรรมการทำฟาร์ม
const activities = [
  {
    title: "การเตรียมดิน",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "เรียนรู้เทคนิคการเตรียมดินที่ถูกต้อง การไถ การพรวน และการปรับปรุงคุณภาพดินให้เหมาะสมกับการปลูกพืช",
    points: ["การวิเคราะห์คุณภาพดิน", "การไถและพรวนดิน", "การใส่ปุ่ยอินทรีย์"],
  },
  {
    title: "การปลูกเมล็ดพันธุ์",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "เทคนิคการเลือกเมล็ดพันธุ์คุณภาพ การปลูก และการดูแลต้นกล้าให้เติบโตอย่างแข็งแรง",
    points: ["การเลือกเมล็ดพันธุ์", "การคำนวณระยะปลูก", "การดูแลต้นกล้า"],
  },
  {
    title: "ระบบการให้น้ำ",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "การออกแบบและจัดการระบบการให้น้ำที่มีประสิทธิภาพ ประหยัดน้ำ และเหมาะสมกับพืชแต่ละชนิด",
    points: ["ระบบน้ำหยด", "การจัดการน้ำฝน", "การตรวจสอบความชื้น"],
  },
  {
    title: "การจัดการศัตรูพืช",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "วิธีการป้องกันและกำจัดศัตรูพืชอย่างปลอดภัย โดยใช้วิธีธรรมชาติและเป็นมิตรกับสิ่งแวดล้อม",
    points: ["การใช้พืชสมุนไพรไล่แมลง", "การเพาะเลี้ยงแมลงตัวห้ำ", "การหมุนเวียนพืช"],
  },
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

lucide.createIcons();
