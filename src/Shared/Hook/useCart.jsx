import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const useCart = () => {
 
    const {user, loading} = useContext(AuthContext)
    const {  refetch, data: cart = []  } = useQuery({
        queryKey: ['carts' , user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://eshopping-server.onrender.com/carts?email=${user?.email}`)


            return res.json()
        },
      })
      return [cart, refetch]
}

export default useCart;