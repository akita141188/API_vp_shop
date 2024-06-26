const mongoose = require("../../common/database")();


const productSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        default: 0,
    },
    cat_id: {
        type: mongoose.Types.ObjectId,
        ref: "Categories",
        required: true,
        // <%=category._id%>
    },
    price: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        default: "",
    },
    featured: {
        type: Boolean,
        default: false,
    },
    promotion: {
        type: String,
        default: "",
    },
    warranty: {
        type: String,
        required: true,
    },
    accessories: {
        type: String,
        default: "",
    },
    promotion: {
        type: String,
        default: "",
    },
    is_stock: {
        type: Boolean,
        default: true,
    },
    name: {
        type: String,
        required: true,
        text : true
    },
    slug: {
        type: String,
        required: true,
    },

},{
        timestamps: true,
});

const productModel = mongoose.model("Products",productSchema,"products");
module.exports = productModel;