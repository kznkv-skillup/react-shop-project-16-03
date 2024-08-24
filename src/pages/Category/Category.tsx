import { Grid } from '@mui/material'
import ProductListItem from 'components/Products/ProductListItem'
import { productsArray } from 'utils/productsArray'

type Props = {
    category: string
}

const Category = ({ category }: Props) => {
    return (
        <div>
            {productsArray
                .filter((item) => item.category === category)
                .map(
                    ({
                        id,
                        title,
                        type,
                        description,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} lg={4} key={id}>
                            <ProductListItem
                                id={id}
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={() => console.log()}
                            />
                        </Grid>
                    )
                )}
        </div>
    )
}
export default Category
