const Todos = async () => {
    const url = await fetch('https://jsonplaceholder.typicode.com/todos')
    const res = await url.json() 
    const sliced_res = res.slice(0, 10)

    await new Promise((resolve) => setTimeout(resolve, 1500));

    return(
        <div>
            <h1 className="text-center underline">Todos</h1>
            {
                sliced_res.map((todo: {title: string}) => (
                    <h1>{todo.title}</h1>
                ))
            }
        </div>
    )
}
export default Todos