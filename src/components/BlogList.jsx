import { useContext, useReducer } from "react";
import { blogReducer, initialBlogPosts } from "../reducers/BlogReducer";
import { BlogContext, BlogDispatchContext, useBlogContext, useBlogDispatch } from "../context/BlogReducerContext";


export function BlogList (props) {
    const state = useBlogContext;
    const dispatch = useBlogDispatch;
    
    return (
        <div>
            {state.map((blogPost) => {
                return (
                    <div key={blogPost.id}>
                        <h1>{blogPost.title}</h1>
                        <p>{blogPost.content}</p>
                        <button onClick={() => {dispatch({type:"delete", newData:{id: blogPost.id}})}}>
                            Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
}