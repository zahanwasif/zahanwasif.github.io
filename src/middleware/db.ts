import connectDB from "@/lib/mongodb";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withDB(handler: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async function (...args: any[]) {
    await connectDB();
    return handler(...args);
  };
}

