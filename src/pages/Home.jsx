
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    'backup/271.jpg',
    'backup/008.jpg',
    'backup/256.jpg',
    'backup/272.jpg',
    'backup/022.jpg'
  ]

  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true
      })
    }

    // Initialize VanillaTilt
    if (window.VanillaTilt) {
      window.VanillaTilt.init(document.querySelectorAll('.tilt-effect'), {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5
      })
    }

    // Auto slide
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div>
      <Header />
      
      <section className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide}')` }}
          />
        ))}
        
        <div className="hero-content" data-aos="fade-up">
          <h2>ชมสวนผัก สัมผัสกับธรรมชาติ</h2>
          <h3>ได้ตลอดทุกช่วงเวลา ทุกฤดูกาล ตลอดทั้งปี</h3>
          <h3>ให้คุณถ่ายรูปเช็คอิน ได้ไม่มีเบื่อ</h3>
        </div>
        
        <div className="hero-controls">
          <div className="arrows">
            <a href="#" className="arrow-left" onClick={(e) => { e.preventDefault(); prevSlide(); }}></a>
            <a href="#" className="arrow-right" onClick={(e) => { e.preventDefault(); nextSlide(); }}></a>
          </div>
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                data-index={index}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="cta-container">
          <Link to="/view" className="cta-button tilt-effect">VIEW MORE</Link>
        </div>
      </section>

      <section className="about-section">
        <div className="container" data-aos="fade-down">
          <div className="about-content-wrapper" data-aos="fade-down">
            <div className="about-image-container" data-aos="fade-down">
              <img
                alt="A lush green cornfield under a blue sky with some clouds"
                className="about-image"
                data-aos="fade-down"
                src="backup/249.jpg"
              />
            </div>
            <div className="about-text-container">
              <h1 className="about-title" data-aos="fade-down">
                เกี่ยวกับ ทีพี แลนด์ ฟาร์ม
              </h1>
              <p className="about-description" data-aos="fade-down">
                ทีพี แลนด์ ฟาร์ม เป็นฟาร์มเกษตรอินทรีย์ที่มุ่งเน้นการปลูกพืชผักปลอดสารพิษ
                ด้วยความใส่ใจในทุกๆขั้นตอนการผลิต
                เพื่อให้ได้ผลผลิตที่มีคุณภาพสูงสุด
                และปลอดภัยต่อผู้บริโภค เรามีประสบการณ์ในการทำเกษตรอินทรีย์มากกว่า
                10 ปี
                และเป็นผู้นำเบิกในการนำเทคโนโลยีสมัยใหม่มาใช้ในการเกษตร
                เพื่อพัฒนาผลผลิตให้มีคุณภาพและเป็นมิตรกับสิ่งแวดล้อม
              </p>
              <div className="about-vision" data-aos="fade-down">
                <h2 className="about-subtitle" data-aos="fade-down">วิสัยทัศน์</h2>
                <p data-aos="fade-down">
                  เราต้องการสร้างระบบเกษตรที่ยั่งยืนและเป็นมิตรกับสิ่งแวดล้อม
                  เพื่อตอบการที่ปลอดภัยและมีคุณค่าทางโภชนาการสูง
                </p>
              </div>
              <div className="about-mission" data-aos="fade-down">
                <h2 className="about-subtitle" data-aos="fade-down">พันธกิจ</h2>
                <p data-aos="fade-down">
                  ส่งเสริมการทำเกษตรอินทรีย์และการบริโภคอาหารปลอดสารพิษ
                  เพื่อสุขภาพที่ดีของผู้บริโภคและสิ่งแวดล้อมที่ยั่งยืน
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="deer deer-section">
        <h2 className="section-title" data-aos="fade-up">Deer</h2>
        <div className="category-grid">
          <div className="category-item">
            <img src="backup/400.jpg" alt="Deer" />
            <h3 data-aos="fade-up">กวางที่เกิดและมีเส้นขนที่แลดูเรียบ น่ารัก</h3>
            <p data-aos="fade-up">
              ลูกกวางตัวเล็กยืนอยู่ใกล้กับก้อนหินขนาดใหญ่ในคอกที่พื้นเป็นดินแห้ง
            </p>
          </div>
          <div className="category-item" data-aos-delay="100">
            <img src="backup/018.jpg" alt="Deer" />
            <h3 data-aos="fade-up">หัวข้อ</h3>
            <p data-aos="fade-up">
              กวางจำนวนมากรวมกันในคอก มีรั้วลวดล้อมรอบ และมีหญ้าสดปูอยู่ให้กิน
            </p>
          </div>
          <div className="category-item" data-aos-delay="200">
            <img src="backup/403.jpg" alt="Deer" />
            <h3 data-aos="fade-up">หัวข้อ</h3>
            <p data-aos="fade-up">
              กวางหลายตัวกำลังกินพืชหรือหญ้าเขียว ๆ อยู่ในคอกที่มีโรงเรือนเล็ก ๆ
            </p>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="container">
          <h1 className="section-title" data-aos="fade-up">ผลิตภัณฑ์จากฟาร์ม</h1>
          <p className="section-subtitle" data-aos="fade-up">
            ผลิตภัณฑ์ออร์แกนิคคุณภาพสูง ปลูกด้วยความพิถีพิถัน
          </p>
          <div className="product-grid">
            <div className="product-card">
              <img src="backup/200.jpg" alt="ผักกาดหอมออร์แกนิค" />
              <div className="card-content">
                <h2 data-aos="fade-up">ผักกาดหอมออร์แกนิค</h2>
                <p data-aos="fade-up">ผักกาดหอมสดปลูกแบบออร์แกนิค ไร้สารเคมี</p>
              </div>
            </div>
            <div className="product-card">
              <img src="backup/189.jpg" alt="ไมโครกรีน รวมชนิด" />
              <div className="card-content">
                <h2 data-aos="fade-up">ไมโครกรีน รวมชนิด</h2>
                <p data-aos="fade-up">
                  ไมโครกรีนรวมหลายชนิด อุดมไปด้วยวิตามินและแร่ธาตุ
                </p>
              </div>
            </div>
            <div className="product-card">
              <img src="backup/190.jpg" alt="เมล็ดพันธุ์ผักออร์แกนิค" />
              <div className="card-content">
                <h2 data-aos="fade-up">เมล็ดพันธุ์ผักออร์แกนิค</h2>
                <p data-aos="fade-up">
                  เมล็ดพันธุ์ผักสำหรับปลูกเองที่บ้าน รับรองคุณภาพ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fruit-section">
        <div className="container">
          <div className="grid">
            <div className="card">
              <img
                data-aos="fade-up"
                src="backup/289.jpg"
                alt="Durian fruit hanging on a tree"
              />
              <h2>ทุเรียนบนต้น</h2>
              <p>ทุเรียนพันธุ์ดี แข็งแรง ให้ผลผลิตสูง</p>
            </div>

            <div className="card">
              <img data-aos="fade-up" src="backup/023.jpg" alt="Durian buds" />
              <h2>ดอกทุเรียน</h2>
              <p>ดอกทุเรียนก่อนการผสมเกสร</p>
            </div>

            <div className="card">
              <img data-aos="fade-up" src="backup/395.jpg" alt="Durian fruit" />
              <h2>ผลทุเรียน</h2>
              <p>ทุเรียนขนาดใหญ่ พร้อมเก็บเกี่ยว</p>
            </div>

            <div className="card">
              <img data-aos="fade-up" src="backup/194.jpg" alt="Strawberry farm" />
              <h2>สวนสตรอว์เบอร์รี</h2>
              <p>สวนปลูกแบบยกแปลง ให้ผลดี</p>
            </div>

            <div className="card">
              <img
                data-aos="fade-up"
                src="backup/398.jpg"
                alt="Strawberries on raised beds"
              />
              <h2>แปลงสตรอว์เบอร์รี</h2>
              <p>ดูแลด้วยระบบน้ำหยดแบบประหยัด</p>
            </div>

            <div className="card">
              <img
                data-aos="fade-up"
                src="backup/191.jpg"
                alt="Ripe strawberries"
              />
              <h2>สตรอว์เบอร์รีสุก</h2>
              <p>ผลสดแดงฉ่ำ พร้อมรับประทาน</p>
            </div>
          </div>
        </div>
      </section>

      <section className="garden-section">
        <div className="container">
          <h1 className="section-title" data-aos="fade-up">สวนผัก</h1>
          <div className="content-grid">
            <div className="image-grid">
              <img
                data-aos="flip-right"
                src="backup/286.jpg"
                alt="Field of yellow flowers"
              />
              <img
                data-aos="flip-right"
                src="backup/274.jpg"
                alt="Colorful garden"
              />
              <img
                data-aos="flip-right"
                src="backup/275.jpg"
                alt="Flower archway"
              />
              <img
                data-aos="flip-right"
                src="backup/277.jpg"
                alt="Leafy vegetables"
              />
              <img
                data-aos="flip-right"
                src="backup/279.jpg"
                alt="Hydroponic vegetables"
              />
              <img
                data-aos="flip-right"
                src="backup/257.jpg"
                alt="Watering plants"
              />
            </div>
            <div className="text-column">
              <p className="description">เพิ่มข้อความในส่วนเนื้อหาเล็กน้อย</p>
              <img data-aos="flip-right" src="backup/288.jpg" alt="Greenhouse" />
            </div>
          </div>
        </div>
      </section>

      <section className="fish-section">
        <div className="header">
          <h1 data-aos="fade-up">ปลา</h1>
        </div>
        <div className="fish-container">
          <div className="fish-card">
            <img data-aos="fade-up" src="backup/245.jpg" alt="Fish in water" />
            <div className="card-text">
              <h2>เพิ่มหัวเรื่องย่อย</h2>
              <p>ส่วนเนื้อหาเล็กน้อย</p>
            </div>
          </div>
          <div className="fish-card">
            <img data-aos="fade-up" src="backup/248.jpg" alt="Fishing in river" />
            <div className="card-text">
              <h2>เพิ่มหัวเรื่องย่อย</h2>
              <p>ส่วนเนื้อหาเล็กน้อย</p>
            </div>
          </div>
          <div className="fish-card">
            <img data-aos="fade-up" src="backup/282.jpg" alt="Fish swimming" />
            <div className="card-text">
              <h2>เพิ่มหัวเรื่องย่อย</h2>
              <p>ส่วนเนื้อหาเล็กน้อย</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-atmosphere">
        <div className="section-header">
          <h1 data-aos="fade-up">บรรยากาศ</h1>
        </div>
        <div className="card-container">
          <div className="card1">
            <img data-aos="fade-up" src="backup/246.jpg" alt="River view" />
            <h2>User research</h2>
            <p>Further elaborate on the skill or offered service</p>
          </div>
          <div className="card1">
            <img data-aos="fade-up" src="backup/087.jpg" alt="Scenic park" />
            <h2>Interaction design</h2>
            <p>Further elaborate on the skill or offered service</p>
          </div>
          <div className="card1">
            <img data-aos="fade-up" src="backup/223.jpg" alt="Field of crops" />
            <h2>Visual design</h2>
            <p>Further elaborate on the skill or offered service</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
