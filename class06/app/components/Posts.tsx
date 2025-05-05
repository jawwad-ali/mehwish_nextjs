const Posts = async () => {
    const url = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = await url.json() 
    const sliced_res = res.slice(0, 10)
    await new Promise((resolve) => setTimeout(resolve, 3800));

    return(
        <div>
            <h1 className="text-center underline">POSTS</h1>
            {
                sliced_res.map((post: {title: string}) => (
                    <h1>{post.title}</h1>
                ))
            }
        </div>
    )
}
export default Posts