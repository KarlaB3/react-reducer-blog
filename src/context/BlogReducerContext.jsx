import { createContext, useContext, useReducer } from "react";
import { blogReducer, initialBlogPosts } from "../reducers/BlogReducer";


export const BlogContext = createContext(null);
export const BlogDispatchContext = createContext(null);

export function useBlogContext() {
    return useContext(BlogContext);
}

export function useBlogDispatch() {
    return useBlogContext(BlogDispatchContext);
}

export function BlogProvider({children}) {

    const [blogs, dispatch] = useReducer(blogReducer, initialBlogPosts);

    return (
        <BlogContext.Provider value={blogs}>
            <BlogDispatchContext.Provider value={dispatch}>
                {children}
            </BlogDispatchContext.Provider>
        </BlogContext.Provider>
    )
}