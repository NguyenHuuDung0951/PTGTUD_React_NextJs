import { useState, useMemo } from "react";

// mock data
function generateProducts(count = 5000) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 1000) + 1,
  }));
}

const products = generateProducts(5000);

function Bai3() {
  const [search, setSearch] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const filteredProducts = useMemo(() => {
    console.time("filter-useMemo");

    const result = products.filter(p => {
      const matchName = p.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchMin = min === "" || p.price >= Number(min);
      const matchMax = max === "" || p.price <= Number(max);

      return matchName && matchMin && matchMax;
    });

    console.timeEnd("filter-useMemo");
    return result;
  }, [search, min, max]);

  const totalPrice = useMemo(() => {
    console.time("total-useMemo");

    const total = filteredProducts.reduce(
      (sum, p) => sum + p.price,
      0
    );

    console.timeEnd("total-useMemo");
    return total;
  }, [filteredProducts]);

  return (
    <div>
      <h2>Bài 3 – Product Filter + Tổng tiền</h2>

      <input
        placeholder="Search name"
        onChange={e => setSearch(e.target.value)}
      />
      <input
        placeholder="Min price"
        onChange={e => setMin(e.target.value)}
      />
      <input
        placeholder="Max price"
        onChange={e => setMax(e.target.value)}
      />

      <p>Số sản phẩm: {filteredProducts.length}</p>
      <p>Tổng tiền: {totalPrice}</p>
    </div>
  );
}

export default Bai3;
