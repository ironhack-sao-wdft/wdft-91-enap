import { model, Schema }  from "mongoose"

const employeeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            lowercase: true
        },
        role: {
            type: String,
            enum: ["T.I", "Marketing", "People", "CEO", "Estagiário"]
        },
        age: {
            type: Number,
        },
        active: {
            type: Boolean,
            default: true
        },
        address: {
            city: { type: String } 
        }
    },
    {
        timestamps: true,
    }
)

        // tem que ser no singular -> collection ele vira plural
const EmployeeModel = model("Employee", employeeSchema)

export default EmployeeModel