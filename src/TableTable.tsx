import { CtxAsync, useQuery2 } from "@vlcn.io/react";
import { SQLite } from "./schemas/sqlite";
import fc from "fast-check";

export default function TableTable({
  tableName,
  ctx,
  children,
}: {
  tableName: string;
  ctx: CtxAsync;
  children: React.ReactNode;
}) {
  const tableInfo = useQuery2(
    ctx,
    SQLite.sql<{
      name: string;
      type: string;
    }>`SELECT name, type FROM pragma_table_info WHERE arg = ?`,
    [tableName]
  ).data;

  const addRow = () => {
    // go thru our table info types
    // craft an insert statement based on aribtraries
    const values = tableInfo.map((col) => {
      switch (col.type) {
        case "INTEGER":
          return fc.sample(fc.integer(), 1)[0];
        case "TEXT":
          return fc.sample(fc.string(), 1)[0];
        case "BLOB":
          return fc.sample(
            fc.uint8Array({ minLength: 0, maxLength: 16 }),
            1
          )[0];
        case "FLOAT":
          return fc.sample(fc.float(), 1)[0];
      }
      return null;
    });
    return ctx.db.exec(
      `INSERT INTO ${tableName} VALUES (${values.map(() => "?").join(",")})`,
      values
    );
  };

  const dropRows = () => {
    return ctx.db.exec(`DELETE FROM ${tableName} WHERE 1`);
  };

  return (
    <div>
      <table style={{ width: "100%", marginBottom: 20 }}>
        <thead>
          <tr>
            {tableInfo.map((col) => (
              <th key={col.name}>{col.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <button onClick={addRow} style={{ marginRight: 16 }}>
        Add Row
      </button>
      <button onClick={dropRows}>Drop Rows</button>
    </div>
  );
}
