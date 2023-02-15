export const options = {
    // client: 'mysql',
    // connection: {
    //     host:'127.0.0.1',
    //     user: 'root',
    //     database: 'ecomerce_01'
    // }

    //Parametros de SQLITE3
    client: 'sqlite3',
    connection: {
        filename: '../db/ecommerce.sqlite'
    },
    useNullAsDefault: true
}