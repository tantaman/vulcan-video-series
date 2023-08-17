import { CtxAsync, useQuery2 } from "@vlcn.io/react";
import { SQLite } from "./schemas/sqlite";

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

  return (
    <table>
      <thead>
        <tr>
          {tableInfo.map((col) => (
            <th key={col.name}>{col.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
