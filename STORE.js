// Global variables
let cart = [];
let products = [];
let currentFilter = 'all';
let currentPage = 1;
const productsPerPage = 12;

// Product data
const productData = [
  {
    id: 1,
    name: 'มะเขือเทศคอร์นเกล็ด',
    description: 'ผลมะเขือเทศใหม่ ปลอดสารเคมี หวานน้ำ เหมาะสำหรับนำทำอาหาร',
    price: 180,
    unit: 'กก.',
    category: 'vegetables',
    image: 'backup/023.jpg',
    inStock: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    name: 'ผักกาดหอมไฮโดรโปนิกส์',
    description: 'ผักกาดหอมปลูกระบบไฮโดร สดกรอบ หวาน เป็นไฮโดร',
    price: 120,
    unit: 'หัว',
    category: 'vegetables',
    image: 'backup/261.jpg',
    inStock: true,
    rating: 4.9,
    reviews: 95
  },
  {
    id: 3,
    name: 'บรอกโคลี่ออร์แกนิค',
    description: 'บรอกโคลี่สีเขียวสด อุดมไปด้วยวิตามิน เหมาะสำหรับเด็ก',
    price: 150,
    unit: 'กก.',
    category: 'vegetables',
    image: 'backup/025.jpg',
    inStock: true,
    rating: 4.7,
    reviews: 163
  },
  {
    id: 4,
    name: 'แครอทเบบี้',
    description: 'ผลมะเขือเทศใหม่ ปลอดสารเคมี หวานน้ำ เหมาะสำหรับนำทำอาหาร',
    price: 200,
    unit: 'กก.',
    category: 'vegetables',
    image: 'backup/026.jpg',
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 5,
    name: 'พริกหยวกสีรุ้ง',
    description: 'พริกหยวกหลากสี หวานกรอบ เติมสีสันให้อาหาร',
    price: 250,
    unit: 'กก.',
    category: 'vegetables',
    image: 'backup/027.jpg',
    inStock: true,
    rating: 4.8,
    reviews: 76
  },
  {
    id: 6,
    name: 'แตงกวาญี่ปุ่น',
    description: 'ผลมะเขือเทศใหม่ ปลอดสารเคมี หวานน้ำ เหมาะสำหรับนำทำอาหาร',
    price: 100,
    unit: 'กก.',
    category: 'vegetables',
    image: 'backup/192.jpg',
    inStock: true,
    rating: 4.5,
    reviews: 134
  },
  {
    id: 7,
    name: 'ผักโขมออร์แกนิค',
    description: 'ผักโขมใบอ่อนอวบ อุดมไปด้วยแคลเซียมและวิตามิน',
    price: 80,
    unit: 'กก.',
    category: 'vegetables',
    image: 'backup/194.jpg',
    inStock: true,
    rating: 4.7,
    reviews: 98
  },
  {
    id: 8,
    name: 'มะม่วงน้ำดอกไม้',
    description: 'มะม่วงหวานหอม เนื้อเนียนละมุน รสชาติเป็นเอกลักษณ์',
    price: 350,
    unit: 'กก.',
    category: 'fruits',
    image: 'backup/196.jpg',
    inStock: true,
    rating: 4.9,
    reviews: 187
  },
  {
    id: 9,
    name: 'ส้มโชกุนออร์แกนิค',
    description: 'ส้มโชกุนหวานซ่า เต็มไปด้วยวิตามินซี',
    price: 180,
    unit: 'กก.',
    category: 'fruits',
    image: 'backup/198.jpg',
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 10,
    name: 'กล้วยหอมทองออร์แกนิค',
    description: 'กล้วยหอมทองหวานหอม ',
    price: 60,
    unit: 'หวี',
    category: 'fruits',
    image: 'backup/201.jpg',
    inStock: true,
    rating: 4.6,
    reviews: 203
  },
  {
    id: 11,
    name: 'ชุดผักสดพรีเมี่ยม',
    description: 'ชุดผักสดรวม 8 ชนิด สำหรับครอบครัว 4 คน',
    price: 450,
    unit: 'ชุด',
    category: 'premium',
    image: 'backup/203.jpg',
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 12,
    name: 'กล่องผลไม้รวมพรีเมี่ยม',
    description: 'ผลไม้รวม 6 ชนิด คัดสรรคุณภาพพิเศษ',
    price: 800,
    unit: 'ลัง',
    category: 'premium',
    image: 'backup/255.jpg',
    inStock: true,
    rating: 5.0,
    reviews: 67
  },
  {
    id: 13,
    name: 'มะเขือเทศคอร์นเกล็ด',
    description: 'ผลมะเขือเทศใหม่ ปลอดสารเคมี หวานน้ำ เหมาะสำหรับนำทำอาหาร',
    price: 180,
    unit: 'กก.',
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: 14,
    name: 'ผักกาดหอมไฮโดรโปนิกส์',
    description: 'ผักกาดหอมปลูกระบบไฮโดร สดกรอบ หวาน เป็นไฮโดร',
    price: 120,
    unit: 'หัว',
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 4.9,
    reviews: 95
  },
  {
    id: 15,
    name: 'บรอกโคลี่ออร์แกนิค',
    description: 'บรอกโคลี่สีเขียวสด อุดมไปด้วยวิตามิน เหมาะสำหรับเด็ก',
    price: 150,
    unit: 'กก.',
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 4.7,
    reviews: 163
  },
  {
    id: 16,
    name: 'แครอทเบบี้',
    description: 'แครอทเบบี้หวานกรอบ อุดมไปด้วยเบต้าแคโรทีน สีส้มสวยงาม',
    price: 200,
    unit: 'กก.',
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 17,
    name: 'พริกหยวกสีรุ้ง',
    description: 'พริกหยวกหลากสี หวานกรอบ เติมสีสันให้อาหาร',
    price: 250,
    unit: 'กก.',
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 4.8,
    reviews: 76
  },
  {
    id: 18,
    name: 'แตงกวาญี่ปุ่น',
    description: 'แตงกวาญี่ปุ่นกรอบสดใส เนื้อแน่น รสชาติหวานเซาะ',
    price: 100,
    unit: 'กก.',
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 4.5,
    reviews: 134
  },
  {
    id: 19,
    name: 'ผักโขมออร์แกนิค',
    description: 'ผักโขมใบอ่อนอวบ อุดมไปด้วยแคลเซียมและวิตามิน',
    price: 80,
    unit: 'กก.',
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 4.7,
    reviews: 98
  },
  {
    id: 20,
    name: 'มะม่วงน้ำดอกไม้',
    description: 'มะม่วงหวานหอม เนื้อเนียนละมุน รสชาติเป็นเอกลักษณ์',
    price: 350,
    unit: 'กก.',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 4.9,
    reviews: 187
  },
  {
    id: 21,
    name: 'ส้มโชกุนออร์แกนิค',
    description: 'ส้มโชกุนหวานซ่า เต็มไปด้วยวิตามินซี',
    price: 180,
    unit: 'กก.',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 22,
    name: 'กล้วยหอมทองออร์แกนิค',
    description: 'กล้วยหอมทองหวานหอม เนื้อนุ่มละมุน อุดมไปด้วยโพแทสเซียม',
    price: 60,
    unit: 'หวี',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 4.6,
    reviews: 203
  },
  {
    id: 23,
    name: 'ชุดผักสดพรีเมี่ยม',
    description: 'ชุดผักสดรวม 8 ชนิด สำหรับครอบครัว 4 คน คัดสรรคุณภาพพิเศษ',
    price: 450,
    unit: 'ชุด',
    category: 'premium',
    image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 24,
    name: 'กล่องผลไม้รวมพรีเมี่ยม',
    description: 'ผลไม้รวม 6 ชนิด คัดสรรคุณภาพพิเศษ ของขวัญสุดพิเศษ',
    price: 800,
    unit: 'ลัง',
    category: 'premium',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    rating: 5.0,
    reviews: 67
  }
];


// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  products = [...productData];
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  renderProducts(); // This will render the initial products and call feather.replace()
  updateCartDisplay();
}

function setupEventListeners() {
  // Search functionality
  const searchBtn = document.getElementById('searchBtn');
  const searchModal = document.getElementById('searchModal');
  const closeSearchModal = document.getElementById('closeSearchModal');
  const searchInput = document.getElementById('searchInput');

  searchBtn.addEventListener('click', () => {
    searchModal.classList.remove('hidden');
    searchInput.focus();
  });

  closeSearchModal.addEventListener('click', () => {
    searchModal.classList.add('hidden');
  });

  searchInput.addEventListener('input', handleSearch);

  // Cart functionality
  const cartBtn = document.getElementById('cartBtn');
  const cartModal = document.getElementById('cartModal');
  const closeCartModal = document.getElementById('closeCartModal');

  cartBtn.addEventListener('click', () => {
    cartModal.classList.remove('hidden');
    renderCartItems();
  });

  closeCartModal.addEventListener('click', () => {
    cartModal.classList.add('hidden');
  });

  // Product modal
  const productModal = document.getElementById('productModal');
  const closeProductModal = document.getElementById('closeProductModal');

  closeProductModal.addEventListener('click', () => {
    productModal.classList.add('hidden');
  });

  // Filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filter = e.target.getAttribute('data-filter');
      setActiveFilter(filter);
      filterProducts(filter);
    });
  });

  // Load more button
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  loadMoreBtn.addEventListener('click', loadMoreProducts);

  // Back to top button
  const backToTopBtn = document.getElementById('backToTop');
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Show/hide back to top button on scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.remove('hidden');
    } else {
      backToTopBtn.classList.add('hidden');
    }
  });

  // Close modals when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      searchModal.classList.add('hidden');
      cartModal.classList.add('hidden');
      productModal.classList.add('hidden');
    }
  });
}

function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('searchResults');

  if (query.length === 0) {
    resultsContainer.innerHTML = '';
    // Re-initialize Feather icons for search results if they were previously there
    feather.replace();
    return;
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );

  if (filteredProducts.length === 0) {
    resultsContainer.innerHTML = '<p class="text-center">ไม่พบสินค้าที่ค้นหา</p>';
    // Re-initialize Feather icons just in case previous search results had them
    feather.replace();
    return;
  }

  resultsContainer.innerHTML = filteredProducts.map(product => `
    <div class="search-result-item" onclick="openProductModal(${product.id})" style="padding: 0.75rem; border-bottom: 1px solid #e5e7eb; cursor: pointer; display: flex; align-items: center; gap: 1rem;">
      <img src="${product.image}" alt="${product.name}" style="width: 3rem; height: 3rem; object-fit: cover; border-radius: 0.375rem;">
      <div>
        <div style="font-weight: 500; color: #1f2937;">${product.name}</div>
        <div style="font-size: 0.875rem; color: #16a34a; font-weight: 600;">฿${product.price}/${product.unit}</div>
      </div>
    </div>
  `).join('');
  // Call feather.replace() after updating search results
  feather.replace();
}

function setActiveFilter(filter) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
  currentFilter = filter;
  currentPage = 1;
}

function filterProducts(filter) {
  const filteredProducts = filter === 'all'
    ? products
    : products.filter(product => product.category === filter);

  renderProductsGrid(filteredProducts.slice(0, productsPerPage));
  // Call feather.replace() after filtering and rendering
  feather.replace();
}

function renderProducts() {
  const productsToShow = currentFilter === 'all'
    ? products.slice(0, currentPage * productsPerPage)
    : products.filter(product => product.category === currentFilter).slice(0, currentPage * productsPerPage);

  renderProductsGrid(productsToShow);
  // Call feather.replace() after rendering all products
  feather.replace();
}

function renderProductsGrid(productsToRender) {
  const productsGrid = document.getElementById('productsGrid');

  productsGrid.innerHTML = productsToRender.map(product => `
    <div class="product-card product-enter" onclick="openProductModal(${product.id})">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-badge ${product.category}">
          ${getCategoryLabel(product.category)}
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">
          <div class="rating-stars">
            ${generateStars(product.rating)}
          </div>
          <span class="rating-text">(${product.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-amount">฿${product.price}</span>
            <span class="price-unit">/${product.unit}</span>
          </div>
          <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
            เพิ่มใส่ตะกร้า
          </button>
        </div>
      </div>
    </div>
  `).join('');
  // This is the crucial line: call feather.replace() here after products are rendered.
  // It's already called by the higher-level renderProducts() and filterProducts()
  // functions, but putting it here ensures it's always called when the grid is updated.
  feather.replace();
}

function getCategoryLabel(category) {
  const labels = {
    vegetables: 'ผักสด',
    fruits: 'ผลไม้',
    premium: 'พรีเมี่ยม'
  };
  return labels[category] || category;
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i data-feather="star" class="star" style="fill: currentColor;"></i>';
  }

  if (hasHalfStar) {
    starsHTML += '<i data-feather="star" class="star" style="fill: currentColor; opacity: 0.5;"></i>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i data-feather="star" class="star" style="opacity: 0.3;"></i>';
  }

  return starsHTML;
}

function loadMoreProducts() {
  currentPage++;
  renderProducts();
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCartDisplay();
  showNotification('เพิ่มสินค้าในตะกร้าแล้ว');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
  renderCartItems();
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartDisplay();
      renderCartItems();
    }
  }
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cartCount');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems > 0) {
    cartCount.textContent = totalItems;
    cartCount.classList.remove('hidden');
  } else {
    cartCount.classList.add('hidden');
  }
}

function renderCartItems() {
  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartTotal = document.getElementById('cartTotal');

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">ไม่มีสินค้าในตะกร้า</p>';
    cartFooter.classList.add('hidden');
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">฿${item.price}/${item.unit}</div>
        </div>
      </div>
      <div class="quantity-controls">
        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
        <span class="quantity-display">${item.quantity}</span>
        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `฿${total.toLocaleString()}`;
  cartFooter.classList.remove('hidden');
}

function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  const productModal = document.getElementById('productModal');
  const productModalContent = document.getElementById('productModalContent');

  productModalContent.innerHTML = `
    <div style="position: relative;">
      <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 20rem; object-fit: cover;">
      <div style="padding: 2rem;">
        <div style="margin-bottom: 1rem;">
          <span class="product-badge ${product.category}">${getCategoryLabel(product.category)}</span>
        </div>
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #1f2937;">${product.name}</h2>
        <p style="color: #6b7280; margin-bottom: 1.5rem; line-height: 1.6;">${product.description}</p>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
          <div class="rating-stars">
            ${generateStars(product.rating)}
          </div>
          <span style="font-size: 0.875rem; color: #6b7280;">
            ${product.rating} (${product.reviews} รีวิว)
          </span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <div style="display: flex; align-items: baseline; gap: 0.25rem;">
            <span style="font-size: 2rem; font-weight: 700; color: var(--organic-green-600);">฿${product.price}</span>
            <span style="color: #6b7280;">/${product.unit}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: #16a34a;">
            <i data-feather="check-circle" style="width: 1rem; height: 1rem;"></i>
            <span style="font-size: 0.875rem; font-weight: 500;">มีสินค้าพร้อมส่ง</span>
          </div>
        </div>
        <button onclick="addToCart(${product.id}); document.getElementById('productModal').classList.add('hidden');"
                style="width: 100%; background-color: var(--organic-green-600); color: white; font-weight: 500; padding: 1rem; border-radius: 0.5rem; border: none; cursor: pointer; font-size: 1.125rem; transition: background-color 0.3s ease;">
          เพิ่มใส่ตะกร้า
        </button>
      </div>
    </div>
  `;

  productModal.classList.remove('hidden');

  // Re-initialize Feather icons for the modal content
  setTimeout(() => {
    feather.replace();
  }, 100);
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <i data-feather="check-circle" style="width: 1.25rem; height: 1.25rem; color: var(--organic-green-600);"></i>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);

  // Hide and remove notification
  setTimeout(() => {
    notification.classList.add('hide');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);

  // Initialize Feather icons for notification
  feather.replace();
}

function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Initialize Feather icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  feather.replace();
});