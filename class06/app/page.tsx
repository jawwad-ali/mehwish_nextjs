import { Suspense } from "react";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Spinner from "./components/Spinner";

export default async function Home() {
  
  // Just to fake the slow server response
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <div>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Todos />
      </Suspense>
  
      <Suspense fallback={<Spinner />}>
        <Posts />
      </Suspense>
    </div>
  );
}
