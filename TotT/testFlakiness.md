# Test flakiness

https://testing.googleblog.com/2021/03/test-flakiness-one-of-main-challenges.html

## Four test flakiness sources

1. tests
2. test-running framework
3. SUT (System Under Test) and SUT's dependencies
4. OS/hardware/network of the SUT / testing framework

### Test flakiness source #1: tests

- init/cleanup: be explicit and consider test of initial state
- invalid assumptions of state/ordering: run tests independently and remove/isolate SUT deps for things you do not control, make tests runnable independently
- sync expectations of things that are (actually) async: log times, see if delays affect test results, add tests that wait for specific app state, avoid adding arbitrary delays (will "re-flake" over time)

### Test flakiness source #2: test-running framework

- make sure have enough resources: check logs to see if SUT startup worked to begin with or if SUT ran out of resources during test run, fix memory leaks, allocate enough resources
- improper test scheduling conflicts: run tests independently, make tests runnable independently

### Test flakiness source #3: SUT (System Under Test) and SUT's dependencies

- race conditions: log accesses of shared resources, add tests that wait for specific app state, avoid adding arbitrary delays (will "re-flake" over time)
- init: explicitly init variables before use
- slow/unresponsive to tests: log req/res times
- memory leaks / oversubscription of resources: detect/track memory consumption, check logs to see if SUT ran out of resources during test run
- app out of sync with tests: check revision history, automatically enforce code changes to have accompanying tests

### Test flakiness source #4: OS/hardware/network of the SUT / testing framework

- networking failures/instability, or isk errors: check system logs for hardware errors, and if can't fix hardware errors then consider running tests on different hardware
- resources consumed by other unrelated tasks/services: check system process activity for things to reduce
