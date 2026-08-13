import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";

export async function GET(request) {
    try {
        const authToken = request.cookies.get("authToken")?.value;

        if (!authToken) {
            return NextResponse.json({ error: 'No auth token provided' }, { status: 401 });
        }

        const data = jwt.verify(authToken, process.env.JWT_KEY);

        const user = await User.findById(data._id).select("-password");

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error('Error processing request:', error);

        if (error.name === 'JsonWebTokenError') {
            return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
        }

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
