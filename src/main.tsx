import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DBProvider } from "@vlcn.io/react";
import schemaContent from "./schemas/main.sql?raw";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DBProvider dbname="mydb" schema={{
      name: "main.sql",
      content: schemaContent
    }}>
      <App dbname="mydb" />
    </DBProvider>
  </React.StrictMode>,
)
