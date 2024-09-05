import { NextResponse } from "next/server";

// All the function name has to be the same (GET, POST, PUT etc)

export const GET = async () => {
  return NextResponse.json({ message: "Hello from Blog api" });
};
export const POST = async (req: Request) => {
  return NextResponse.json({ message: "Hello from Blog api" });
};
export const DELETE = async () => {
  return NextResponse.json({ message: "Hello from Blog api" });
};
export const PUT = async () => {
  return NextResponse.json({ message: "Hello from Blog api" });
};
export const PATCH = async () => {
  return NextResponse.json({ message: "Hello from Blog api" });
};
