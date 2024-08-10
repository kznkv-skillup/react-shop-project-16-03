import { getProductsObject, Product, productsArray } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[+productId].title}:{' '}
                        {productsInCart[+productId]}
                    </div>
                ))}
            </div>
            <div>
                Total:{' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsInCart[+productId] *
                            productsObject[+productId].price,
                    0
                )}
                $
            </div>
        </div>
    )
}

export default CartHeader
