import AddProdcut from "./components/AddProduct";

export default async function Home() {

  const url = await fetch('http://localhost:3000/api/product')
  const res = await url.json()
  console.log(res)

  return (
    <div className="w-full p-5">
      <AddProdcut />

      {
        res.map((prod: any) => (
          <h1 key={Math.random()} className="text-7xl text-center">{prod.productName}</h1>
        ))
      }

    </div>
  );
}
