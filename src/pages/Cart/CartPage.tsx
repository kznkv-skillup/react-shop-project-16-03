import { Container, Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsLikeState: {
        [id: number]: boolean
    }
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, quantity: number) => void
    toggleLikeState: (id: number) => void
}

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
    toggleLikeState,
    productsLikeState,
}: Props) => {
    return (
        <div>
            <Container>
                <Typography
                    variant="h4"
                    component={'h1'}
                    sx={{
                        margin: '40px 0',
                    }}
                >
                    Cart
                </Typography>
                <Grid
                    container
                    spacing={4}
                    sx={{
                        marginBottom: '30px',
                    }}
                >
                    <CartProductList
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                        removeProductFromCart={removeProductFromCart}
                        changeProductQuantity={changeProductQuantity}
                        toggleLikeState={toggleLikeState}
                        productsLikeState={productsLikeState}
                    />
                </Grid>

                <CartTotal productsInCart={productsInCart} />
            </Container>
        </div>
    )
}

export default CartPage
