import { Work } from "@/models/work";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { workId } = params;

  const work = await Work.findById(workId);

  return NextResponse.json(work);
}


export async function PUT(request, { params }) {
    const {workId} = params;

    const {title,description, userId} = await request.json();

    try {
        const work = await Work.findById(workId);
        work.title = title;
        work.description = description;
        work.userId = userId;
        const updatedWord = await work.save();
        return NextResponse.json(updatedWord);
    } catch (error) {
        return NextResponse.json({
            message: "failed to update work",
            success: false
        })
    }
}

export async function DELETE(request, { params }) {
    const {workId} = params;

    try {
        await Work.deleteOne({
            _id: workId,
        })
        return NextResponse.json({
            message: "work deleted successfully !",
            success: true
        })
    } catch (error) {
        return NextResponse.json({
            message: "failed to delete work !",
            success: false
        })
    }
}
