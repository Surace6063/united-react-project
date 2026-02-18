import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// get all products
export const useProducts = () => {
    return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        return response.data
    }
  })
}

// get single product
export const useProduct = (slug) => {
    return useQuery({
    queryKey: ['product',slug],
    queryFn: async () => {
        const response = await 
        axios.get(`https://api.escuelajs.co/api/v1/products/slug/${slug}`)
        return response.data
    }
  })
}