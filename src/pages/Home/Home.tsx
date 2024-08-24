import { Container } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Home = ({ addProductToCart }: Props) => {
    return (
        <Container className="main-container" component={'div'}>
            <ProductsList addProductToCart={addProductToCart} />
            <Reviews />
        </Container>
    )
}

export default Home
