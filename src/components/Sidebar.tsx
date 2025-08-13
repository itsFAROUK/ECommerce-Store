import { useEffect, useState } from "react";
import { useFilter } from "../FilterContext";

interface Product {
  category: string;
}
interface FetchResponse {
  products: Product[];
}

const keywords = ["apple", "watch", "fashion", "trend", "shoes", "shirt"];

const Sidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    minPrice,
    setMinPrice,
    selectedCategory,
    setSelectedCategory,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter(); // filters and their setters
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category)),
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };

    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <aside className="w-60 p-5 min-h-svh">
      <h1 className="text-2xl font-bold mb-10 mt-4">ECommerce Store</h1>
      {/* Search Section */}
      <input
        type="text"
        className="border-2 rounded w-full px-2 py-3 sm:mb-0"
        placeholder="Search Product"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Price Section */}
      <div className="flex justify-center items-center mt-3">
        <input
          type="number"
          min={0}
          className="border-2 mr-2 px-5 py-3 mb-3 w-full"
          placeholder="Min"
          value={minPrice ?? ""}
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          min={0}
          className="border-2 px-5 py-3 mb-3 w-full"
          placeholder="Max"
          value={maxPrice ?? ""}
          onChange={handleMaxPriceChange}
        />
      </div>

      {/* Categories Section */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Categories</h2>
        {categories.map((category, index) => (
          <label key={index} className="block mb-2">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={() => setSelectedCategory(category)}
              className="mr-2 w-[16px] h-[16px]"
              checked={selectedCategory === category}
            />
            {category.toUpperCase()}
          </label>
        ))}
      </section>

      {/* Keywords Section */}
      <section className="mb-5">
        <h2 className="text-xl font-semibold mb-3">Keywords</h2>
        <div>
          {keywords.map((keyword, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setKeyword(keyword)}
              className="block mb-2 px-2 py-2 w-full text-left border rounded hover:bg-gray-200 focus:bg-gray-300"
            >
              {keyword.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <button
        className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5"
        onClick={handleResetFilters}
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default Sidebar;
