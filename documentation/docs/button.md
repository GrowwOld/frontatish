---
id: button
title: Button
sidebar_label: Button
---

You can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

## Usage

```jsx
// react base imports

import { Button } from '@growwSuper/core/ui'

const MyComponent = () => (
  <Button
    label="PRIMARY BUTTON"
    type="primary"
    onPress={() => console.log('Pressed')}
  >
    Press me
  </Button>
);

export default MyComponent;

```

## Props

### `onPress`
| Type | Required |
|---|---|
| function | Yes |

### `type`
| Type | Required |
|---|---|
| enum('primary', 'secondary', 'default'), string | Yes |
### `label`
| Type | Required |
|---|---|
| string | Yes |
### `isDark`
| Type | Required |
|---|---|
| boolean | No |
### `loading`
| Type | Required |
|---|---|
| boolean | No |
### `children`
| Type | Required |
|---|---|
| ReactNode | No |
### `disabled`
| Type | Required |
|---|---|
| boolean | No |
### `customStyles`
| Type | Required |
|---|---|
| style object | No |

---

## Links

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com or <http://www.example.com> and sometimes example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

---

## Images

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'
