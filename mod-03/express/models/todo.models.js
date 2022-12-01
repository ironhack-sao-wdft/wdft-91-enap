import { model, Schema } from "mongoose";

const todoSchema = new Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String,
            maxlength: 50
        },
        deadline: {
            type: Date
        },
        // um responsável pela tarefa
        responsable: {
            // pegar o id do que queremos recuperar
            type: Schema.Types.ObjectId,
            // a referência do que a gente quer recuperar
            ref: "Employee"
        }
    },
    {
        timestamps: true
    }
)

const TodoModel = model("Todo", todoSchema)

export default TodoModel