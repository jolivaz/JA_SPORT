import Product1 from '../images/product1.jpg'
import Product2 from '../images/product2.jpg'
import Product3 from '../images/product3.jpg'
import Product4 from '../images/product4.jpg'
import Product5 from '../images/product5.jpg'
import Product6 from '../images/product6.jpg'
import Product7 from '../images/product7.jpg'
import Product8 from '../images/product8.jpg'
import Product9 from '../images/product9.jpg'
import Product10 from '../images/product10.jpg'
import Product11 from '../images/product11.jpg'
import Product12 from '../images/product12.jpg'
import Product13 from '../images/product13.jpg'
import Product14 from '../images/product14.jpg'
import Product15 from '../images/product15.jpg'
import Product16 from '../images/product16.jpg'
import Product17 from '../images/product17.jpg'
import Product18 from '../images/product18.jpg'
import Product19 from '../images/product19.jpg'
import Product20 from '../images/product20.jpg'


const initialState = {
    products: [
		{
			id: 1,
			img: Product1,
			name: 'Dom Sock 10',
            category: 'Zapatos',
            description: 'Descripcion de prueba del producto',
            price: 200,
            discount: 15,
            brand: 'Nike',
            shipping: true,
            wishList: false
		},
		{
			id: 2,
			img: Product2,
			name: 'Bride Rex',
            category: 'Zapatos',
            description: 'Descripcion de prueba del producto',
            price: 230,
            discount: 10,
            brand: 'Nike',
            shipping: true,
            wishList: false
		},
		{
			id: 3,
			img: Product3,
			name: 'Dadd k25',
            category: 'Zapatos',
            description: 'Descripcion de prueba del producto',
            price: 400,
            discount: 0,
            brand: 'Nike',
            shipping: true,
            wishList: false
        },
        {
			id: 4,
			img: Product4,
			name: 'Franela J20',
            category: 'Franelas',
            description: 'Descripcion de prueba del producto',
            price: 30,
            discount: 50,
            brand: 'Nike',
            shipping: false,
            wishList: false
		},
		{
			id: 5,
			img: Product5,
			name: 'Nike Bew',
            category: 'Balones',
            description: 'Descripcion de prueba del producto',
            price: 80,
            discount: 0,
            brand: 'Nike',
            shipping: false,
            wishList: false
		},
		{
			id: 6,
			img: Product6,
			name: 'Tempo k2',
            category: 'Zapatos',
            description: 'Descripcion de prueba del producto',
            price: 430,
            discount: 20,
            brand: 'Nike',
            shipping: true,
            wishList: false
		},
        {
			id: 7,
			img: Product7,
			name: 'Franela Adidas',
            category: 'Franelas',
            description: 'Descripcion de prueba del producto',
            price: 40,
            discount: 20,
            brand: 'Adidas',
            shipping: false,
            wishList: false
		},
		{
			id: 8,
			img: Product8,
			name: 'Adidas Branco',
            category: 'Zapatos',
            description: 'Descripcion de prueba del producto',
            price: 80,
            discount: 0,
            brand: 'Adidas',
            shipping: false,
            wishList: false
		},
		{
			id: 9,
			img: Product9,
			name: 'Yezzi Twet',
            category: 'Zapatos',
            description: 'Descripcion de prueba del producto',
            price: 480,
            discount: 40,
            brand: 'Adidas',
            shipping: true,
            wishList: false
        },
        {
			id: 10,
			img: Product10,
			name: 'Franela Real Madrid CF Local',
            category: 'Franelas',
            description: 'Descripcion de prueba del producto',
            price: 70,
            discount: 20,
            brand: 'Adidas',
            shipping: true,
            wishList: false
		},
		{
			id: 11,
			img: Product11,
			name: 'Franela Real Madrid CF Visitante',
            category: 'Franelas',
            description: 'Descripcion de prueba del producto',
            price: 80,
            discount: 0,
            brand: 'Adidas',
            shipping: false,
            wishList: false
		},
		{
			id: 12,
			img: Product12,
			name: 'Franela Kok',
            category: 'Franelas',
            description: 'Descripcion de prueba del producto',
            price: 20,
            discount: 40,
            brand: 'Adidas',
            shipping: true,
            wishList: false
		},
		{
			id: 13,
			img: Product13,
			name: 'Franela Adidas Rot',
            category: 'Franelas',
            description: 'Descripcion de prueba del producto',
            price: 20,
            discount: 0,
            brand: 'Adidas',
            shipping: false,
            wishList: false
		},
		{
			id: 14,
			img: Product14,
			name: 'Franela Yezzi Rosa',
            category: 'Franelas',
            description: 'Descripcion de prueba del producto',
            price: 30,
            discount: 0,
            brand: 'Adidas',
            shipping: true,
            wishList: false
		},
		{
			id: 15,
			img: Product15,
			name: 'Short B10',
            category: 'Shorts',
            description: 'Descripcion de prueba del producto',
            price: 30,
            discount: 0,
            brand: 'Nike',
            shipping: true,
            wishList: false
		},
		{
			id: 16,
			img: Product16,
			name: 'Short Rex',
            category: 'Shorts',
            description: 'Descripcion de prueba del producto',
            price: 30,
            discount: 0,
            brand: 'Nike',
            shipping: true,
            wishList: false
		},
		{
			id: 17,
			img: Product17,
			name: 'Short Yezzi',
            category: 'Shorts',
            description: 'Descripcion de prueba del producto',
            price: 20,
            discount: 0,
            brand: 'Nike',
            shipping: false,
            wishList: false
		},
		{
			id: 18,
			img: Product18,
			name: 'Short Yezzi',
            category: 'Shorts',
            description: 'Descripcion de prueba del producto',
            price: 30,
            discount: 0,
            brand: 'Nike',
            shipping: true,
            wishList: false
		},
		{
			id: 19,
			img: Product19,
			name: 'Short Yazz',
            category: 'Shorts',
            description: 'Descripcion de prueba del producto',
            price: 30,
            discount: 5,
            brand: 'Adidas',
            shipping: false,
            wishList: false
		},
		{
			id: 20,
			img: Product20,
			name: 'Short Reme',
            category: 'Shorts',
            description: 'Descripcion de prueba del producto',
            price: 30,
            discount: 5,
            brand: 'Adidas',
            shipping: true,
            wishList: false
		}
    ],
    searchProducts: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SEARCH_PRODUCTS': 
            return {
                ...state,
                searchProducts: state.products.filter(product => product.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1)
            }
        case 'FILTER_BRANDS_PRODUCTS': 
            return {
                ...state,
                searchProducts: state.searchProducts.filter(product => action.payload.map(filterElement =>((product.brand === filterElement.name) && (filterElement.active ))))   
            }    
        case 'UPDATE_PRODUCTS': 
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload.id ? action.payload : product )
            }
        case 'DELETE_PRODUCTS':
            return {
                ...state,
                products: state.products.filter(cita => cita.id !== action.payload)
            }
        default:
            return state;
    }
}