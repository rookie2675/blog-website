export function checkEnvironmentVariables() {
    const red = "\x1b[31m%s\x1b[0m";

    const requiredVariables = ["POSTGRES_URL"];

    for (const name of requiredVariables) {
        if (!process.env[name]) {
            console.error(
                red,
                `Error: ${name} environment variable is missing.`
            );
            process.exit(1);
        }
    }
}
