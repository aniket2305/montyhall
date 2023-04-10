module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: "node",
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    testMatch: [
        "**/?(*.)+(spec|test).+(ts|js)"
    ],
}