import { Container } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <Container>
                <div>Cart</div>
                <CartProductList productsInCart={productsInCart} />
                <CartTotal productsInCart={productsInCart} />
            </Container>
        </div>
    )
}

export default CartPage
