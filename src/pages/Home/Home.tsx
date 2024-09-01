import { Container } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {}

const Home = (props: Props) => {
    return (
        <Container className="main-container" component={'div'}>
            <ProductsList />
            <Reviews />
        </Container>
    )
}

export default Home
