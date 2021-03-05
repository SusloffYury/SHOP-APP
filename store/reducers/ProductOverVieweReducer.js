import Products from '../../data/dummy-data';


const initialState = {
    availableProducts: Products,
    userProducts: Products.filter(prod => prod.ownerId === 'u3'),
}

export default (state = initialState, action) => {
    return state;
}
