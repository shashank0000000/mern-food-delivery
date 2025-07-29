import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "https://mern-food-delivery-backend-cl7t.onrender.com";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([])
    const [cartLoading, setCartLoading] = useState(true);

    const fetchCart = async () => {
        if (!token) {
            setCartLoading(false);
            console.warn("fetchCart: No token provided");
            return;
        }
        setCartLoading(true);
        try {
            console.log("Fetching cart with token:", token);
            const response = await axios.post(url + "/api/cart/get", {}, { headers: { token: token } });
            console.log("Cart fetch response:", response.data);
            if (response.data.success) {
                setCartItems(response.data.cartData || {});
            } else {
                setCartItems({});
                console.warn("Cart fetch not successful:", response.data.message);
            }
        } catch (err) {
            console.error("Failed to fetch cart:", err?.response?.data || err.message);
            setCartItems({});
        }
        setCartLoading(false);
    }

    const addToCart = async (itemId) => {
        if (!token) return;
        try {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token: token } });
            fetchCart();
        } catch (err) {
            console.error("Failed to add to cart:", err?.response?.data || err.message);
        }
    }

    const removeFromCart = async (itemId) => {
        if (!token) return;
        try {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token: token } });
            fetchCart();
        } catch (err) {
            console.error("Failed to remove from cart:", err?.response?.data || err.message);
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                console.log("Loaded token from localStorage:", storedToken);
            } else {
                console.warn("No token found in localStorage");
            }
        }
        loadData();
    }, []);

    // Fetch cart whenever token changes and is not empty
    useEffect(() => {
        if (token) {
            fetchCart();
        }
    }, [token]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        cartLoading
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
