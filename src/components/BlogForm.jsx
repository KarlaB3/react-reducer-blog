import { useContext, useReducer, useState } from "react";
import { blogReducer, initialBlogPosts } from "../reducers/BlogReducer";
import { BlogDispatchContext } from "../context/BlogReducerContext";


export function BlogForm(props){
    const dispatch = useContext(BlogDispatchContext);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeContent = (event) => {
        setContent(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("This data was submitted via form:\n" + JSON.stringify({title, content}))
        dispatch({type:"create", newData: {title, content}});
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input type="text" value={title} onChange={handleChangeTitle} />
                <label>Content:</label>
                <input type="text" value={content} onChange={handleChangeContent} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}