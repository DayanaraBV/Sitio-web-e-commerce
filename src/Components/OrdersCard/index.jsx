import { ChevronRightIcon, CalendarDaysIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    if (totalPrice === undefined || totalProducts === undefined) return null;
    const currentDate = () => {
        const date = new Date().toLocaleDateString();
        return date
     }
    return (
        <div className="flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg" >
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                <div>
                   <span className="flex font-light items-center gap-2">
                        <CalendarDaysIcon className="size-4 text-black"></CalendarDaysIcon>
                        <span>{currentDate()}</span>
                   </span>
                   <span className="flex font-light items-center gap-2">
                        <ShoppingBagIcon className="size-4 text-black"></ShoppingBagIcon>
                        <span className="font-light">{totalProducts} articles</span>
                   </span> 
                </div>
                </p>
                <p className="flex items-center gap-2">
                <span className="font-medium text-2xl">${totalPrice}</span>
                <ChevronRightIcon className="size-6 text-black cursor-pointer"></ChevronRightIcon>
                </p>
            </div>
        </div>

    );
}

export default OrdersCard