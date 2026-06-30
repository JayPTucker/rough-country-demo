import { prisma } from "../../lib/prisma";
import Link from "next/link";
import "../globals.css"


// ISR
export const revalidate = 30;

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main>
        <span className="nav">
            <p>RC Demo</p>
            <a className="navBtn" href='/'>
            Home
            </a>
            <a className="navBtn" href="/products">
            Products
            </a>
        </span>
        <h1>ISR Example</h1>
        <p>
            This page is statically generated but automatically regenerates every
            30 seconds.
        </p>
        <i>
            - When changing an element in MySQL, it will take 30 seconds to appear on the page.
        </i>

        <br></br><br></br>

        <ul>
        {products.map((product) => (
            <li key={product.id}>
            <Link href={`/products/${product.id}`}>
                {product.name}
            </Link>
            {" - "}
            ${product.price}
            </li>
        ))}
        </ul>
    </main>
  );
}