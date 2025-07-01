import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: Cached | undefined;
}

let cached: Cached;
if (typeof globalThis.mongoose === "undefined") {
  cached = globalThis.mongoose = { conn: null, promise: null };
} else {
  cached = globalThis.mongoose;
}

console.log("Using cached mongoose instance:", cached);

async function connectDB() {
  console.log("Connecting to MongoDB...");
  console.log("MONGODB_URI:", MONGODB_URI);

  console.log("Cached connection:", cached.conn);
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  console.log("Connected to MongoDB successfully.");
  console.log("Cached connection:", cached.conn);

  return cached.conn;
}

export default connectDB;

