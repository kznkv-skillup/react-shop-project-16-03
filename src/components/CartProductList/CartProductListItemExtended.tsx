import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type Props = {
    product: Product
    productsCount: number
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, quantity: number) => void
    toggleLikeState: (id: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
}

const CartProductListItemExtended = ({
    product,
    productsCount,
    removeProductFromCart,
    changeProductQuantity,
    toggleLikeState,
    productsLikeState,
}: Props) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <Button
                        variant="outlined"
                        onClick={() => toggleLikeState(product.id)}
                    >
                        {productsLikeState[product.id] ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderIcon />
                        )}
                    </Button>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <div>Count: {productsCount}</div>
                    <Quantity
                        count={productsCount}
                        onDecrementClick={() => {
                            if (productsCount === 1) {
                                removeProductFromCart(product.id)
                            } else {
                                changeProductQuantity(
                                    product.id,
                                    productsCount - 1
                                )
                            }
                        }}
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productsCount + 1)
                        }
                        minCount={0}
                    />

                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
