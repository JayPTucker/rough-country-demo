import { prisma } from "../../lib/prisma";
import Link from "next/link";

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
      <h1>Products (ISR)</h1>

      <p>
        This page is statically generated but automatically regenerates every
        30 seconds.
      </p>

      <br></br>

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