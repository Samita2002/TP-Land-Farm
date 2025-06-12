
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Book = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '2rem', minHeight: '60vh' }}>
        <h1>Book Page</h1>
        <p>เนื้อหาหน้า Book จะถูกเพิ่มเติมในขั้นตอนถัดไป</p>
      </div>
      <Footer />
    </div>
  )
}

export default Book
