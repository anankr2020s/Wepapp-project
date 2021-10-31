interface Products {
    type: string,
    id:   string,
    name: string,
    detail: string,
    quantity: number,
    price:  number,
    file:   string,
    img:    string
}

export type productsType = Products[];