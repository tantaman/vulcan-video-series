import {schema} from "@vlcn.io/typed-sql";

export const AppSchema = schema<{
  readonly test: Readonly<{
    id: number;
    count: number
  }>
}>`
CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, count INTEGER NOT NULL );
INSERT OR IGNORE INTO test VALUES (1, 0);
`;