import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export default async function Cart(): Promise<JSX.Element> {

    const rows: User[] = await prisma.user.findMany();

    console.log(rows)
    if (rows.length == 0) { return (<div>nothing here!</div>) }

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