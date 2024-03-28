const OderModel = require("../../models/oderModel")
const ProductModel = require("../../models/productModel")
const transporter = require("../../../libs/mail")
const ejs = require("ejs")
const path = require("path")
const _ = require("lodash")
module.exports = {
    oder: async (req, res) => {
        const { body } = req;
        const total_price = body.items.reduce((total, item) => total + item.price * item.qty, 0)
        const idsPrd = body.items.map((item)=> item.prd_id)
        const products = await ProductModel.find({_id: {$in:idsPrd}}) // Tìm ra sản phẩm có id thuộc mảng
        
        const items = [];
        for(let product of products){
            const cart = _.find(body.items, {prd_id: product._id.toString()})
            if(cart){
                cart.name = product.name;
                items.push(cart)
            }
        }
        const html = await ejs.renderFile(path.join(__dirname,"..","..","..","resources","views","mail.ejs"),
            {
                full_name : body.full_name,
                phone : body.phone,
                address : body.address,
                items,
                total_price,
        })
        await transporter.sendMail({
            from: '"VietPro Store 👻" <quantri.vietproshop@gmail.com>', // sender address
            to: body.email, // list of receivers
            subject: "Xác nhận đơn hàng ✔", // Subject line
            html, // html body
          });


        // Create Oder
        const oder = {
            full_name: body.full_name,
            phone: body.phone,
            email: body.email,
            address: body.address,
            total_price: total_price,
            items: body.items
        }

        await OderModel(oder).save();
        res
            .status(201)
            .json({
                status: " success",
                message: " create Oder Successfuly"
            })
    }
}