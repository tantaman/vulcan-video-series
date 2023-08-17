import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDB, useQuery2 } from "@vlcn.io/react";
import { AppSchema } from "./schemas/main";
import TableTable from "./TableTable";

function App({ dbname }: { dbname: string }) {
  const ctx = useDB(dbname);

  const rows = useQuery2(
    ctx,
    AppSchema.sql<{/*Could not find the referenced schema typescript type! Is it defined? /Users/tantaman/workspace2/vite-project/src/App.tsx:12:4*/}>`SELECT * FROM test`,
    []
  ).data;

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
        <TableTable ctx={ctx} tableName="test">
          {rows.map((row) => (
            <tr key={row.id}>
              {Object.values(row).map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </TableTable>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
