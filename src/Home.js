
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   const {error, isPending, data: blogs} = useFetch('http://localhost:8000/blogs')

    
    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter((blog)=> blog.id !== id)
    //     setBlog s(newBlogs)
    // }

   return ( 
        <div className="home">
         {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
           { blogs && <BlogList name={blogs}/>}
           {/* <button onClick={()=> setName('Luigi')}>change name</button>
           <p>{name}</p> */}
           {/* <BlogList name={blogs.filter((blog)=>blog.author === 'Mario')} title = "Mairo's Blogs"/> */}
        </div>
     );
}
 
export default Home;