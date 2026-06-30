import { prisma } from "../lib/prisma";
import "./globals.css"

// SSG
export const dynamic = "force-static";

export default async function Home() {
  const featuredProducts = await prisma.product.findMany({
    where: {
      featured: true,
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



      <h1>SSG Example</h1>

      <p>
        This page is statically generated at build time.
      </p>
      <i>
        - Anything you change in MySQL or in the DB won't update on this page until it is rebuilt
        from the server.
      </i>



      <ul>
        {featuredProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <br />
            ${product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}