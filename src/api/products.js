import Products from "../pages/Products";

export function getAll(){
    return Promise.resolve(Products);
}

export function getById(id){
    const product = Products.find(product => product.id === id);

    return Promise.resolve(product);
}

export default {
    getAll,
    getById
}
