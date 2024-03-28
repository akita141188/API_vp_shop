const CategoryModel = require("../../models/categoryModel")
const ProductModel = require("../../models/productModel")
const pagination = require("../../../libs/pagination")
const slug = require("slug")
module.exports = {
    index :async (req,res)=>{
        const query = {};
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = page*limit - limit;
        
        const categories = await CategoryModel
        .find()
        .sort({_id:-1})
        .skip(skip)
        .limit(limit);
        res
        .status(200)
        .json({
            status : "success",
            filter : {
                page,
                limit
            },
            data : {
                docs : categories
            },
            page : await pagination(CategoryModel,query,page,limit)
        })
        
    },

    show : async (req,res)=>{
        const {id}= req.params;
        const category = await CategoryModel.findById(id)
        res.status(200)
        .json({
            status : "success",
            data : category,    
        })
    },

    createCategory : async (req,res)=>{
        const {body} = req;
        const category = {
            title : body.title,
            description : body.description,
            slug : slug(body.title)
        }
        await new CategoryModel(category).save();
        res
        .status(201)
        .json({
            status : "success",
            message : " create comment successfully"
        })
    },

    products : async(req,res)=>{
        const query = {};
        query.cat_id = req.params.id;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = page*limit - limit;
        const products = await ProductModel
        .find(query)
        .sort({_id:-1})
        .limit(limit)
        .skip(skip);
        res.status(200)
        .json({
            status : "success",
            data : {
                docs : products
            },
            filter : {
                page,
                limit,
            },
            pages: await pagination(ProductModel, query, page, limit),
        })
    },
}