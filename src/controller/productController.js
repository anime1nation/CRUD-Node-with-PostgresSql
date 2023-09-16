import {database} from '../database/databse.js'

async function createProduct(req,res){
    const {productname,quantity,price} = req.body
    console.log(req.body);
    const {rows} = await database.query("INSERT INTO products (productname, quantity, price) VALUES ($1, $2, $3)",
    [productname, quantity, price]);
    console.log(rows);
    res.status(200).json({message:'product saved successfully',body:{productname,quantity,price}});
};

async function getProduct(req,res){
    const{rows} = await database.query("SELECT * FROM products");
    res.status(200).json({message:'product fetched successfully',body:{rows}});
}

async function updateProduct(req,res){
    const{rows} = await database.query("SELECT * FROM products");
    res.status(200).json({message:'product fetched successfully',body:{rows}});
}

async function deleteProduct(req,res){
    console.log(req.params.id);
    const{rows} = await database.query("DELETE FROM products WHERE productid = $1", [req.params.id]);
    res.status(200).json({message:'product deleted successfully',body:{rows}});
}

export {createProduct,getProduct,updateProduct,deleteProduct}