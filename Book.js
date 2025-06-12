document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");

  // ตั้งวันที่ขั้นต่ำเป็นวันนี้
  const bookingDate = document.getElementById("bookingDate");
  const today = new Date().toISOString().split("T")[0];
  bookingDate.setAttribute("min", today);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.phone ||
      !data.activity ||
      !data.bookingDate ||
      !data.participants
    ) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // จำลองการส่งข้อมูล (สามารถเชื่อมกับ API จริงได้)
    console.log("ส่งข้อมูลการจอง:", data);
    alert("ส่งการจองเรียบร้อยแล้ว! ขอบคุณที่ติดต่อเรา");

    form.reset();
  });
});
