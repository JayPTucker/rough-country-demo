import { prisma } from "../lib/prisma";

export const dynamic = "force-static";

export default async function Home() {
  const featuredProducts = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });

  return (
    <main>
      <h1>TrailForge Demo</h1>

      <h2>SSG Example</h2>

      <p>
        This page is statically generated at build time.
      </p>

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