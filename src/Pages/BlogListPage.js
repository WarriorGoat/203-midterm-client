import { useEffect, useState } from "react";
import axios from "axios";
import BlogCards from "../Components/BlogCards";

const BlogListPage = (props) => {
  const [blogList, setBlogList] = useState([]);

  //load the blog items from the back end
  
    const pullData=async() =>{
      axios
      .get(`${process.env.REACT_APP_BACKEND}/blogs/all`)
      .then(res=>{
        // console.log(res.data)
        setBlogList(res.data)
      })
      .catch(function (error) {
        console.log(`Client Error Point 2: ` + error);
      })
    }

      useEffect(() => {
        pullData()
  }, []);

  console.log(blogList)

  return (
    <div className="BlogListPage container">
      <h2 className="display-4 text-center">Here is your List of Blogs</h2>
      <div>
        {/* <BlogCards blogList={blogList} /> */}
      </div>
    </div>
  );
};

export default BlogListPage;
