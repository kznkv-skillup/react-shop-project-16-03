import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from './Footer'
import 'styles/layout.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import PaymentPage from 'pages/Payment/PaymentPage'
import ProductsPage from 'pages/Products/ProductsPage'
import CheckoutPage from 'pages/Checkout/CheckoutPage'

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
