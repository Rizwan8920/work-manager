import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDb();

export async function GET(req) {
  let users = [];

  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to fetch users",
      success: false,
    });
  }

  return NextResponse.json(users);
}

// Create user
export async function POST(req) {
  // Fetch user details from request

  const { name, email, password } = await req.json();

  // Create user object with user model

  const user = new User({
    name,
    email,
    password,
  });

  try {
    // Save the object to db
    user.password = await bcrypt.hash(user.password, parseInt(process.env.BCRYPT_SALT));
    console.log(user);
    const createdUser = await user.save();

    const response = NextResponse.json(user, {
      status: 201,
    });

    return response;
  } catch (error) {
    NextResponse.json({
      message: "failed to create user !!",
      status: false,
    });
  }
}
