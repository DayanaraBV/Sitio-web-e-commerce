import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrdersCard from "../../Components/OrdersCard"
function MyOrder() {
  const context = useContext(ShoppingCartContext)
    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
            key={order.id}
            date={order.date}
            totalProducts={order.totalProducts}
            totalPrice={order.totalPrice}
            />
            </Link>
          ))  
        }
        <OrdersCard></OrdersCard>
      </Layout>
  
    )
  }
  
  export default MyOrder