import { Skeleton } from "@nextui-org/react";

/**
 * `PostShowLoading` is for displaying a skeleton screen.
 * Skeleton screens are used to indicate to the user that content is on the way.
 * This creates the perception that the application is fast and responsive.
 * This particular skeleton screen is designed to mimic the layout of a post.
 */
export default function PostShowLoading()
{
    return (
        <div className="m-4">
            <div className="my-23">
                <Skeleton className="h-8 w-48" />
            </div>
            <div className="p-4 border rounded space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
            </div>
        </div>
    );
}