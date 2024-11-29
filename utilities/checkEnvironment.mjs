import fs from "fs";
import path from "path";

export function checkEnvironmentFile() {
    const red = "\x1b[31m%s\x1b[0m";

    const envFileName =
        process.env.NODE_ENV === "production"
            ? ".env.production"
            : ".env.local";
    const environmentPath = path.resolve(process.cwd(), envFileName);

    if (!fs.existsSync(environmentPath)) {
        console.error(red, `Error: ${envFileName} file is missing.`);
        process.exit(1);
    }
}
