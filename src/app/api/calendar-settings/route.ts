import { NextResponse } from "next/server";
import prisma  from "../../lib/prisma";

export async function GET() {
    const calendarSettings =  await prisma.calendarSettings.findFirst();

    return NextResponse.json(calendarSettings);
}