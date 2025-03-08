import { NextResponse } from "next/server";
import data from '../../../../public/data/businessInfo.json';

// Not being used at the moment as it needs a database.
// Needs to fetch data from a database.
// https://domain-name/api/business-info
export async function GET() {
    return NextResponse.json(data);
}