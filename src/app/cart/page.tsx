import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export default async function Cart(): Promise<JSX.Element> {

    let rows: User[] = [];

    try {
        rows = await prisma.user.findMany();
    } catch (error) {
        console.error("Error fetching users:", error);
        return <div>Error loading users.</div>;
    }

    if (rows.length === 0) {
        return <div>Nothing here!</div>;
    }


    return (
        <div>
            {rows.map((row) => (
                <div key={row.id}>
                    ID:{row.id} - Mail:{row.email}
                </div>
            ))}
        </div>
    );
}