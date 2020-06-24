/* global Modernizr */

/**
 * Available UA tests
 */
const testDefinitions = {
  ms: () => !!window.MSStream,
  ipad: () => testUA(/iPad/i) && !Modernizr.ms,
  iphone: () => testUA(/iPhone/i) && !Modernizr.ms,
  ipod: () => testUA(/iPod/i) && !Modernizr.ms,
  ios: () => Modernizr.ipad || Modernizr.ipod || Modernizr.iphone,
  safari: () => testUA(/safari/i) && !testUA(/chrome/i) && !Modernizr.ms,
  firefox: () => testUA(/firefox/i) && !Modernizr.ms
}

/**
 * Check if the UA string matches a pattern
 * @param {RegExp} pattern Pattern to match against
 */
const testUA = (pattern) => !!navigator.userAgent.match(pattern)

/**
 * Add specific user-agent checks as Modernizr tests
 * @param {Array} tests Tests to include (e.g. ios, safari, firefox)
 */
export default function addUserAgentTests(tests = []) {
  tests.forEach((test) => {
    const func = testDefinitions[test]
    if (!func) {
      throw `Cannot find UA test: ${test}`
    }
    Modernizr.addTest(test, func)
  })
}

/**
 * Add all user-agent checks as Modernizr tests
 */
export function addAllUserAgentTests() {
  addUserAgentTests(Object.keys(testDefinitions))
}
