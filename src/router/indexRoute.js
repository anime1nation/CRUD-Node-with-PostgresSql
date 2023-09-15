import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/api',(req,res)=>{
    res.status(200).json({
        sucess: true,
        message:`lets do CRUD with Node and Postgres`,
        version: '1.0.0',
    })
});

export {indexRouter}