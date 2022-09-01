
import { getPosts } from "../../shared/posts";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Audio } from 'react-loader-spinner';

const PostsPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(()=> {
        const fetchPosts = async() => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
    
                const result = await getPosts();
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...result],
                    }
                })
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                    }
                })
            }
        };

        fetchPosts();
    }, [setState]);

    const {items, loading, error} = state;

    const elements = items.map(({id, title}) => 
        <li key={id}>
            <Link to={`/posts/${id}`}>{title}</Link>
        </li>
    )

    return (
        <div className="container">
            <ol>{elements}</ol>
            {loading &&
                 <Audio 
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                 />
            }
           
            {error && <p>...Posts loading failed</p>}
        </div>
    )
}

export default PostsPage;