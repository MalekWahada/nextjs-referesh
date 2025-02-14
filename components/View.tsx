import { after } from 'next/server';

import { client } from "../sanity/lib/client"
import { STARUP_VIEW_QUERY } from "../sanity/lib/queries"
import { writeClient } from "../sanity/lib/write-client";
import Ping from "./Ping"

/**
 * Partial pre-rendering??
 * @see https://nextjs.org/blog/next-15#executing-code-after-a-response-with-unstable_after-experimental
 */
const View = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(STARUP_VIEW_QUERY, { id });

    after(async () => await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
    );

    return (
        <div className="view-container">
            <div className="absolute -top-2 -right-2">
                <Ping />
            </div>

            <p className="view-text">
                <span className="font-black">
                    Views: {totalViews}
                </span>
            </p>
        </div>
    )
}

export default View
