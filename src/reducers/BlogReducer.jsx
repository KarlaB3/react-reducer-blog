
const initialBlogPosts = [
    {
        id: 1,
        title: "Welcome to your new blog!",
        content: "Have fun! Become the next big blogger!"
    }
]

const blogReducer = (previousState, instructions) => {

    let stateEditable = null;

    switch (instructions.type) {
        case "create":
            stateEditable = [...previousState]
            if (instructions.newData.title.length <= 1){
                console.log("New post title is too short.");
                return previousState;
            }
            if (instructions.newData.content.length <= 1){
                console.log("New post content is too short.");
                return previousState;
            }
            instructions.newData.id = stateEditable.length + 1;
            instructions.newData.title = instructions.newData.title.charAt(0).toUpperCase() + instructions.newData.title.slice(1);
            instructions.newData.content = instructions.newData.content.charAt(0).toUpperCase() + instructions.newData.content.slice(1);

            stateEditable.push(instructions.newData);

            return stateEditable;
        case "delete":
            stateEditable = [...previousState]

            return stateEditable.filter(post => post.id !== instructions.newData.id);
        default:
            return previousState;
    }
}

module.exports = {
    blogReducer, initialBlogPosts
}