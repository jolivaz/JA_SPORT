import Product1 from '../images/product1.jpg'
import Product1x1 from '../images/product1x1.jpg'
import Product1x2 from '../images/product1x2.jpg'
import Product2 from '../images/product2.jpg'
import Product2x2 from '../images/product2x2.jpg'
import Product3 from '../images/product3.jpg'
import Product3x1 from '../images/product3x1.jpg'
import Product4 from '../images/product4.jpg'
import Product5 from '../images/product5.jpg'
import Product5x1 from '../images/product5x1.jpg'
import Product6 from '../images/product6.jpg'
import Product6x1 from '../images/product6x1.jpg'
import Product7 from '../images/product7.jpg'
import Product8 from '../images/product8.jpg'
import Product9x1 from '../images/product9x1.jpg'
import Product9 from '../images/product9.jpg'
import Product10 from '../images/product10.jpg'
import Product10x1 from '../images/product10x1.jpg'
import Product10x2 from '../images/product10x2.jpg'
import Product10x3 from '../images/product10x3.jpg'
import Product11 from '../images/product11.jpg'
import Product12 from '../images/product12.jpg'
import Product13 from '../images/product13.jpg'
import Product13x1 from '../images/product13x1.jpg'
import Product14 from '../images/product14.jpg'
import Product15 from '../images/product15.jpg'
import Product16 from '../images/product16.jpg'
import Product17 from '../images/product17.jpg'
import Product18 from '../images/product18.jpg'
import Product19 from '../images/product19.jpg'
import Product20 from '../images/product20.jpg'
import Product21 from '../images/product21.jpg'
import Product21x1 from '../images/product21x1.jpg'
import Product21x2 from '../images/product21x2.jpg'
import Product22 from '../images/product22.jpg'
import Product23 from '../images/product23.jpg'
import Product23x1 from '../images/product23x1.jpg'
import Product23x2 from '../images/product23x2.jpg'
import fondoPuma from '../images/fondopuma.jpg'
import fondoNike from '../images/fondonike.jpg'
import fondoAdidas from '../images/fondoadidas.jpg'

const initialState = {
    products: [
		{
			id: 1,
			img: Product1,
			name: 'Nike Air Max 1',
            category: 'Zapatos',
            description: 'El calzado deportivo es un tipo de calzado utilizado para practicar deporte. Generalmente posee un cuerpo fabricado en piel, lona y/o materiales sintéticos y una suela de goma que favorece una mayor adherencia, así como más flexibilidad.',
            price: 200,
            discount: 15,
            brand: 'Nike',
            shipping: true,
            wishList: false,
            gallery: [            
            {
                original: Product1,
                thumbnail: Product1,
            },
            {
                original: Product1x1,
                thumbnail: Product1x1,
            },
            {
                original: Product1x2,
                thumbnail: Product1x2,
            }]
		},
		{
			id: 2,
			img: Product2,
			name: 'Bride Rex',
            category: 'Zapatos',
            description: 'El calzado deportivo es un tipo de calzado utilizado para practicar deporte. Generalmente posee un cuerpo fabricado en piel, lona y/o materiales sintéticos y una suela de goma que favorece una mayor adherencia, así como más flexibilidad.',
            price: 230,
            discount: 10,
            brand: 'Nike',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product2,
                    thumbnail: Product2,
                },
                {
                    original: Product2x2,
                    thumbnail: Product2x2,
                }
            ]
		},
		{
			id: 3,
			img: Product3,
			name: 'Dadd k25',
            category: 'Zapatos',
            description: 'El calzado deportivo es un tipo de calzado utilizado para practicar deporte. Generalmente posee un cuerpo fabricado en piel, lona y/o materiales sintéticos y una suela de goma que favorece una mayor adherencia, así como más flexibilidad.',
            price: 400,
            discount: 0,
            brand: 'Nike',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product3,
                    thumbnail: Product3,
                },
                {
                    original: Product3x1,
                    thumbnail: Product3x1,
                }
            ]
        },
        {
			id: 4,
			img: Product4,
			name: 'Franela J20',
            category: 'Franelas',
            description: 'Una camiseta, franela, casaca, playera, polera, polo o remera es una prenda de vestir por lo general de mangas cortas, cuello redondo, sin bolsillos y sin botones a lo largo de su parte frontal (este último detalle es el que las distingue de las camisas, aunque pueden tener dos o tres en la parte superior delantera para ampliar la abertura del cuello).',
            price: 30,
            discount: 50,
            brand: 'Nike',
            shipping: false,
            wishList: false,
            gallery: [            
                {
                    original: Product4,
                    thumbnail: Product4,
                }
            ]
		},
		{
			id: 5,
			img: Product5,
			name: 'Balon Nike Bew',
            category: 'Balones',
            description: 'El balón de fútbol utilizado en competiciones oficiales es regulado en sus medidas por la FIFA. Tiene forma de icosaedro truncado en un 99.9%, una circunferencia entre 68 y 70 centímetros y un peso entre 410 y 450 gramos.',
            price: 80,
            discount: 0,
            brand: 'Nike',
            shipping: false,
            wishList: false,
            gallery: [            
                {
                    original: Product5,
                    thumbnail: Product5,
                },
                {
                    original: Product5x1,
                    thumbnail: Product5x1,
                }
            ]
		},
		{
			id: 6,
			img: Product6,
			name: 'Tempo k2',
            category: 'Zapatos',
            description: 'El calzado deportivo es un tipo de calzado utilizado para practicar deporte. Generalmente posee un cuerpo fabricado en piel, lona y/o materiales sintéticos y una suela de goma que favorece una mayor adherencia, así como más flexibilidad.',
            price: 430,
            discount: 20,
            brand: 'Nike',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product6,
                    thumbnail: Product6,
                },
                {
                    original: Product6x1,
                    thumbnail: Product6x1,
                }
            ]
		},
        {
			id: 7,
			img: Product7,
			name: 'Franela Adidas',
            category: 'Franelas',
            description: 'Una camiseta, franela, casaca, playera, polera, polo o remera es una prenda de vestir por lo general de mangas cortas, cuello redondo, sin bolsillos y sin botones a lo largo de su parte frontal (este último detalle es el que las distingue de las camisas, aunque pueden tener dos o tres en la parte superior delantera para ampliar la abertura del cuello).',
            price: 40,
            discount: 20,
            brand: 'Adidas',
            shipping: false,
            wishList: false,
            gallery: [            
                {
                    original: Product7,
                    thumbnail: Product7,
                }
            ]
		},
		{
			id: 8,
			img: Product8,
			name: 'Adidas Branco',
            category: 'Zapatos',
            description: 'El calzado deportivo es un tipo de calzado utilizado para practicar deporte. Generalmente posee un cuerpo fabricado en piel, lona y/o materiales sintéticos y una suela de goma que favorece una mayor adherencia, así como más flexibilidad.',
            price: 80,
            discount: 0,
            brand: 'Adidas',
            shipping: false,
            wishList: false,
            gallery: [            
                {
                    original: Product8,
                    thumbnail: Product8,
                }
            ]
		},
		{
			id: 9,
			img: Product9,
			name: 'Yezzi Twet',
            category: 'Zapatos',
            description: 'El calzado deportivo es un tipo de calzado utilizado para practicar deporte. Generalmente posee un cuerpo fabricado en piel, lona y/o materiales sintéticos y una suela de goma que favorece una mayor adherencia, así como más flexibilidad.',
            price: 480,
            discount: 40,
            brand: 'Adidas',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product9,
                    thumbnail: Product9,
                },
                {
                    original: Product9x1,
                    thumbnail: Product9x1,
                }
            ]
        },
        {
			id: 10,
			img: Product10,
			name: 'Franela Real Madrid CF Local',
            category: 'Franelas',
            description: 'Una camiseta, franela, casaca, playera, polera, polo o remera es una prenda de vestir por lo general de mangas cortas, cuello redondo, sin bolsillos y sin botones a lo largo de su parte frontal (este último detalle es el que las distingue de las camisas, aunque pueden tener dos o tres en la parte superior delantera para ampliar la abertura del cuello).',
            price: 70,
            discount: 20,
            brand: 'Adidas',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product10,
                    thumbnail: Product10,
                },
                {
                    original: Product10x1,
                    thumbnail: Product10x1,
                },
                {
                    original: Product10x2,
                    thumbnail: Product10x2,
                },
                {
                    original: Product10x3,
                    thumbnail: Product10x3,
                }
            ]
		},
		{
			id: 11,
			img: Product11,
			name: 'Franela Real Madrid CF Visitante',
            category: 'Franelas',
            description: 'Una camiseta, franela, casaca, playera, polera, polo o remera es una prenda de vestir por lo general de mangas cortas, cuello redondo, sin bolsillos y sin botones a lo largo de su parte frontal (este último detalle es el que las distingue de las camisas, aunque pueden tener dos o tres en la parte superior delantera para ampliar la abertura del cuello).',
            price: 80,
            discount: 0,
            brand: 'Adidas',
            shipping: false,
            wishList: false,
            gallery: [            
                {
                    original: Product11,
                    thumbnail: Product11,
                }
            ]
		},
		{
			id: 12,
			img: Product12,
			name: 'Franela Kok',
            category: 'Franelas',
            description: 'Una camiseta, franela, casaca, playera, polera, polo o remera es una prenda de vestir por lo general de mangas cortas, cuello redondo, sin bolsillos y sin botones a lo largo de su parte frontal (este último detalle es el que las distingue de las camisas, aunque pueden tener dos o tres en la parte superior delantera para ampliar la abertura del cuello).',
            price: 20,
            discount: 40,
            brand: 'Adidas',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product12,
                    thumbnail: Product12,
                }
            ]
		},
		{
			id: 13,
			img: Product13,
			name: 'Franela Adidas Rot',
            category: 'Franelas',
            description: 'Una camiseta, franela, casaca, playera, polera, polo o remera es una prenda de vestir por lo general de mangas cortas, cuello redondo, sin bolsillos y sin botones a lo largo de su parte frontal (este último detalle es el que las distingue de las camisas, aunque pueden tener dos o tres en la parte superior delantera para ampliar la abertura del cuello).',
            price: 20,
            discount: 0,
            brand: 'Adidas',
            shipping: false,
            wishList: false,
            gallery: [            
                {
                    original: Product13,
                    thumbnail: Product13,
                },
                {
                    original: Product13x1,
                    thumbnail: Product13x1,
                }
            ]
		},
		{
			id: 14,
			img: Product14,
			name: 'Franela Yezzi Rosa',
            category: 'Franelas',
            description: 'Una camiseta, franela, casaca, playera, polera, polo o remera es una prenda de vestir por lo general de mangas cortas, cuello redondo, sin bolsillos y sin botones a lo largo de su parte frontal (este último detalle es el que las distingue de las camisas, aunque pueden tener dos o tres en la parte superior delantera para ampliar la abertura del cuello).',
            price: 30,
            discount: 0,
            brand: 'Adidas',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product14,
                    thumbnail: Product14,
                }
            ]
		},
		{
			id: 15,
			img: Product15,
			name: 'Short B10',
            category: 'Shorts',
            description: 'Versatil modelo de bolsillos profundos, pretina elasticada y confeccionado en tela comoda y fresca que se mueve contigo mientras practicas y juegas.',
            price: 30,
            discount: 0,
            brand: 'Nike',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product15,
                    thumbnail: Product15,
                }
            ]
		},
		{
			id: 16,
			img: Product16,
			name: 'Short Rex',
            category: 'Shorts',
            description: 'Versatil modelo de bolsillos profundos, pretina elasticada y confeccionado en tela comoda y fresca que se mueve contigo mientras practicas y juegas.',
            price: 30,
            discount: 0,
            brand: 'Nike',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product16,
                    thumbnail: Product16,
                }
            ]
		},
		{
			id: 17,
			img: Product17,
			name: 'Short Yezzi',
            category: 'Shorts',
            description: 'Versatil modelo de bolsillos profundos, pretina elasticada y confeccionado en tela comoda y fresca que se mueve contigo mientras practicas y juegas.',
            price: 20,
            discount: 0,
            brand: 'Nike',
            shipping: false,
            wishList: false,
            gallery: [            
                {
                    original: Product17,
                    thumbnail: Product17,
                }
            ]
		},
		{
			id: 18,
			img: Product18,
			name: 'Short Yezzi',
            category: 'Shorts',
            description: 'Versatil modelo de bolsillos profundos, pretina elasticada y confeccionado en tela comoda y fresca que se mueve contigo mientras practicas y juegas.',
            price: 30,
            discount: 0,
            brand: 'Nike',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product18,
                    thumbnail: Product18,
                }
            ]
		},
		{
			id: 19,
			img: Product19,
			name: 'Short Yazz',
            category: 'Shorts',
            description: 'Versatil modelo de bolsillos profundos, pretina elasticada y confeccionado en tela comoda y fresca que se mueve contigo mientras practicas y juegas.',
            price: 30,
            discount: 5,
            brand: 'Adidas',
            shipping: false,
            wishList: false,
            gallery: [            
                {
                    original: Product19,
                    thumbnail: Product19,
                }
            ]
		},
		{
			id: 20,
			img: Product20,
			name: 'Short Reme',
            category: 'Shorts',
            description: 'Versatil modelo de bolsillos profundos, pretina elasticada y confeccionado en tela comoda y fresca que se mueve contigo mientras practicas y juegas.',
            price: 30,
            discount: 5,
            brand: 'Adidas',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product20,
                    thumbnail: Product20,
                }
            ]
        },
        {
			id: 21,
			img: Product21,
			name: 'Balon Puma k21',
            category: 'Balones',
            description: 'El balón de fútbol utilizado en competiciones oficiales es regulado en sus medidas por la FIFA. Tiene forma de icosaedro truncado en un 99.9%, una circunferencia entre 68 y 70 centímetros y un peso entre 410 y 450 gramos.',
            price: 250,
            discount: 0,
            brand: 'Puma',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product21,
                    thumbnail: Product21,
                },
                {
                    original: Product21x1,
                    thumbnail: Product21x1,
                },
                {
                    original: Product21x2,
                    thumbnail: Product21x2,
                }
            ]
        },
        {
			id: 22,
			img: Product22,
			name: 'Balon Puma k22',
            category: 'Balones',
            description: 'El balón de fútbol utilizado en competiciones oficiales es regulado en sus medidas por la FIFA. Tiene forma de icosaedro truncado en un 99.9%, una circunferencia entre 68 y 70 centímetros y un peso entre 410 y 450 gramos.',
            price: 140,
            discount: 0,
            brand: 'Puma',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product22,
                    thumbnail: Product22,
                }
            ]
        },
        {
			id: 23,
			img: Product23,
			name: 'Balon Puma League2',
            category: 'Balones',
            description: 'El balón de fútbol utilizado en competiciones oficiales es regulado en sus medidas por la FIFA. Tiene forma de icosaedro truncado en un 99.9%, una circunferencia entre 68 y 70 centímetros y un peso entre 410 y 450 gramos.',
            price: 120,
            discount: 0,
            brand: 'Puma',
            shipping: true,
            wishList: false,
            gallery: [            
                {
                    original: Product23,
                    thumbnail: Product23,
                },
                {
                    original: Product23x1,
                    thumbnail: Product23x1,
                },
                {
                    original: Product23x2,
                    thumbnail: Product23x2,
                }
            ]
		}
    ],
    searchProducts: [],
    labelSearch: '',
    categoryListFilter: [],
    brandListFilter: [],
    recommended:{
        nike: [
            {
                img: fondoNike
            },
            {
                id: 1,
                img: Product1
            },
            {
                id: 2,
                img: Product2
            },
            {
                id: 5,
                img: Product5
            }
        ],
        adidas: [
            {
                img: fondoAdidas
            },
            {
                id: 7,
                img: Product7
            },
            {
                id: 8,
                img: Product8
            },
            {
                id: 9,
                img: Product9
            },
        ],
        puma: [
                {
                    img: fondoPuma
                },
                {
                    id: 21,
                    img: Product21
                },
                {
                    id: 22,
                    img: Product22
                },
                {
                    id: 23,
                    img: Product23
                }
        ]
    } 
}
 

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SEARCH_PRODUCTS': 
            return {
                ...state,
                labelSearch: action.payload.toLowerCase(),
                searchProducts: state.products.filter(
                    product => product.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 && 
                    product.brand.indexOf(state.brandListFilter) !== -1 &&
                    product.category.indexOf(state.categoryListFilter) !== -1
                )
            }
        case 'FILTER_BRANDS_PRODUCTS': 
            return {
                ...state,
                brandListFilter: action.payload,
                searchProducts: state.products.filter(
                    product => product.brand.indexOf(action.payload) !== -1 && 
                    product.category.indexOf(state.categoryListFilter) !== -1 &&
                    product.name.toLowerCase().indexOf(state.labelSearch.toLowerCase()) !== -1
                )   
            }
        case 'FILTER_CATEGORY_PRODUCTS': 
            return {
                ...state,
                categoryListFilter: action.payload,
                searchProducts: state.products.filter(
                    product => product.category.indexOf(action.payload) !== -1 && 
                    product.brand.indexOf(state.brandListFilter) !== -1 &&
                    product.name.toLowerCase().indexOf(state.labelSearch.toLowerCase()) !== -1
                )   
            }          
        case 'UPDATE_PRODUCTS': 
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload.id ? action.payload : product )
            }
        case 'DELETE_PRODUCTS':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        default:
            return state;
    }
}