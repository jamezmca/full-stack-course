import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

import Stripe from "stripe"
import '../envConfig.js'

const API_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
const stripe = new Stripe(API_KEY, {
    apiVersion: "2023-10-16",
})


export async function getProducts() {
    const products = await stripe.products.list({ active: true })

    // fetch all the prices that are active
    const prices = await stripe.prices.list({ active: true })

    // combine the products and their associated prices
    const combinedData = products.data.map((product) => {
        const productPrices = prices.data.filter((price) => {
            return price.product === product.id
        })

        return {
            ...product,
            prices: productPrices.map((price) => {
                return {
                    id: price.id,
                    unit_amount: price.unit_amount,
                    currency: price.currency,
                    recurring: price.recurring
                }
            })
        }
    })
    return combinedData
}

export default async function Home(props) {
    const products = await getProducts()

    let planner = null
    let stickers = []


    for (let product of products) {
        if (product.name === 'Medieval Dragon Month Planner') {
            planner = product
            continue
        }
        stickers.push(product)
    }


    return (
        < >
            <ImageBanner />
            <section>
                <Products planner={planner} stickers={stickers} />
            </section>
        </>
    );
}
