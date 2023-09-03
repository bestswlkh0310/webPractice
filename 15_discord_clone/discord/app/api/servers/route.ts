import {currentProfile} from "@/lib/current-profile";
import {db} from "@/lib/db";
import {NextResponse} from "next/server";
import {v4} from "uuid";
import {MemberRole} from "@prisma/client";

export const POST = async (req: Request) => {
    try {
        const {name, imageUrl} = await req.json();
        const profile = await currentProfile();

        if (!profile) {
            return new NextResponse('Unauthorized', {status: 401});
        }

        const server = await db.server.create({
            data: {
                profileId: profile.id,
                name: name,
                imageUrl: imageUrl,
                inviteCode: v4(),
                channels: {
                    create: [
                        {
                            name: '일반',
                            profileId: profile.id
                        }
                    ]
                },
                members: {
                    create: [
                        {
                            profileId: profile.id,
                            role: MemberRole.ADMIN
                        }
                    ]
                }
            }
        });

        return NextResponse.json(server);

    } catch (e) {

        console.log('[SERVER_POST]', e)
    }
    return new NextResponse('Internal Error', { status: 500 });
}