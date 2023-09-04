import {Simulate} from "react-dom/test-utils";
import {NextResponse} from "next/server";
import {currentProfile} from "@/lib/current-profile";
import {db} from "@/lib/db";
import {v4} from "uuid";

export const PATCH = async (
    req: Request,
    { params }: { params: { serverId: string }}
) => {
    try {
        const profile = await currentProfile();
        if (!profile) {
            return new NextResponse('Unauthorized', {status: 401});
        }
        if (!params.serverId) {
            return new NextResponse('Server ID Missing', {status: 400});
        }

        const server = await db.server.update({
            where: {
                id: params.serverId,
                profileId: profile.id,
            },
            data: {
                inviteCode: v4(),
            }
        })

        return NextResponse.json(server);

    } catch (e) {
        console.log('[SERVER_ID]', e);
        return new NextResponse('Internal Error', { status: 500 })
    }
}