import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const next = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const result = spawnSync(process.execPath, [next, "build", "--webpack"], {
  stdio: "inherit",
  env: { ...process.env, STATIC_EXPORT: "true", NEXT_TELEMETRY_DISABLED: "1" },
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
process.exit(result.status ?? 1);
