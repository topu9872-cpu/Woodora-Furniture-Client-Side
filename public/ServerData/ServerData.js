export const getProducts = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/products`);
        if (!res.ok) throw new Error('failed to fetch products data')
        return res.json()
    } catch (error) {
        console.error(error)
        return []
    }

}