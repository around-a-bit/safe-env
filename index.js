function parseValue(key, value, type) {
  if (type === "string") {
    return value;
  }

  if (type === "number") {
    const num = Number(value);
    if (isNaN(num)) {
      throw new Error(`Invalid number for ${key}`);
    }
    return num;
  }

  if (type === "boolean") {
    if (value === true || value === "true") return true;
    if (value === false || value === "false") return false;
    throw new Error(`Invalid boolean for ${key}`);
  }

  throw new Error(`Unsupported type "${type}" for ${key}`);
}

export default function env(schema) {
  const config = {};

  try {
    for (const key in schema) {
      let rules = schema[key];

      // Allow short syntax: PORT: "number"
      if (typeof rules === "string") {
        rules = { type: rules };
      }

      const value = process.env[key];

      // Required check
      if (rules.required && value === undefined) {
        throw new Error(`Missing required variable: ${key}`);
      }

      // Default handling
      const finalValue =
        value !== undefined ? value : rules.default;

      if (finalValue === undefined) {
        config[key] = undefined;
        continue;
      }

      config[key] = parseValue(
        key,
        finalValue,
        rules.type
      );
    }

    return config;
  } catch (err) {
    throw new Error(`safe-env → ${err.message}`);
  }
}