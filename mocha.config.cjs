module.exports = {
    // Specify test file patterns
    spec: ['specs/*.spec.js'],

    // Use 'BDD' as the default interface (Behavior Driven Development)
    ui: 'bdd',

    // Reporter to use, default is 'spec'
    reporter: 'spec',

    // Timeout for tests in milliseconds
    timeout: 60000 * 10,

    // Enable recursive search for test files in subdirectories
    recursive: true,

    // Enable or disable color output in the terminal
    color: true,

    // Retry failed tests (useful for flaky tests)
    retries: 0,

    // Global variables to ignore (if any)
    ignoreLeaks: false,

    // Enable watching files and rerunning tests upon changes
    watch: false,

    parallel: true
}