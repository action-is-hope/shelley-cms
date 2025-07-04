// @ts-check

// Patterns and packages that need compiling from node_modules
// Replaces old include st.css and includes Shelley:
// transformIgnorePatterns: [
//   "/node_modules/(?!(.*?\\.st\\.css$))", // libraries publish .st.css files in their dist
// ],
const esModules = ["@actionishope/shelley", `(.*?\\.st\\.css$)`].join("|");

module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    "\\.st\\.css?$": [
      "@stylable/jest",
      { stylable: { resolveNamespace: (ns, _srcPath) => `${ns}__Test` } },
    ],
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  testRegex: "(src/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-raw-loader",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  testPathIgnorePatterns: ["node_modules", ".cache", "dist"],
  globals: {
    __PATH_PREFIX__: "",
    // document: {},
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.cjs"],
  verbose: true,
};
