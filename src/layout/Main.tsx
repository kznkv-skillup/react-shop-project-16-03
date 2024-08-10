import { Container } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <>
            <Container className="main-container" component={'main'}>
                <ProductsList addProductToCart={addProductToCart} />
            </Container>
        </>
    )
}

export default Main
