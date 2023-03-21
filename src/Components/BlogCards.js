// import React from "react";
import React, {useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import "./BlogCards.css";

// Blog Card
const BlogCards = (props) => {
  console.log(props)
  const [blogList, setBlogList] = useState(props)
  const navigate = useNavigate();

  console.log(blogList)

  // const [blogList, setBlogList] = useState(props);
  // console.log(blogList)
  
  //   //load the blog items from the back end 
  //   useEffect(() => {
  //       axios.get(`${urlEndPoint}/blogs/all`)
  //     .then(function (response) {
  //       setBlogList(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(`Client Error Point 2: `+ error);
  //     })
  //   }, [blogList])

  const DeleteCard=(props)=>{
      // axios.delete(`${urlEndPoint}/blogs/deleteOne/${props}`)
      // .then(function (response) {
      //   console.log(response);
      //   const newList = axios.get(`${urlEndPoint}/blogs/all`)
      //   // .then(function(res){
      //     setBlogList(newList)
      //     console.log(blogList)
      //   // });
      //   // navigate("/list")
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
  }

  const blogCards = blogList.map((blog) => {
    
    return (
      <div className="card col" key={blog.id}>
          <div className="card-block">
            <h2 className="card-title text-center"><b>Title:  {blog.title}</b></h2>
            <ul className="list-group list-group-flush text-left">
              <li className="list-group-item"><b>Author:</b>  {blog.author}</li>
              <li className="list-group-item"><b>ID:</b>  {blog.id}</li>
              <li className="list-group-item"><b>Text:</b>  {blog.text}</li>
              <li className="list-group-item"><b>Categories:</b>   {blog.categories
              .join(", ")
              }</li>
              <li className="list-group-item"><b>Creation Date:</b>  {blog.createdAt}</li>
              <li className="list-group-item"><b>Last Updated:</b>   {blog.updatedAt}</li>
              <button className="deleteCard" 
              onClick={()=>{
                DeleteCard(blog.id)
                // App()
                
              }}
              >Delete Blog</button>
            </ul>
        </div>
      </div>
    );
  });
  return (
    <div >
      <div className="row align-items-start">{blogCards}</div>
    </div>
  );
};

export default BlogCards;
