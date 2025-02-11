'use client'
import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";
import { useEffect, useState } from "react";


// export async function getProducts() {
//   // what we'd do if we could deploy a proper backend
//   const baseURL = process.env.NEXT_PUBLIC_BASE_URL
//   const response = await fetch(baseURL + '/api/products')
//   const products = await response.json()
//   return products
// }

export default function Home(props) {
  const [products, setProducts] = useState([])
  // const products = await getProducts()

  let planner = null
  let stickers = []


  for (let product of products) {
    if (product.name === 'Medieval Dragon Month Planner') {
      planner = product
      continue
    }
    stickers.push(product)
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const response = await fetch(baseURL + '/api/products')
        const productsData = await response.json()
        setProducts(productsData)
      } catch (err) {
        console.log(err.message)
      }
    }

    fetchProducts()
  }, [])


  return (
    < >
      <ImageBanner />
      <section>
        <Products planner={planner} stickers={stickers} />
      </section>
    </>
  );
}
