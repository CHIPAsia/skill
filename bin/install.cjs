#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '../SKILL.md');
const dest = path.join(process.cwd(), "chip-skill", "SKILL.md")
const relativeDest = path.relative(process.cwd(), dest);

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log(`Added CHIP Payment Gateway skill to ${relativeDest}`);
