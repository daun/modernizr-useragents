# Modernizr User-Agent Tests

Add simple user-agent checks as Modernizr tests.

> :warning: The checks in this package are meant for light-weight corrections to browser engines' rendering quirks. They are too simple and unreliable for critical feature checks.

## Installation

```bash
npm install modernizr-useragents
```

## Usage

### Add specific tests

```js
import addUserAgentTests from 'modernizr-useragents'

addUserAgentTests(['firefox', 'safari'])
```

### Add all available tests

```js
import { addAllUserAgentTests } from 'modernizr-useragents'

addAllUserAgentTests()
```

## Tests

The following tests are available:

| Name      | Test                                       |
| --------- | ------------------------------------------ |
| `ms`      | Microsoft browsers: IE & pre-chromium Edge |
| `ipad`    | Safari on iPadOS                           |
| `iphone`  | Safari on iOS                              |
| `ipod`    | Safari on iPods' iOS                       |
| `ios`     | Either `ipad`, `iphone` or `ipod`          |
| `safari`  | Safari, desktop or phone                   |
| `firefox` | Firefox                                    |

## License

[MIT License](https://opensource.org/licenses/MIT) © [Philipp Daun](https://philippdaun.net/)
