import { prisma } from "../../../lib/prisma";
import { notFound } from "next/navigation";
import "../../globals.css";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    notFound();
  }

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

        
        <h1>SSR Example</h1>


        <p>This page is rendered on every request.</p>
        <i>- Each refresh it will give the latest info based on what is in the Database.</i>

        <br></br><br></br><br></br>

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <p><strong>Price:</strong> ${product.price}</p>

        <p><strong>Stock:</strong> {product.stock}</p>

        <p><strong>Server Time:</strong> {new Date().toLocaleString()}</p>
    </main>
  );
}