# EmailHint

Autocomplete domain part of e-mail after type any chars after `@`.

![EmailHint](http://jecas.cz/files/napovidani-emailu/napoveda-email.gif)

## Usage

1. Wrap HTML `<input>` element with:
  
  ```html
  <span class="emailHint">
    <input name="email">
    <span class="emailHint-hint"></span>
  </span>
  ```
  
2. Add CSS class selectors `.emailHint-measure` and `.emailHint-hint` to `input` declaration:
  ```css
  input,
  .emailHint-measure,
  .emailHint-hint {
    /* some styles */
  }
  ```  

3. Link `emailHint.js`.

4. Init with className and domains list:
  ```javascript
`EmailHint.init(
  "emailHint", // className
  [
    "gmail.com",
    /* … */
  ]
);
  ```

(http://jecas.cz/napovidani-emailu)
