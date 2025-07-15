import type { Post, PostResponse } from "~/types/Post";

export const useDummyJsonApi = () => {
    const { $appFetch } = useNuxtApp();
    
    const getPosts = (fakeDelay:number) => $appFetch.get<PostResponse>("posts", {
        query: {
            delay: fakeDelay,
        },
    });

    const getPostById = (id:number, fakeDelay:number) => $appFetch.get<Post>(`posts/${id}`, {
        query: {
            delay: fakeDelay,
        },
    });

    return {
        getPosts,
        getPostById,
    }
}