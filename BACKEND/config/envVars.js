import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file path and dir
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from BACKEND directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

console.log("✅ Loaded MONGO_URI:", process.env.MONGO_URI);

export const ENV_VARS = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 5001,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  TMDB_API_KEY: process.env.TMDB_API_KEY,
};

if (!ENV_VARS.MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in environment variables!");
  process.exit(1);
}
