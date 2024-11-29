import fs from "fs";
import path from "path";

export function checkEnvironmentFile() {
    const red = "\x1b[31m%s\x1b[0m";
    const environmentPath = path.resolve(process.cwd(), ".env.local");

    if (!fs.existsSync(environmentPath)) {
        console.error(red, "Error: .env.local file is missing.");

        process.exit(1);
    }
}
