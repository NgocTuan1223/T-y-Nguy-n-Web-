// Khai báo trực tiếp dữ liệu sản phẩm để chạy local không bị lỗi CORS
const allProducts = [
  {
    id: 1,
    name: "Cà Phê Robusta Măng Đen",
    category: "Nông sản chế biến",
    origin: "Kon Tum",
    price: "150.000đ / kg",
    image_placeholder: `<img src="https://cdn.hstatic.net/products/200001035003/z7788529417448_e1e09b84d2a8ac561223cec81953ec98_0cc0b612b4b0464387baa4a76e7bad39_master.jpg">`,
  },
  {
    id: 2,
    name: "Hồ Tiêu Đen Chư Sê",
    category: "Gia vị",
    origin: "Gia Lai",
    price: "180.000đ / kg",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwNFW4ojgxusBvSzpJmWIy3QewO9prNeTNYqCnovDMQ&s=10">`,
  },
  {
    id: 3,
    name: "Hạt Macca Sấy Lâm Hà",
    category: "Hạt dinh dưỡng",
    origin: "Lâm Đồng",
    price: "220.000đ / hũ 500g",
    image_placeholder: `<img src="https://maccakimlien.com/vnt_upload/about/Macca_Kim_Lien.jpg">`,
  },
  {
    id: 4,
    name: "Bột Ca Cao Nguyên Chất",
    category: "Nông sản chế biến",
    origin: "Đắk Lắk",
    price: "120.000đ / gói 500g",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXg_m3YxAFcIu_f7muXCB7kgpfAVrx-scm3fp5kIycOw&s=10">`,
  },
  {
    id: 5,
    name: "Bơ Booth Đắk Lắk",
    category: "Trái cây tươi",
    origin: "Đắk Lắk",
    price: "60.000đ / kg",
    image_placeholder: `<img src="https://file.hstatic.net/200000377165/file/bo-booth-2_grande.png">`,
  },
  {
    id: 6,
    name: "Sầu Riêng Ri6 Krông Pắc",
    category: "Trái cây tươi",
    origin: "Đắk Lắk",
    price: "95.000đ / kg",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTualta7TaCL4Da9C5lF2zF_Le99Vl-CGMrscHY8qhEIuxsKx_AURu0SOpB&s=10">`,
  },
  {
    id: 7,
    name: "Mật Ong Hoa Cà Phê",
    category: "Đặc sản tự nhiên",
    origin: "Đắk Nông",
    price: "160.000đ / chai 1L",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rptY9hq8MPPPDT26dovKq4TGYRZGmeg9PPmVftEA-A&s=10">`,
  },
  {
    id: 8,
    name: "Hạt Điều Rang Salt",
    category: "Hạt dinh dưỡng",
    origin: "Gia Lai",
    price: "140.000đ / hũ 500g",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGxqprvlOTyyfZ-8LFzL8mwE0eDaIgDl-VtlTmTuY0A&s=10">`,
  },
  {
    id: 9,
    name: "Trà Oolong Bảo Lộc",
    category: "Trà & Đồ uống",
    origin: "Lâm Đồng",
    price: "200.000đ / gói 250g",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwNFW4ojgxusBvSzpJmWIy3QewO9prNeTNYqCnovDMQ&s=10">`,
  },
  {
    id: 10,
    name: "Chuối Laba Đà Lạt",
    category: "Trái cây tươi",
    origin: "Lâm Đồng",
    price: "35.000đ / kg",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIP-gKNUozcJwIAsIzoJ2-gXI_RKbj-Pu_hfPKsr5OQ&s=10">`,
  },
  {
    id: 11,
    name: "Cà Phê Arabica Cầu Đất",
    category: "Nông sản chế biến",
    origin: "Lâm Đồng",
    price: "250.000đ / kg",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUC-sbTxca8WRfQkKWZFyr22hPn7s_SX5vQasijCBV9w&s=10">`,
  },
  {
    id: 12,
    name: "Sâm Ngọc Linh Tươi",
    category: "Dược liệu",
    origin: "Kon Tum",
    price: "3.500.000đ / 100g",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4h3oJKn-nxLRcwRORyyrtJ0od39S9CGxR4d0s7lwzA&s=10">`,
  },
  {
    id: 13,
    name: "Măng Sấy Khô Măng Đen",
    category: "Đặc sản tự nhiên",
    origin: "Kon Tum",
    price: "280.000đ / kg",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzrHWPKfswUQpM2Gj4cdvJcrwkr93SRWRz4hNJSfpdA&s=10">`,
  },
  {
    id: 14,
    name: "Mắc Khén Tây Nguyên",
    category: "Gia vị",
    origin: "Đắk Nông",
    price: "90.000đ / hũ 200g",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DkhXoJnXDVx7-0BNC1yZOmNwC8kTOjhQJv13axZgjg&s=10">`,
  },
  {
    id: 15,
    name: "Hạt Sachi Sấy Giòn",
    category: "Hạt dinh dưỡng",
    origin: "Gia Lai",
    price: "110.000đ / hũ 250g",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB20LIpzFibaDfsd6yhp4sr1SYqFfFuQrBDjml2uOIyw&s=10">`,
  },
  {
    id: 16,
    name: "Rượu Cần Y Miên",
    category: "Trà & Đồ uống",
    origin: "Đắk Lắk",
    price: "320.000đ / bình 5L",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9tfmhnFx2aaB3g29HTn93GEWzPdfH8br5a6wOQE7hg&s">`,
  },
  {
    id: 17,
    name: "Chanh Dây Tím Xuất Khẩu",
    category: "Trái cây tươi",
    origin: "Gia Lai",
    price: "45.000đ / kg",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOB28_FljJwCqtC0Tr8MpLFU_s4cPfIqG6cjTludhf0Q&s=10">`,
  },
  {
    id: 18,
    name: "Bột Nghệ Nguyên Chất",
    category: "Dược liệu",
    origin: "Đắk Lắk",
    price: "130.000đ / hũ 500g",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDXvpjtIyxOte-5v8EBAh_zVAC7U9P4ZaYqUMXmiVYg&s=10">`,
  },
  {
    id: 19,
    name: "Thịt Bò Tơ Một Nắng",
    category: "Nông sản chế biến",
    origin: "Gia Lai",
    price: "550.000đ / kg",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8cKPgn5oDYsMhfRGuE-y4mh8X8zhc8ZiG3mCho4aoQ&s">`,
  },
  {
    id: 20,
    name: "Nấm Lim Xanh Rừng",
    category: "Dược liệu",
    origin: "Kon Tum",
    price: "1.200.000đ / kg",
    image_placeholder: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WM_RdWw8uQgk6t7xH4tuxDOxykZ_seGvwXWnmj8Erg&s=10">`,
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

function addToCart(productName) {
  alert("Đã lưu '" + productName + "' vào giỏ hàng để bạn tiếp tục mua sắm!");
}
