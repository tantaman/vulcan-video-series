import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { first, useDB, useQuery2 } from "@vlcn.io/react";
import { AppSchema } from "./schemas/main";

function App({ dbname }: { dbname: string }) {
  const ctx = useDB(dbname);

  const res = useQuery2(
    ctx,
    AppSchema.sql<{ count: number }>`SELECT [count] FROM test WHERE id = 1`,
    [],
    first
  ).data || { count: 0 };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            ctx.db.exec(`UPDATE test SET [count] = [count] + 1 WHERE id = 1`)
          }
        >
          count is {res.count || 0}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
