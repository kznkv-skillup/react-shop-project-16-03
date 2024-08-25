import { getProductsObject, Product, productsArray } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
    changeProductQuantity?: (id: number, quantity: number) => void
    toggleLikeState?: (id: number) => void
    productsLikeState?: {
        [id: number]: boolean
    }
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductQuantity,
    toggleLikeState,
    productsLikeState,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[+productId]}
                    productsCount={productsInCart[+productId]}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                    toggleLikeState={toggleLikeState}
                    productsLikeState={productsLikeState}
                />
            ))}
        </>
    )
}

export default CartProductList
