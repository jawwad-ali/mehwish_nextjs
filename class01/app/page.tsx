export default async function Home() {
  const BASE_URL = 'https://simple-books-api.glitch.me'

  const url = await fetch(`${BASE_URL}/books`)
  const response = await url.json()
  console.log(response)

  return (
    <div>
      <h1 className="text-9xl">API's</h1>
      <ul>
        {response.map((book: any, index: number) => (
          <li key={index}> {index} | {book.name}</li>
        ))}
      </ul>
    </div>
  );
}

// https://simple-books-api.glitch.me/status
// https://simple-books-api.glitch.me/books