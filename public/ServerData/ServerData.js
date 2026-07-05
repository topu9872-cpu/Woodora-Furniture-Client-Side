import { authClient } from "../../src/componants/lib/auth-client";

// Simple fallback for API Base URL
const API_BASE_URL = import.meta.env.VITE_SERVER_PUBLIC_URL?.trim() ;

// Helper to get auth headers for protected routes
const getAuthHeaders = async () => {
    const { data } = await authClient.token();
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data?.token}`,
    };
};

// --- Product API Methods ---

export const getProductDetails = async (id) => {
    try {
        const res = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!res.ok) throw new Error('Failed to fetch product details');
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getProductsSearch = async (search = '') => {
    try {
        const res = await fetch(`${API_BASE_URL}/products?search=${search}`);
        if (!res.ok) throw new Error('Failed to search products');
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getEditProduct = async (id, data) => {
    try {
        const res = await fetch(`${API_BASE_URL}/products/${id}`, {
            method: 'PATCH',
            headers: await getAuthHeaders(),
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('Failed to edit product');
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getDeleteProducts = async (id) => {
    try {
        const res = await fetch(`${API_BASE_URL}/products/${id}`, {
            method: 'DELETE',
            headers: await getAuthHeaders(),
        });
        if (!res.ok) throw new Error('Failed to delete product');
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// --- Cart API Methods ---

export const getProductsPost = async (booking) => {
    try {
        const res = await fetch(`${API_BASE_URL}/cart`, {
            method: 'POST',
            headers: await getAuthHeaders(),
            body: JSON.stringify(booking)
        });
        if (!res.ok) throw new Error('Failed to post to cart');
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getCartProducts = async () => {
    try {
        const res = await fetch(`${API_BASE_URL}/cart`, {
            headers: await getAuthHeaders(),
        });
        if (!res.ok) throw new Error('Failed to fetch cart');
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getCustomarsCartProducts = async (email) => {
    try {
        const res = await fetch(`${API_BASE_URL}/customars-cart/${email}`, {
            headers: await getAuthHeaders(),
        });
        if (!res.ok) throw new Error('Failed to fetch customer cart');
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getCartDelete = async (id) => {
    try {
        const res = await fetch(`${API_BASE_URL}/cart/${id}`, {
            method: 'DELETE',
            headers: await getAuthHeaders(),
        });
        if (!res.ok) throw new Error('Failed to delete cart item');
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// --- User API Methods ---

export const getUsers = async (email) => {
    try {
        const res = await fetch(`${API_BASE_URL}/user/${email}`, {
            headers: await getAuthHeaders(),
        });
        if (!res.ok) throw new Error('Failed to fetch user data');
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getAllUsers = async () => {
    try {
        const res = await fetch(`${API_BASE_URL}/user`, {
            headers: await getAuthHeaders(),
        });
        if (!res.ok) throw new Error('Failed to fetch all users');
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};