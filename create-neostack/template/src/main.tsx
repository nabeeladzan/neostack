import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@/index.css'
import {createBrowserRouter, RouterProvider} from "react-router";

// No need to import pages, they are automatically imported from the pages directory
const router = createBrowserRouter([
    {path: "/", Component: Hello},
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
