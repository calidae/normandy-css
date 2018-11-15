# Margin and Padding

Utilities for controlling an element's padding and margin.

Each utility is a combination of the following particles:

| Property | Direction         | Size     |
| -------- | ----------------- | -------- |
| p        | -t _(top)_        | _(none)_ |
| m        | -r _(right)_      | -tiny    |
|          | -b _(bottom)_     | -small   |
|          | -l _(left)_       | -large   |
|          | -h _(horizontal)_ | -huge    |
|          | -v _(vertical)_   | -none    |
|          |                   | -auto    |

Each size maps to the global sizing variables of Normandy CSS.

```jsx
<div class="u-mt-large">...</div>
// margin-top: $global-spacing-unit-large;

<div class="u-p">...</div>
// padding: $global-spacing-unit;

<div class="u-ml-auto">...</div>
// margin-left: auto;

<div class="u-mt-none">...</div>
// margin-top: 0;

<div class="u-ph-tiny">...</div>
// padding-left: $global-spacing-unit-tiny;
// padding-right: $global-spacing-unit-tiny;
```
