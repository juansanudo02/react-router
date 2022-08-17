import { Link, useRoutes } from 'react-router-dom'

const routes =[
    {
        path: '/',
        element: (
            <div>
                <h1> Home</h1>
                <Link to='/search'>Go to Search</Link>
            </div>
        )
    },
    {
        path:'/search',
        element:(
            <div>
                <h1> Search</h1>
                <Link to='/search'> Go to Home</Link>
            </div>
        )
    }
]
export default function App(){
    const element = useRoutes(routes)
    return(
        <main>
            <header>
                <h1>Midu</h1>
            </header>
            {element}
        </main>
    )
}