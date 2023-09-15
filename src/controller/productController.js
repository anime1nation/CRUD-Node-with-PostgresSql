import {database} from '../database/databse.js'

async function createProduct(req,res){
    const{product_name,quantity,price} = req.body

    const {row} = await database.query("INSERT INTO productS (product_name, quantity, price) VALUES ($1, $2, $3)",
    [product_name, quantity, price]);
    console.log(row);
    res.status(200).json({message:'product saved successfully',body:{product_name,quantity,price}});
};

export {createProduct}