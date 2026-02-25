# safe-env-node

A tiny, secure environment variable loader with validation for Node.js.

It validates, parses, and protects your configuration at startup so your app never runs with broken or missing environment variables.

---

## Install

```bash
npm install safe-env
```

---

## Basic Usage

```js
import env from "safe-env";

const config = env({
  PORT: { type: "number", default: 3000 },
  DB_URL: { type: "string", required: true },
  DEBUG: { type: "boolean", default: false }
});

console.log(config);
```

---

## Simple Syntax

You can also use a shorter format:

```js
import env from "safe-env-node";

const config = env({
  PORT: "number",
  DB_URL: { type: "string", required: true }
});
```

---

## Schema Options

| Option   | Description                         |
|----------|-------------------------------------|
| type     | `"string"`, `"number"`, `"boolean"` |
| required | Throws an error if missing          |
| default  | Fallback value if not provided      |

---

## Example

### .env file

```env
PORT=3000
DB_URL=mongodb://localhost:27017/app
DEBUG=true
```

### Code

```js
import env from "safe-env";

const config = env({
  PORT: "number",
  DB_URL: { type: "string", required: true },
  DEBUG: { type: "boolean", default: false }
});

console.log(config);
```

### Output

```txt
{ PORT: 3000, DB_URL: 'mongodb://localhost:27017/app', DEBUG: true }
```

---

## Why safe-env?

- Prevents missing environment variables
- Converts values to correct data types
- Fails fast with clear error messages
- Centralized configuration validation
- Zero dependencies
- Lightweight and production-ready

---

## License

MIT
