import { schema, Record } from "@vlcn.io/typed-sql";

export const AppSchema = schema<{
  readonly test: Readonly<{
    id: number | null;
    count: number | null;
  }>;
}>`CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, [count] INTEGER);`;

export type Test = Record<typeof AppSchema, "test">;
