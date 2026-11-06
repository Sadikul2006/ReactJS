import ProductCart from "./ProductCart";

const products = [
    { id: 1, name: "Laptop", price: 800},
    { id: 2, name: "Phone", price: 1000},
    { id: 3, name: "HeadPhones", price: 180},
    { id: 4, name: "Keyboard", price: 50}
]
export default function ProductList() {
  return (
    <div className="row">
        {products.map((p) => (
            <div key={p.id} className="col-md-3 mb-4">
                <ProductCart product={p} />
            </div>
        ))}
    </div>
  );
}
