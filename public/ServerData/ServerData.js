export const getProducts = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/products`);
        if (!res.ok) throw new Error('failed to fetch products data')
        return res.json()
    } catch (error) {
        console.error(error)
        return []
    }
};


export const getProductDetails = async (id) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/products/${id}`)
        if (!res.ok) { throw new Error('Failed to fetch products details data') }
        return res.json()
    } catch (error) {
        console.error(error)
        return null;
    }
}