import { schema } from "@vlcn.io/typed-sql";

export const AppSchema = schema<{
  readonly test: Readonly<{
    id: number;
    name: string | null;
    wing: number | null
  }>
}>`
CREATE TABLE IF NOT EXISTS test (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT,
  wing FLOAT
);
`;
