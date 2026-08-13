import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({
        email: email,
    })

    if(user === null){
        throw new Error("user not found")
    }

    const passwordMatched = bcrypt.compareSync(password, user.password);

    if(!passwordMatched){
        throw new Error("wrong password");
    }

    const token = jwt.sign({
        _id: user.id,
        name: user.name
    }, process.env.JWT_KEY);

    console.log("token - ",token);

    const response = NextResponse.json({
        message: "Logged in successfully",
        success: true
    })

    response.cookies.set("authToken", token, {
      maxAge: 60 * 60,
      HttpOnly: true
    })

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
