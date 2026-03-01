// frontend/src/api/index.js

const BASE_URL = 'http://localhost:5000/api'

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`)
  if (!res.ok) throw new Error('Erreur lors du chargement des produits')
  return res.json()
}

export const fetchProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`)
  if (!res.ok) throw new Error('Produit introuvable')
  return res.json()
}