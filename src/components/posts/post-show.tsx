import { db } from "@/db";
import { notFound } from "next/navigation";

interface PostShowProps
{
  postId: string
}

export default async function PostShow({ postId }: PostShowProps)
{

  const post = await db.post.findFirst({
    where: { id: postId }
  })
  if (!post)
  {
    notFound();
  }
  const userData = await db.user.findFirst({
    where: {id: post.userId}
  })

  return (
    <div className="m-4">
      <div className="flex flex-row items-baseline gap-2">
        <h1 className="text-2xl font-bold my-2">{post.title}</h1>
        <p className="text-xs">• Posted by </p>
        <p className="text-xs font-bold">{userData?.name}</p>
        <p className="text-xs italic">{post.createdAt.toUTCString()}</p>
      </div>
      {post.content ? <p className="p-4 border rounded"> {post.content}</p> : null}
    </div>
  );
}
