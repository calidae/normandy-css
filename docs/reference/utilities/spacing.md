# Margin and Padding

Utilities for controlling an element's padding and margin.

| Property | Direction | Size     |
| -------- | --------- | -------- |
| p        | -t        | _(none)_ |
| m        | -r        | -tiny    |
|          | -b        | -small   |
|          | -l        | -large   |
|          | -h        | -huge    |
|          | -v        | -none    |
|          |           | -auto    |

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
