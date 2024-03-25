const ProductModel = require("../../models/productModel")
const CommentModel = require("../../models/commentModel")
const pagination = require("../../../libs/pagination")
module.exports = {
    index: async (req, res) => {
        const query = {};
        query.is_stock = req.query.is_stock || true;
        query.featured = req.query.featured || false;
        const page = parseInt(req.query.page ) || 1;
        const limit = parseInt(req.query.limit ) || 10;
        const skip = page * limit - limit;
        const products = await ProductModel
            .find(query)
            .sort({ _id: -1 })
            .skip(skip)
            .limit(limit);
        res
            .status(200)
            .json({
                status: "success",
                filter: {
                    is_stock: query.is_stock,
                    featured: query.featured,
                    page,
                    limit,

                },
                data: {
                    docs: products,
                },
                pages: await pagination(ProductModel, query, limit, page)
            })
    },
    show : async (req,res)=> {
        const {id} = req.params;
        const product = await ProductModel.findById(id);
        res
        .status(200)
        .json({
            status : "success",
            data : product,

        })
    },
    comments : async (req,res)=> {
        const query = {};
        query.prd_id = req.params.id;
        const page = parseInt(req.query.page)  || 1;
        const limit = parseInt(req.query.limit)  || 10;
        const skip = page*limit - limit;
        const comments = await CommentModel
        .find(query)
        .sort({_id:-1})
        .limit(limit)
        .skip(skip);
        res
        .status(200)
        .json({
            status : "success",
            data :{
                docs : comments
            },
            filter :{
                page,
                limit,
            },
            pages :await pagination(CommentModel,query,page,limit)
        })
    },
    storeComments :async (req,res)=> {
        const {id} = req.params;
        const {body} = req;
        const comment = {
            full_name : body.full_name,
            email : body.email,
            body : body.body,
            prd_id : id,
        }
        await new CommentModel(comment).save();
        res
        .status(201)
        .json({
            status : "success",
            message : " create comment successfully"
        })
    },

}