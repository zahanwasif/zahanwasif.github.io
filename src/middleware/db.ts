import connectDB from "@/lib/mongodb";

export function withDB(handler: any) {
  return async function (...args: any[]) {
    await connectDB();
    return handler(...args);
  };
}

