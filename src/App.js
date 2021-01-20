
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './components/Post';
import Pagination from './components/Pagination';

function App() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0);
    const [filterSearch,setFilterSeach] = useState([])

    useEffect(() => {
        fechPosts()
    }, [])
    const fechPosts = async () => {
        setLoading(true)
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setLoading(false)
        setPosts(res.data);
        setTotalPage(Math.ceil(res.data.length / 10))
    }
    const handleClick = (num) => {
        setPage(num)
    }
    const handleClickNext = () => {
        if (page < totalPage) {
            setPage(page + 1)
        }
    }
    const handleClickPrev = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    useEffect(() =>{
        setFilterSeach(
            posts.filter(item =>{
                return item.title.toLowerCase().includes(search.toLowerCase())
            })
        )
    },[search,posts])

    return (
        <div className="App">
            <input
                type="text"
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
            />
                {
                    loading ? <h3>Loading....</h3> :
                        <>
                            <Post
                                // posts={posts}
                                posts={filterSearch}
                                page={page}
                                search={search}
                            ></Post>
                            <Pagination
                                totalPage={totalPage}
                                handleClick={handleClick}
                                handleClickNext={handleClickNext}
                                handleClickPrev={handleClickPrev}
                                countPage={page}
                            ></Pagination>
                        </>

                }

        </div>
            );
        }
        
        export default App;
