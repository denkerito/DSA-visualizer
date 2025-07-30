import HomeCard from "../card/HomeCard"
import "../components.css"

function HomePage() {
    return(
        <>
        <div className="flex flex-wrap justify-center gap-6 p-6">
            <HomeCard title = "array" description="..."/>
            <HomeCard title = "list" description="..."/>
            <HomeCard title = "stack" description="..."/>
            <HomeCard title = "queue" description="..."/>
            <HomeCard title = "binary tree" description="..."/>
            <HomeCard title = "graph" description="..."/>
            <HomeCard title = "heap" description="..."/>
        </div>
        </>
    )
}

export default HomePage