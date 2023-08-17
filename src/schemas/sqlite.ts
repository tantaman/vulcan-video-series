/* eslint-disable @typescript-eslint/no-explicit-any */

import {schema} from "@vlcn.io/typed-sql";

export const SQLite = schema<{
  readonly pragma_table_info: Readonly<{
    cid: number;
    name: string;
    type: string;
    notnull: number;
    dflt_value: any | null;
    pk: number
  }>
}>`
CREATE TABLE pragma_table_info (
  cid INT NOT NULL,
  name TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "notnull" INT NOT NULL,
  dflt_value ANY,
  pk INT NOT NULL
);
`;