# EmailHint

Autocomplete domain part of e-mail after type any chars after `@`.

![EmailHint](http://jecas.cz/files/napovidani-emailu/napoveda-email.gif)

## Usage

Wrap HTML `<input>` element with:
  ``<span class="emailHint">
    <input name="email">
    <span class="emailHint-hint"></span>
  </span>``
  
Add CSS class selectors `.emailHint-measure` and `.emailHint-hint` to `input` declaration:
  `input,
  .emailHint-measure,
  .emailHint-hint {
      /* some styles */
  }`
  
Link `emailHint.js`.

Init with className and domains list:
  `EmailHint.init(
    "emailHint", // className
    [
      "gmail.com",
      /* … */
    ]
  );`

(http://jecas.cz/napovidani-emailu)
