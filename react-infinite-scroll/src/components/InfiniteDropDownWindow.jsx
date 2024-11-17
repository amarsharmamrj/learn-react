import { useEffect, useState } from "react"
import Navbar from "./Nav"

const InfiniteDropDownWindow = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [bottom, setBottom] = useState(false)

    const fetchPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page}`)
            .then((res) => res.json())
            .then((result) => {
                setData([...data, ...result.results])
            })
            .catch((error) => console.log(error))
    }

    const loadItems = () => {
        const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5
        if (isBottom) {
            setBottom(true)
            setTimeout(() => {
                setPage((prev) => prev + 1)
            }, 1000)
        } else {
            setBottom(false)
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [page])

    useEffect(() => {
        window.addEventListener('scroll', loadItems)
        return () => {
            window.addEventListener('scroll', loadItems)
        }
    }, [])

    return (
        <>
            <Navbar />
            <div className="dropdown-window">
                {
                    data?.length > 0 ? (
                        data?.map((item) => <p key={item.url} value={item.url}>{item.name}</p>)
                    ) : ('Loading..')
                }
                {
                    bottom && (<h1>Loading..</h1>)
                }
            </div>
        </>
    )
}

export default InfiniteDropDownWindow