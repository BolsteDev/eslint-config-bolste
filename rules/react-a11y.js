module.exports = {
  plugins: [
    'jsx-a11y',
    'react',
  ],
  ecmaFeatures: {
    jsx: true,
  },
  rules: {
    // Let anchors have no content for now
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
    'jsx-a11y/anchor-has-content': 'error',

    // Enforce all aria-* props are valid.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
    'jsx-a11y/aria-props': 'error',

    // Enforce ARIA state and property values are valid.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
    'jsx-a11y/aria-proptypes': 'error',

    // Require ARIA roles to be valid and non-abstract
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
    'jsx-a11y/aria-role': 'error',

    // Enforce that elements that do not support ARIA roles, states, and
    // properties do not have those attributes.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
    'jsx-a11y/aria-unsupported-elements': 'error',

    // require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'jsx-a11y/click-events-have-key-events': 'error',

    // ensure <hX> tags have content and are not aria-hidden
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
    'jsx-a11y/heading-has-content': 'error',


    // We use hash for urls, so we are letting them pass
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/href-no-hash.md
    'jsx-a11y/href-no-hash': 'off',

    // require HTML elements to have a "lang" prop
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
    'jsx-a11y/html-has-lang': 'error',

    // Require <img> to have a non-empty `alt` prop, or role="presentation"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-has-alt.md
    'jsx-a11y/img-has-alt': 'error',

    // Prevent img alt text from containing redundant words like "image", "picture", or "photo"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
    'jsx-a11y/img-redundant-alt': 'error',

    // require that JSX labels use "htmlFor"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': 'error',

    // require HTML element's lang prop to be valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
    'jsx-a11y/lang': 'error',

    // require that mouseover/out come with focus/blur, for keyboard-only users
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
    'jsx-a11y/mouse-events-have-key-events': 'error',

    // Prevent use of `accessKey`
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
    'jsx-a11y/no-access-key': 'error',

    // prevent marquee elements
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-marquee.md
    'jsx-a11y/no-marquee': 'error',

    // require onBlur instead of onChange
    // We have to use onchange, not onblur
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
    'jsx-a11y/no-onchange': 'off',

    // Enforce that DOM elements without semantic behavior not have interaction handlers
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': 'error',

    // Enforce that elements with onClick handlers must be focusable.
    // It is almost always better to use a button or a tag or input.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/onclick-has-focus.md
    'jsx-a11y/onclick-has-focus': 'error',

    // Warn that things with onClick (that aren't focusable) to have an aria role
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/onclick-has-role.md
    'jsx-a11y/onclick-has-role': 'warn',

    // Enforce that elements with ARIA roles must have all required attributes
    // for that role.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
    'jsx-a11y/role-has-required-aria-props': 'error',

    // Enforce that elements with explicit or implicit roles defined contain
    // only aria-* properties supported by that role.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
    'jsx-a11y/role-supports-aria-props': 'error',

    // only allow <th> to have the "scope" attr
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
    'jsx-a11y/scope': 'error',

    // Enforce tabIndex value is not greater than zero.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
    'jsx-a11y/tabindex-no-positive': 'error',
  },
};
