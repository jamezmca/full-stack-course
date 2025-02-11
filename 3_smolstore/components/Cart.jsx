'use client'

import { useProducts } from "@/context/ProductContext"
import Link from "next/link"

export default function Cart() {
    const { cart } = useProducts()
    const numProducts = Object.keys(cart).reduce((acc, curr, currIndex) => {
        const numProduct = cart[curr].quantity
        const sum = acc + parseInt(numProduct)
        return sum
    }, 0)


    return (
        <div>
            <Link className="unstyled-button" href={'/cart'}>
                <i className="fa-solid fa-bag-shopping"></i>
                {numProducts > 0 && (
                    <div className="cart-num">
                        <p>{numProducts}</p>
                    </div>
                )}
            </Link>
        </div>
    )
}