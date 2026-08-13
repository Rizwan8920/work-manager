import { Work } from "@/models/work";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const works = await Work.find({
      userId: userId,
    });

    return NextResponse.json(works);
  } catch (error) {
    return NextResponse.json({
        message: "failed to fetch works",
        success: false
    })
  }
}
