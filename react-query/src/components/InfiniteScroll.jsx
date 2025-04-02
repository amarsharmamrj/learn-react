import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

const InfiniteScroll = () => { 

    const fetchUsers = async ({ pageParam = 1 }) => {
        console.log("pageParam:", pageParam) 
        try {
            let res = await fetch(`https://api.github.com/users?per_page=10&page=${pageParam}`)
            let data = await res.json()
            console.log("data:", data)
            return await data
        } catch (error) {
            throw error
        }  
    }

    const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ['users'],
        queryFn: fetchUsers, 
        getNextPageParam: (lastPage, pages) => {
            // return lastPage.length === 10 ? pages.length + 1 : undefined
            return pages.length
        } 
    }) 

    const handleScroll = () => {
        const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1
        if (isBottom && hasNextPage) fetchNextPage()
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [hasNextPage])

    if (!data) {
        return <p>Loading..</p>
    }

    return (
        <div className="scroll">
            {
                data?.pages?.map((page) => {
                    return (
                        page?.map((user) => {
                            return (
                                <div className="user">
                                    <p key={user.id}>{user.login}</p>
                                </div>
                            )
                        })
                    )
                })
            }
        </div>
    )
}

export default InfiniteScroll
