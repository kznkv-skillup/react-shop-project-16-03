export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    category?: string
}

export const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 15',
        description: 'This is iPhone 15',
        type: 'phone',
        capacity: '64',
        price: 1000,
        image: '/images/iphone-grey.webp',
        category: 'sport',
    },
    {
        id: 2,
        title: 'iPhone 14',
        description: '<div class="red">This is iPhone 14</div>',
        type: 'phone',
        capacity: '128',
        price: 500,
        image: '/images/iphone-blue.webp',
        category: 'sport',
    },
    {
        id: 3,
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '256',
        price: 1000,
        image: '/images/iphone-pink.webp',
        category: 'sport',
    },
    {
        id: 4,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '512',
        price: 1500,
        image: '/images/iphone-green.webp',
        category: 'food',
    },
    {
        id: 5,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '64',
        price: 500,
        image: '/images/iphone-yellow.webp',
        category: 'food',
    },
    {
        id: 6,
        title: 'iPhone 11',
        description: 'This is iPhone 11',
        type: 'phone',
        capacity: '32',
        price: 300,
        image: '/images/iphone-aqua.webp',
        category: 'food',
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )
