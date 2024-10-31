import axios from "axios";
import { createContext, useEffect} from "react";
import { toast } from "react-toastify";

export const cartcontext=createContext(null);

export function CartContextProvider({children}){

    

    const addToCartContext= async(productId)=>{
        try{
            const token = localStorage.getItem("userToken")
            const {data}= await axios.post(`https://ecommerce-node4.onrender.com/cart`,
            {productId},
            {headers:{Authorization:`Tariq__${token}`}}
            )
            if(data.message=='success'){
                toast.success('product added Successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }

            return data
        }
        catch(error){
            toast.error('product already added to Cart!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }

    }

    const getCardContext = async()=>{
        try{
            const token = localStorage.getItem("userToken");
            const {data}= await axios.get(`https://ecommerce-node4.onrender.com/cart`,
            {headers:{Authorization:`Tariq__${token}`}}            
            );
                
            return data ;
            }
        catch(error){
            
            console.log(`the error is: ${error}`);

        }
    }

    

    const removeItemContext= async(productId)=>{

        try{
            const token = localStorage.getItem("userToken")
            const {data}= await axios.patch(`https://ecommerce-node4.onrender.com/cart/removeItem`,{productId}
            ,{
                headers:{Authorization:`Tariq__${token}`}
            })
            return data
        }
        catch(error){
            console.log(error);
        }

    }

    const increaseQuantityContext= async(productId)=>{
        
        try{
            const token =  localStorage.getItem("userToken");
            const {data} = await axios.patch(`https://ecommerce-node4.onrender.com/cart/incraseQuantity`,
            {productId},
            {
                headers:{Authorization:`Tariq__${token}`}
            })

            return data
        }
        catch(error){
            console.log(error);
        }
    }

    const decreaseQuantityContext= async(productId)=>{
        
        try{
            const token =  localStorage.getItem("userToken");
            const {data} = await axios.patch(`https://ecommerce-node4.onrender.com/cart/decraseQuantity`,
            {productId},
            {
                headers:{Authorization:`Tariq__${token}`}
            })

            return data
        }
        catch(error){
            console.log(error);
        }
    }

    const clearCartContext= async(productId)=>{
        
        try{
            const token =  localStorage.getItem("userToken");
            const {data} = await axios.patch(`https://ecommerce-node4.onrender.com/cart/clear`,{},
            {
                headers:{Authorization:`Tariq__${token}`}
            }
            )
            toast.success('Cart Cleared Successully!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return data
        }
        catch(error){
            console.log(error);
        }
    }

    return <cartcontext.Provider value={{addToCartContext,getCardContext,removeItemContext,
    increaseQuantityContext,decreaseQuantityContext,clearCartContext}}>
        {children}
    </cartcontext.Provider>
}