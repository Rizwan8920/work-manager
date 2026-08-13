import { connectDb } from "@/helper/db";
import { Work } from "@/models/work";
import { NextResponse } from "next/server";

connectDb();

export async function GET() {
  let works = [];

  try {
    works = await Work.find();
  } catch (error) {
    return NextResponse.json({
      message: "failed to fetch works !!",
      success: false,
    });
  }

  return NextResponse.json(works);
}

export async function POST(request) {
  const { title, description, userId } = await request.json();

  console.log("title and description", title, description);

  const work = new Work({
    title,
    description,
    userId
  });

  try {
    const workCreated = await work.save();

    return NextResponse.json(workCreated);
  } catch (error) {
    return NextResponse.json({
      message: "failed to create work",
      success: false,
    });
  }
}
