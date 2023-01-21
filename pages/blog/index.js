import Head from "next/head"


const showComminSoon = () => (
    <div className="container text-center">
        <h1>Comming Soon ...</h1>
        <h2>I have a lot stories that I'd like to tell you.</h2>
    </div>
)

export default function Blog({title, description, keywords}) {
    return (
        <div className="container">
            {/* Header */}
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            
            {showComminSoon()}

            {/* Section 1: Logo + Nav Link  */}
            {/* Section 2: Categories  */}
            {/* Section 3: Slider + New Posts */}
            {/* Section 4: Favorite Posts */}
            {/* Footer */}
        </div>   
    )
}


export async function getStaticProps() {
    return {
        props: {
            title: 'Blog | Nguyen Hai Cuong',
            description: 'This page is where I will share my stories',
            keywords: 'Tech Blogs, Stories, Full-stack Developer, CV, Hiring'
        }
    }
}