import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DBProvider } from "@vlcn.io/react";
import { AppSchema } from './schemas/main.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DBProvider dbname="mydb" schema={{
      name: "main.sql",
      content: AppSchema.__content
    }}>
      <App dbname="mydb" />
    </DBProvider>
  </React.StrictMode>,
)
