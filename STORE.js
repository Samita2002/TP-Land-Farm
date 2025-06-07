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
    image: 'assets/0013.jpg',
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
    image: 'assets/0013.jpg',
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
    image: 'assets/0013.jpg',
    inStock: true,
    rating: 4.7,
    reviews: 163
  },
  {
    id: 16,
    name: 'แครอทเบบี้',
    description: 'ผลมะเขือเทศใหม่ ปลอดสารเคมี หวานน้ำ เหมาะสำหรับนำทำอาหาร',
    price: 200,
    unit: 'กก.',
    category: 'vegetables',
    image: 'assets/0013.jpg',
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
    image: 'assets/0013.jpg',
    inStock: true,
    rating: 4.8,
    reviews: 76
  },
  {
    id: 18,
    name: 'แตงกวาญี่ปุ่น',
    description: 'ผลมะเขือเทศใหม่ ปลอดสารเคมี หวานน้ำ เหมาะสำหรับนำทำอาหาร',
    price: 100,
    unit: 'กก.',
    category: 'vegetables',
    image: 'assets/0013.jpg',
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
    image: 'assets/0013.jpg',
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
    image: 'assets/0013.jpg',
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
    image: 'assets/0013.jpg',
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 22,
    name: 'กล้วยหอมทองออร์แกนิค',
    description: 'กล้วยหอมทองหวานหอม ',
    price: 60,
    unit: 'หวี',
    category: 'fruits',
    image: 'assets/0013.jpg',
    inStock: true,
    rating: 4.6,
    reviews: 203
  },
  {
    id: 23,
    name: 'ชุดผักสดพรีเมี่ยม',
    description: 'ชุดผักสดรวม 8 ชนิด สำหรับครอบครัว 4 คน',
    price: 450,
    unit: 'ชุด',
    category: 'premium',
    image: 'assets/0013.jpg',
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 24,
    name: 'กล่องผลไม้รวมพรีเมี่ยม',
    description: 'ผลไม้รวม 6 ชนิด คัดสรรคุณภาพพิเศษ',
    price: 800,
    unit: 'ลัง',
    category: 'premium',
    image: 'assets/0013.jpg',
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
  renderProducts(); // เรียก renderProducts() เพื่อแสดงสินค้าและดาวตั้งแต่แรก
  updateCartDisplay();
}

function setupEventListeners() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

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

    // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }

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
    if (e.target.classList.contains('fixed') && e.target.classList.contains('inset-0')) {
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
    return;
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );

  if (filteredProducts.length === 0) {
    resultsContainer.innerHTML = '<p class="text-gray-500 text-center py-4">ไม่พบสินค้าที่ค้นหา</p>';
    return;
  }

  const resultsHTML = filteredProducts.slice(0, 5).map(product => `
    <div class="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
         onclick="openProductDetail(${product.id})">
      <img src="${product.image}" alt="${product.name}" class="w-12 h-12 object-cover rounded">
      <div class="flex-1">
        <h4 class="font-medium text-sm">${product.name}</h4>
        <p class="text-xs text-gray-600">฿${product.price}/${product.unit}</p>
      </div>
    </div>
  `).join('');

  resultsContainer.innerHTML = resultsHTML;
}

function setActiveFilter(filter) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-filter') === filter) {
      btn.classList.add('active');
    }
  });
  currentFilter = filter;
}

function filterProducts(filter) {
  currentPage = 1;
  renderProducts();
}

function getFilteredProducts() {
  if (currentFilter === 'all') {
    return products;
  }
  return products.filter(product => product.category === currentFilter);
}

function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  const filteredProducts = getFilteredProducts();
  const startIndex = 0;
  const endIndex = currentPage * productsPerPage;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);

  if (productsToShow.length === 0) {
    productsGrid.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-gray-500">ไม่พบสินค้าในหมวดหมู่นี้</p></div>';
    return;
  }

  const productsHTML = productsToShow.map(product => createProductCard(product)).join('');
  productsGrid.innerHTML = productsHTML;

  // Show/hide load more button
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (endIndex >= filteredProducts.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }

  // Add animation
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('product-enter');
  });

  // *** เพิ่มบรรทัดนี้เข้ามา เพื่อให้ Feather Icons แสดงผลดาวในสินค้าที่โหลดมาครั้งแรก ***
  feather.replace();
}

function createProductCard(product) {
  const categoryNames = {
    vegetables: 'ผักสด',
    fruits: 'ผลไม้',
    premium: 'พรีเมี่ยม'
  };

return `
  <div class="product-card">
    <div class="relative overflow-hidden">
      <img src="${product.image}"
           alt="${product.name}"
           class="w-full h-48 object-cover"
           loading="lazy">
      <span class="product-badge ${product.category}">
        ${categoryNames[product.category]}
      </span>
      ${!product.inStock ? '<div class="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"><span class="text-white font-semibold">หมด</span></div>' : ''}
    </div>
    <div class="p-4">
      <h3 class="font-semibold text-lg mb-2 line-clamp-1">${product.name}</h3>
      <p class="text-gray-600 text-sm mb-3 line-clamp-2">${product.description}</p>
      <div class="flex items-center mb-3">
        <div class="flex items-center mr-2">
          ${generateStars(product.rating)}
        </div>
        <span class="text-sm text-gray-500">(${product.reviews})</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-organic-green-600">฿${product.price}/${product.unit}</span>
        <div class="flex space-x-2">
          <button onclick="openProductDetail(${product.id})"
                  class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm transition-colors">
            ดูรายละเอียด
          </button>
          <button onclick="addToCart(${product.id})"
                  class="btn-primary text-sm px-4 py-2 ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}"
                  ${!product.inStock ? 'disabled' : ''}>
            เพิ่ม
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i data-feather="star" class="w-4 h-4 fill-yellow-400 text-yellow-400"></i>';
  }

  if (hasHalfStar) {
    starsHTML += '<i data-feather="star" class="w-4 h-4 text-yellow-400"></i>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i data-feather="star" class="w-4 h-4 text-gray-300"></i>';
  }

  return starsHTML;
}

function loadMoreProducts() {
  currentPage++;
  const productsGrid = document.getElementById('productsGrid');
  const filteredProducts = getFilteredProducts();
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;
  const newProducts = filteredProducts.slice(startIndex, endIndex);

  if (newProducts.length === 0) return;

  const newProductsHTML = newProducts.map(product => createProductCard(product)).join('');
  productsGrid.insertAdjacentHTML('beforeend', newProductsHTML);

  // Update load more button
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (endIndex >= filteredProducts.length) {
    loadMoreBtn.style.display = 'none';
  }

  // Reinitialize Feather icons for new products
  feather.replace();
}

function openProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const content = document.getElementById('productModalContent');

  const categoryNames = {
    vegetables: 'ผักสด',
    fruits: 'ผลไม้',
    premium: 'พรีเมี่ยม'
  };

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div>
        <img src="${product.image}"
             alt="${product.name}"
             class="w-full h-96 object-cover rounded-lg">
      </div>
      <div>
        <div class="mb-4">
          <span class="product-badge ${product.category} relative">
            ${categoryNames[product.category]}
          </span>
        </div>
        <h2 class="text-2xl font-bold mb-4">${product.name}</h2>
        <p class="text-gray-600 mb-4">${product.description}</p>
        <div class="flex items-center mb-4">
          <div class="flex items-center mr-2">
            ${generateStars(product.rating)}
          </div>
          <span class="text-sm text-gray-500">(${product.reviews} รีวิว)</span>
        </div>
        <div class="text-3xl font-bold text-organic-green-600 mb-6">
          ฿${product.price}/${product.unit}
        </div>
        <div class="flex items-center space-x-4 mb-6">
          <label class="font-medium">จำนวน:</label>
          <div class="quantity-controls">
            <button type="button" class="quantity-btn" onclick="decreaseQuantity()">-</button>
            <input type="number" id="productQuantity" value="1" min="1" max="99"
                   class="w-16 text-center border border-gray-300 rounded px-2 py-1">
            <button type="button" class="quantity-btn" onclick="increaseQuantity()">+</button>
          </div>
        </div>
        <div class="flex space-x-4">
          <button onclick="addToCartFromModal(${product.id})"
                  class="flex-1 btn-primary ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}"
                  ${!product.inStock ? 'disabled' : ''}>
            ${product.inStock ? 'เพิ่มลงตะกร้า' : 'สินค้าหมด'}
          </button>
          <button class="btn-secondary">
            <i data-feather="heart" class="w-5 h-5"></i>
          </button>
        </div>
        ${product.inStock ? `
        <div class="mt-6 p-4 bg-green-50 rounded-lg">
          <div class="flex items-center text-green-700">
            <i data-feather="check-circle" class="w-5 h-5 mr-2"></i>
            <span class="font-medium">มีสินค้าพร้อมส่ง</span>
          </div>
          <p class="text-sm text-green-600 mt-1">จัดส่งภายใน 24 ชั่วโมง</p>
        </div>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.getElementById('searchModal').classList.add('hidden');
  feather.replace();
}

function increaseQuantity() {
  const input = document.getElementById('productQuantity');
  const currentValue = parseInt(input.value);
  if (currentValue < 99) {
    input.value = currentValue + 1;
  }
}

function decreaseQuantity() {
  const input = document.getElementById('productQuantity');
  const currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
  }
}

function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product || !product.inStock) return;

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity: quantity
    });
  }

  updateCartDisplay();
  showNotification(`เพิ่ม ${product.name} ลงตะกร้าแล้ว`);
}

function addToCartFromModal(productId) {
  const quantity = parseInt(document.getElementById('productQuantity').value);
  addToCart(productId, quantity);
  document.getElementById('productModal').classList.add('hidden');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
  renderCartItems();
}

function updateCartQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  updateCartDisplay();
  renderCartItems();
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
    cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">ไม่มีสินค้าในตะกร้า</p>';
    cartFooter.classList.add('hidden');
    return;
  }

  const cartHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
      <div class="flex-1 ml-4">
        <h4 class="font-medium">${item.name}</h4>
        <p class="text-sm text-gray-600">฿${item.price}/${item.unit}</p>
        <div class="quantity-controls mt-2">
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
          <span class="px-3">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="text-right">
        <p class="font-semibold">฿${item.price * item.quantity}</p>
        <button onclick="removeFromCart(${item.id})"
                class="text-red-500 hover:text-red-700 mt-2">
          <i data-feather="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');

  cartItems.innerHTML = cartHTML;

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `฿${total.toLocaleString()}`;
  cartFooter.classList.remove('hidden');

  feather.replace();
}

function handleContactForm(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Simulate form submission
  showNotification('ข้อความของคุณถูกส่งแล้ว เราจะติดต่อกลับในเร็วๆ นี้');
  e.target.reset();
}

function scrollToProducts() {
  document.getElementById('products').scrollIntoView({
    behavior: 'smooth'
  });
}

function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type === 'success' ? 'border-green-500' : 'border-red-500'}`;
  notification.innerHTML = `
    <div class="flex items-center">
      <i data-feather="${type === 'success' ? 'check-circle' : 'alert-circle'}"
         class="w-5 h-5 ${type === 'success' ? 'text-green-500' : 'text-red-500'} mr-2"></i>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);
  feather.replace();

  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);

  // Hide notification
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});