// Khai báo trực tiếp dữ liệu sản phẩm để chạy local không bị lỗi CORS
const allProducts = [
  {
    id: 1,
    name: "Cà Phê Robusta Măng Đen",
    category: "Nông sản chế biến",
    origin: "Kon Tum",
    price: "150.000đ / kg",
    image_placeholder: "Hình Cà Phê",
  },
  {
    id: 2,
    name: "Hồ Tiêu Đen Chư Sê",
    category: "Gia vị",
    origin: "Gia Lai",
    price: "180.000đ / kg",
    image_placeholder: "Hình Hồ Tiêu",
  },
  {
    id: 3,
    name: "Hạt Macca Sấy Lâm Hà",
    category: "Hạt dinh dưỡng",
    origin: "Lâm Đồng",
    price: "220.000đ / hũ 500g",
    image_placeholder: "Hình Hạt Macca",
  },
  {
    id: 4,
    name: "Bột Ca Cao Nguyên Chất",
    category: "Nông sản chế biến",
    origin: "Đắk Lắk",
    price: "120.000đ / gói 500g",
    image_placeholder: "Hình Bột Ca Cao",
  },
  {
    id: 5,
    name: "Bơ Booth Đắk Lắk",
    category: "Trái cây tươi",
    origin: "Đắk Lắk",
    price: "60.000đ / kg",
    image_placeholder: "Hình Bơ Booth",
  },
  {
    id: 6,
    name: "Sầu Riêng Ri6 Krông Pắc",
    category: "Trái cây tươi",
    origin: "Đắk Lắk",
    price: "95.000đ / kg",
    image_placeholder: "Hình Sầu Riêng",
  },
  {
    id: 7,
    name: "Mật Ong Hoa Cà Phê",
    category: "Đặc sản tự nhiên",
    origin: "Đắk Nông",
    price: "160.000đ / chai 1L",
    image_placeholder: "Hình Mật Ong",
  },
  {
    id: 8,
    name: "Hạt Điều Rang Salt",
    category: "Hạt dinh dưỡng",
    origin: "Gia Lai",
    price: "140.000đ / hũ 500g",
    image_placeholder: "Hình Hạt Điều",
  },
  {
    id: 9,
    name: "Trà Oolong Bảo Lộc",
    category: "Trà & Đồ uống",
    origin: "Lâm Đồng",
    price: "200.000đ / gói 250g",
    image_placeholder: "Hình Trà Oolong",
  },
  {
    id: 10,
    name: "Chuối Laba Đà Lạt",
    category: "Trái cây tươi",
    origin: "Lâm Đồng",
    price: "35.000đ / kg",
    image_placeholder: "Hình Chuối Laba",
  },
  {
    id: 11,
    name: "Cà Phê Arabica Cầu Đất",
    category: "Nông sản chế biến",
    origin: "Lâm Đồng",
    price: "250.000đ / kg",
    image_placeholder: "Hình Cà Phê Arabica",
  },
  {
    id: 12,
    name: "Sâm Ngọc Linh Tươi",
    category: "Dược liệu",
    origin: "Kon Tum",
    price: "3.500.000đ / 100g",
    image_placeholder: "Hình Sâm Ngọc Linh",
  },
  {
    id: 13,
    name: "Măng Sấy Khô Măng Đen",
    category: "Đặc sản tự nhiên",
    origin: "Kon Tum",
    price: "280.000đ / kg",
    image_placeholder: "Hình Măng Khô",
  },
  {
    id: 14,
    name: "Mắc Khén Tây Nguyên",
    category: "Gia vị",
    origin: "Đắk Nông",
    price: "90.000đ / hũ 200g",
    image_placeholder: "Hình Mắc Khén",
  },
  {
    id: 15,
    name: "Hạt Sachi Sấy Giòn",
    category: "Hạt dinh dưỡng",
    origin: "Gia Lai",
    price: "110.000đ / hũ 250g",
    image_placeholder: "Hình Hạt Sachi",
  },
  {
    id: 16,
    name: "Rượu Cần Y Miên",
    category: "Trà & Đồ uống",
    origin: "Đắk Lắk",
    price: "320.000đ / bình 5L",
    image_placeholder: "Hình Rượu Cần",
  },
  {
    id: 17,
    name: "Chanh Dây Tím Xuất Khẩu",
    category: "Trái cây tươi",
    origin: "Gia Lai",
    price: "45.000đ / kg",
    image_placeholder: "Hình Chanh Dây",
  },
  {
    id: 18,
    name: "Bột Nghệ Nguyên Chất",
    category: "Dược liệu",
    origin: "Đắk Lắk",
    price: "130.000đ / hũ 500g",
    image_placeholder: "Hình Bột Nghệ",
  },
  {
    id: 19,
    name: "Thịt Bò Tơ Một Nắng",
    category: "Nông sản chế biến",
    origin: "Gia Lai",
    price: "550.000đ / kg",
    image_placeholder: "Hình Bò Một Nắng",
  },
  {
    id: 20,
    name: "Nấm Lim Xanh Rừng",
    category: "Dược liệu",
    origin: "Kon Tum",
    price: "1.200.000đ / kg",
    image_placeholder: "Hình Nấm Lim Xanh",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  renderCategories(allProducts);
  renderProducts(allProducts);
});

function renderCategories(products) {
  const filterContainer = document.getElementById("category-filter");
  if (!filterContainer) return;

  const categories = ["Tất cả", ...new Set(products.map((p) => p.category))];

  filterContainer.innerHTML = categories
    .map(
      (cat, index) => `
        <button class="btn-filter ${index === 0 ? "active" : ""}" onclick="filterByCategory('${cat}', this)">
            ${cat}
        </button>
    `,
    )
    .join("");
}

function filterByCategory(category, btnElement) {
  document
    .querySelectorAll(".btn-filter")
    .forEach((btn) => btn.classList.remove("active"));
  if (btnElement) {
    btnElement.classList.add("active");
  }

  if (category === "Tất cả") {
    renderProducts(allProducts);
  } else {
    const filtered = allProducts.filter((p) => p.category === category);
    renderProducts(filtered);
  }
}

function renderProducts(products) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 20px;">Không tìm thấy sản phẩm nào.</p>`;
    return;
  }

  grid.innerHTML = products
    .map(
      (p) => `
        <div class="product-card">
            <div>
                <div class="product-img">${p.image_placeholder}</div>
                <span class="category-tag">${p.category}</span>
                <div class="product-title">${p.name}</div>
                <div class="product-origin">📍 Nguồn gốc: ${p.origin}</div>
                <div class="product-price">${p.price}</div>
            </div>
            <button class="btn-buy" onclick="buyProduct('${p.name}')">Mua hàng</button>
        </div>
    `,
    )
    .join("");
}

function buyProduct(productName) {
  alert("Đã thêm '" + productName + "' vào giỏ hàng!");
}
