const path = require("path");

module.exports = {
  setupFilesAfterEnv: [
    path.resolve(__dirname, "./config/jest/setup-test-env.js"),
  ],
  transform: {
    // "^.+\\.(tsx?|jsx?)$": "ts-jest",
    "\\.svg": "<rootDir>/config/jest/__mocks__/svgTransform.js",
    "^.+\\.(tsx?|jsx?)$": `<rootDir>/config/jest/jest-preprocess.js`,
  },
  moduleNameMapper: {
    // "\\.svg": `./config/jest/__mocks__/file-mocks.js`,
    "\\.svg": `<rootDir>/config/jest/__mocks__/svgTransform.js`,
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/config/jest/__mocks__/file-mocks.js`,
    "^Components(.*)$": "<rootDir>/src/components$1",
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverage: false,
  coverageReporters: ["lcov", "text", "html"],
  setupFiles: [`<rootDir>/config/jest/loadershim.js`],
};
