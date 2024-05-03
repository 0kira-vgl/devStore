"use client";

import { useCart } from "@/contexts/CartContext";

interface AddCartButtonProps {
  productId: number;
}

export function AddCartButton({ productId }: AddCartButtonProps) {
  const { addToCart } = useCart();

  function handleAddProductToCart() {
    addToCart(productId);
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  );
}
