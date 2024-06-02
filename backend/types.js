const zod= require("zod");

const createTodoZ= zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateTodoZ = zod.object({
    id: zod.string()
})

module.exports={
    createTodoZ: createTodoZ,
    updateTodoZ: updateTodoZ
}