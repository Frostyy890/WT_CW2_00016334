export class User {
    constructor(id, username, email, password) {
        this.id = id,
        this.username = username,
        this.email = email
        this.password = password
    }
}

export class Product {
    constructor(id, name, price, description, stockQuantity) {
        this.id = id,
        this.name = name,
        this.price = price,
        this.description = description,
        this.stockQuantity = stockQuantity
    }
}