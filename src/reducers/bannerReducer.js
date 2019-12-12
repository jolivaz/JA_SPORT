import Banner1 from '../images/banner1.jpg'
import Banner2 from '../images/banner2.png'
import Banner3 from '../images/banner3.jpg'

const initialState = {
    banner: [
		{
			id: 1,
			img: Banner1,
			title: '',
			description: ''
		},
		{
			id: 2,
			img: Banner2,
			title: '',
			description: ''
		},
		{
			id: 3,
			img: Banner3,
			title: '',
			description: ''
		}
	]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'VALIDAR_BANNER': 
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}