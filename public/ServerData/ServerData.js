import { authClient } from "../../src/componants/lib/auth-client";

export const getProductDetails = async (id) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/products/${id}`)
        if (!res.ok) { throw new Error('Failed to fetch products details data') }
        return res.json()
    } catch (error) {
        console.error(error)
        return null;
    }
};

// delete admin data
export const getDeleteProducts = async (id) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/products/${id}`, {
            method: 'DELETE'
        })
        if (!res.ok) throw new Error('Faild to fetch delete products data')
        return res.json()
    } catch (error) {
        console.error(error)
        return null;
    }
};


// edit admin data

export const getEditProduct = async (id, data) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/products/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        if (!res.ok) throw new Error('faild to fetch admin edit data');
        return res.json();
    } catch (error) {
        console.error(error)
        return null
    }

}


export const getProductsSearch = async (search = '') => {
   
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/products?search=${search}`, {
          
        })
        if (!res.ok) throw new Error('Faild to fetch products search data')
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}


export const getProductsPost = async (booking) => {

     const { data } = await authClient.token()
    const token = data?.token;
    
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                 Authorization: `Bearer ${token}`
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
        return res.json()
    } catch (error) {
        console.error(error)
        return [];
    }
}


export const getCartDelete = async (id) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_PUBLIC_URL}/cart/${id}`, {
            method: 'DELETE'
        });
        if (!res.ok) throw new Error('Failed to fetch cart delete data')
        return res.json()
    } catch (error) {
        console.error(error)
        return null;
    }
}