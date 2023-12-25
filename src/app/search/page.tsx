import { redirect } from "next/navigation";
import pages from "@/paths";
import PostList from "@/components/posts/post-list";
import { searchPosts } from "@/db/queries/post";
interface SearchPageProps
{
    searchParams: {
        term: string;
    };
}

export default async function SearchPage({ searchParams }: SearchPageProps)
{
    const { term } = searchParams;

    if(!term)
    {
        redirect(pages.home());
    }

    
    return (
        <div className="space-y-3">
            <h1 className="text-lg font-bold">Search results for "{term}"</h1>
            <PostList fetchData={() => searchPosts(term)} />
        </div>
    );
}