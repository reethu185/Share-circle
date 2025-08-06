// src/pages/Items.jsx
import React, { useState } from 'react';

const categories = [
  "Electronics Gadgets",
  "Clothes",
  "Books",
  "Kitchen Items",
  "Furniture",
  "Toys",
];

const productTemplate = {
  name: "Casual Shoes",
  category: "Electronics Gadgets",
  price: 100,
  offerPrice: 80,
  rating: 4,
  image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png",
};

const Items = () => {
  const [selectedCategory] = useState("Electronics Gadgets");
  const [searchText, setSearchText] = useState("");
  const products = new Array(4).fill(productTemplate);
  const [counts, setCounts] = useState(products.map(() => 0));

  const updateCount = (index, newCount) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? newCount : count))
    );
  };

  const filteredProducts = products.filter(
    (product) =>
      product.category === selectedCategory &&
      product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
  <div className="min-h-screen bg-[#1F1F1F] text-white pt-24 font-poppins">
  <div className="w-full max-w-2xl mx-auto mb-6 px-4 flex items-center space-x-2">
    <input
      type="text"
      placeholder="Search product (e.g. Casual Shoes)"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="flex-1 bg-[#2a2a2a] px-4 py-2 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
    />
    <button
      onClick={() => handleSearch(searchText)}
      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-semibold flex items-center"
    >
      🔍 Search
    </button>
  </div>

      {/* Overview Section at the Top */}
      <div className="bg-gradient-to-r from-[#0f0f0f] to-[#1f1f1f] p-10 mx-4 rounded-2xl flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            🌱 ShareCircle — Give unused items a second life!
          </h1>
          <p className="text-gray-400 mt-4">
            Empower others by donating what you no longer use. Explore, share, and make an impact.
          </p>
        </div>
        <button className="bg-green-500 text-[#0f0f0f] px-8 py-3 rounded-full font-semibold hover:bg-green-400 transition-all">
          Get Started
        </button>
      </div>

   
      {/* Products Section */}
      <div className="w-full px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-center mb-2">Items in {selectedCategory}</h2>
        <p className="text-gray-400 mb-8 text-center">Explore the available items for this category</p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-[#1F1F1F] border border-gray-700 rounded-lg px-4 py-3 w-full max-w-[240px] mx-auto shadow hover:shadow-xl transition"
              >
                <div className="group flex items-center justify-center px-2 cursor-pointer">
                  <img
                    className="group-hover:scale-105 transition duration-300 max-w-24 md:max-w-32"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="text-gray-400 text-sm mt-3">
                  <p>{product.category}</p>
                  <p className="text-white font-semibold text-lg truncate">{product.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {Array(5)
                      .fill('')
                      .map((_, idx) =>
                        product.rating > idx ? (
                          <svg key={idx} width="14" height="13" viewBox="0 0 18 17" fill="#4ade80">
                            <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" />
                          </svg>
                        ) : (
                          <svg key={idx} width="14" height="13" viewBox="0 0 18 17" fill="#4ade80" fillOpacity="0.25">
                            <path d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" />
                          </svg>
                        )
                      )}
                    <p className="text-gray-400 text-xs">({product.rating})</p>
                  </div>

                  {/* Price + Count */}
                  <div className="flex items-end justify-between mt-3">
                    <p className="text-green-400 font-semibold">
                      ${product.offerPrice}{' '}
                      <span className="line-through text-sm text-gray-500">${product.price}</span>
                    </p>
                    <div>
                      {counts[index] === 0 ? (
                        <button
                          onClick={() => updateCount(index, 1)}
                          className="text-green-500 border border-green-600 text-sm px-3 py-1 rounded hover:bg-green-600 hover:text-white transition"
                        >
                          Add
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 text-sm bg-green-500/20 text-green-300 rounded px-2 py-1">
                          <button onClick={() => updateCount(index, Math.max(0, counts[index] - 1))}>
                            −
                          </button>
                          <span>{counts[index]}</span>
                          <button onClick={() => updateCount(index, counts[index] + 1)}>+</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-sm mt-12">No items found for this search.</p>
        )}
      </div>
    </div>
  );
};

export default Items;
