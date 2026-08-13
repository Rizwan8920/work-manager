import { User } from "@/models/user";
import { NextResponse } from "next/server";

// Get user
export async function GET(request, { params }) {
  const { userId } = params;

  const user = await User.findById(userId);

  return NextResponse.json(user);
}

// Delete user
export async function DELETE(request, { params }) {
  const { userId } = params;

  try {
    await User.deleteOne({
      _id: userId,
    });

    return NextResponse.json({
      message: "user deleted !!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error in deleting user !!",
      success: true,
    });
  }
}

// Update user
export async function PUT(request, { params }) {
  const { userId } = params;

  const { name, password } = await request.json();

  try {
    const user = await User.findById(userId);

    user.name = name;
    user.password = password;

    const updatedUser = await user.save();

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({
      message: "failed to update user !!",
      success: false,
    });
  }
}
