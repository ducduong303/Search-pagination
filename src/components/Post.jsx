import React, { useEffect, useState } from 'react';
import PostChidren from './PostChidren';


function Post({ posts, page, search }) {
    const startIndex = (page - 1) * 10;

    // 
    
    const render = () =>{
        var selecPost = null;
        if (search) {
             selecPost = posts
        }else{
             selecPost = posts.slice(startIndex, startIndex + 10);
        }
        return selecPost
    }
    return (
        <div>
            {
                render().map((item, index) => {
                    return <PostChidren
                        post={item}
                        key={index}
                    ></PostChidren>
                })
            }
        </div>
    );
}

export default Post;