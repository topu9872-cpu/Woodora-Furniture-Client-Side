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


export const getProductsSearch = async (search = '') => {
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/products?search=${search}`)
        if (!res.ok) throw new Error('Faild to fetch products search data')
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}


export const getProductsPost = async (booking) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        });
        if (!res.ok) throw new Error('failed to fetch products POST data')
        return res.json()
    } catch (error) {
        console.error(error)
        return [];
    }
};

export const getCartProducts = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/cart`);
        if (!res.ok) throw new Error('Faild to fetch cart data');
     return   res.json()
    } catch (error) {
        console.error(error)
        return [];
    }
}