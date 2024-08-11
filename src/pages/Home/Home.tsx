import { Container } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Home = ({ addProductToCart }: Props) => {
    return (
        <Container className="main-container" component={'div'}>
            <ProductsList addProductToCart={addProductToCart} />
        </Container>
    )
}

export default Home
