// convert-tokens.js
const fs = require('fs');
const path = require('path');

// Load design-tokens.json
const tokens = require('./design-token.json'); // เปลี่ยนสามพาธไฟล์ ที่ได้

// Helper to transform tokens
const transformColor = (obj) => {
  const result = {};
  for (const [key, shades] of Object.entries(obj)) {
    if (typeof shades.value === 'string') {
      result[key] = shades.value;
    } else {
      result[key] = {};
      for (const [shade, info] of Object.entries(shades)) {
        result[key][shade] = info.value;
      }
    }
  }
  return result;
};

const transformFlat = (obj) => {
  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    result[key.replace(/^(spacing-|font-size-|line-height-|border-width-|radius-)/, '')] = val.value + (val.type === 'fontSizes' || val.type === 'lineHeights' ? 'px' : '');
  }
  return result;
};

const transformLetterSpacing = (obj) => {
  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    result[key.replace('tracking-', '')] = val.value + 'px';
  }
  return result;
};

const tailwindConfig = {
  theme: {
    extend: {
      colors: transformColor(tokens.color),
      spacing: transformFlat(tokens.spacing),
      fontSize: transformFlat(tokens.fontSizes),
      fontFamily: {
        inter: ['Inter'],
        roboto: ['Roboto'],
      },
      fontWeight: transformFlat(tokens.fontWeights),
      borderRadius: transformFlat(tokens.borderRadius),
      lineHeight: transformFlat(tokens.lineHeights),
      letterSpacing: transformLetterSpacing(tokens.letterSpacing),
    },
  },
  plugins: [],
};

// Write to output file
fs.writeFileSync(
  path.join(__dirname, 'tailwind-token.config.js'),
  `/** This file is auto-generated from design-tokens.json */\n\nmodule.exports = ${JSON.stringify(tailwindConfig, null, 2)};`
);

console.log('✅ Successfully generated tailwind-token.config.js!');
