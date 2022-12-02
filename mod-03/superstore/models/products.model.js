import { model, Schema } from "mongoose"

// schemas
const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number
        },
        category: {
            type: String,
            enum: ["Móveis", "Plantas", "Ferramentas"]
        },
        // orders: [
        //  ObjectId("123kdjdkasjd"),
        //  ObjectId("2324235sdkjdfsds"),
        // ]
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: ""
            }
        ]
    }
)

// cria o modelo (model)
const ProductModel = model("Product", productSchema)

// exportar para rotas
export default ProductModel