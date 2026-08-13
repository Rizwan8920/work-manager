import { NextResponse } from "next/server";

export async function POST(request){
    const response = NextResponse.json({
        message: "Logout successfully",
        success: true,
    });

    response.cookies.set("authToken", "", {
        maxAge: new Date(0)
    })

    return response;
}