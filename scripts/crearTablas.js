import knex from 'knex'
import { options } from "./mysqlDB.js";

// opciones SQL: mariaDb, sqlite3

const knexConnection = knex(options);

//------------------------------------------
    try {
        // _01
        console.log('Iniciando Script...');
        await knexConnection.schema.dropTableIfExists('productos')

        await knexConnection.schema.createTable('productos', table => {
            table.increments('id').primary()
            table.string('title', 30).notNullable()
            table.float('price').notNullable()
            table.string('description', 50).notNullable()
            table.string('thumbnail')
            table.float('stock').notNullable()
        })
        console.log('tabla productos creada con éxito')
    } catch (error) {
        console.log('error al crear tabla productos')
        console.log(error)
    }

//------------------------------------------
    try {
        await knexConnection.schema.dropTableIfExists('carritos')

        await knexConnection.schema.createTable('carritos', table => {
            table.increments('id').primary()
            table.boolean('deleted').defaultTo(false)
        })
        console.log('carritos creada con exito');

        await knexConnection.schema.dropTableIfExists('prodsEnCarritos')

        await knexConnection.schema.createTable('prodsEnCarritos', table => {
            table.increments('id').primary()
            table.string('title', 30).notNullable()
            table.float('price').notNullable()
            table.string('description', 50).notNullable()
            table.string('thumbnail')
            table.float('stock').notNullable()
        })
        console.log('tablas carritos creada con éxito')
        
        console.log('insertando productos');
        const productos = [
            {
                idCarrito: 112390,
                timestamp: 1646028665583,
                creationDate: "12/7/2022",
                usuario: "Gabo1"
            },
            {
                idCarrito: 111990,
                timestamp: 1670473648469,
                creationDate: "12/7/2022",
                usuario: "gabo2",
            }
        ]
        knexConnection('productos').insert(productos)
        .then(()=> console.log('datos cargados'))
        .catch((err) => console.log(err))
        await knexConnection.destroy()
    } catch (error) {
        console.log('error al crear tablas carritos')
        console.log(error);
        await knexConnection.destroy()
    }
