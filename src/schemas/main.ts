import { schema } from "@vlcn.io/typed-sql";

export const AppSchema = schema<{
  readonly test: Readonly<{
    id: number;
    name: string;
    thing: number | null;
  }>;
}>`
CREATE TABLE IF NOT EXISTS test (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  thing FLOAT
);
`;
