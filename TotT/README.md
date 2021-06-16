# Examples based on TotT

<https://testing.googleblog.com>

## [Testing pyramid](https://abseil.io/resources/swe_at_google.2.pdf#page=248): Unit > Integration > E2E

<https://testing.googleblog.com/2021/06/how-much-testing-is-enough.html>

<https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html> --> Failing tests don't help users, but fixing bugs does. Make detecting and locating bugs faster to better help users. E2E tests are usually slow and flaky, and may not tell you where to find the bug(s), when compared to unit tests and integration tests.
