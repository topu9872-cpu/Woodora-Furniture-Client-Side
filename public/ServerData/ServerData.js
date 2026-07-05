import { authClient } from "../../src/componants/lib/auth-client";

const getApiBaseUrl = () => {
    const configured = import.meta.env.VITE_SERVER_PUBLIC_URL;

    if (!configured) return "/api";

    const normalized = configured.trim();

    if (!normalized) return "/api";
    if (/^https?:\/\//i.test(normalized) && /localhost|127\.0\.0\.1/.test(normalized)) {
        return "/api";
    }

    return normalized;
};

const API_BASE_URL = getApiBaseUrl();

// Helper to get auth headers for protected routes
const getAuthHeaders = async () => {
    const { data } = await authClient.token();
    const token = data?.token;
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };
};

export const getProductDetails = async (id) => {
    try {
        const res = await fetch(`${API_BASE_URL}/products/${id}`)
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
        const headers = await getAuthHeaders();
        const res = await fetch(`${API_BASE_URL}/products/${id}`, {
            method: 'DELETE',
            headers,
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
        const headers = await getAuthHeaders();
        const res = await fetch(`${API_BASE_URL}/products/${id}`, {
            method: 'PATCH',
            headers,
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
        const res = await fetch(`${API_BASE_URL}/products?search=${search}`, {
          
        })
        if (!res.ok) throw new Error('Faild to fetch products search data')
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}


export const getProductsPost = async (booking) => {

    try {
        const headers = await getAuthHeaders();
        const res = await fetch(`${API_BASE_URL}/cart`, {
            method: 'POST',
            headers,
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
        const headers = await getAuthHeaders();
        const res = await fetch(`${API_BASE_URL}/cart`, {
            headers,
        });
        if (!res.ok) throw new Error('Faild to fetch cart data');
        return res.json()
    } catch (error) {
        console.error(error)
        return [];
    }
}
export const getCustomarsCartProducts = async (email) => {
   
    try {
        const headers = await getAuthHeaders();
        const res = await fetch(`${API_BASE_URL}/customars-cart/${email}`, {
            headers,
        });
        if (!res.ok) throw new Error('Faild to fetch cart data');
        return res.json()
    } catch (error) {
        console.error(error)
        return [];
    }
}


export const getCartDelete = async (id) => {
    try {
        const headers = await getAuthHeaders();
        const res = await fetch(`${API_BASE_URL}/cart/${id}`, {
            method: 'DELETE',
            headers,
        });
        if (!res.ok) throw new Error('Failed to fetch cart delete data')
        return res.json()
    } catch (error) {
        console.error(error)
        return null;
    }
}


export const getUsers = async (email) => {
    
    try {
        const headers = await getAuthHeaders();
        const res = await fetch(`${API_BASE_URL}/user/${email}`, {
            headers,
        });
        if (!res.ok) throw new Error('Faild to fetch user data');
        return res.json()
    } catch (error) {
        console.error(error)
        return [];
    }
}


export const getAllUsers = async () => {
    
    try {
        const headers = await getAuthHeaders();
        const res = await fetch(`${API_BASE_URL}/user`, {
            headers,
        });
        if (!res.ok) throw new Error('Faild to fetch all user data');
        return res.json()
    } catch (error) {
        console.error(error)
        return [];
    }
}
