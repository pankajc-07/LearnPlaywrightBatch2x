/*
JavaScript Identifier Rules with Examples:

- Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($).
  - Valid: `name`, `_private`, `$value`
  - Invalid: `123abc`, `@symbol`

- Subsequent characters can include letters, digits (0-9), underscores, or dollar signs.
  - Valid: `userName`, `data_1`, `item$2`
  - Invalid: `var-name`, `test#id`

- Identifiers are case-sensitive (e.g., `myVar` and `myvar` are different).
  - Valid: `myVar`, `myvar`, `MyVar` (all distinct)
  - Invalid: None (this is about sensitivity, not validity)

- Identifiers cannot be JavaScript reserved keywords.
  - Valid: `variable`, `myFunction`
  - Invalid: `if`, `for`, `class`

- Identifiers cannot contain spaces or special characters other than underscores and dollar signs.
  - Valid: `first_name`, `total$amount`
  - Invalid: `my name`, `test@domain`

- Identifiers can be of any length, but should be meaningful and practical.
  - Valid: `a`, `veryLongIdentifierNameThatIsDescriptive`
  - Invalid: None (length doesn't make it invalid, but impractical)
*/

// Examples for Rule 1: Must start with a letter, underscore, or dollar sign
let name = 10; // valid
let _private = 20; // valid
let $value = 30; // valid
// let 123abc = 40; // invalid: cannot start with digit

// Examples for Rule 2: Subsequent characters can include letters, digits, underscores, or dollar signs
let userName = "John"; // valid
let data_1 = [1, 2, 3]; // valid
let item$2 = true; // valid
// let var-name = "test"; // invalid: contains hyphen

// Examples for Rule 3: Identifiers are case-sensitive
let myVar = "lowercase"; // valid
let myvar = "lowercase different"; // valid (different from myVar)
let MyVar = "title case"; // valid (different from both above)

// Examples for Rule 4: Identifiers cannot be JavaScript reserved keywords
let variable = 100; // valid
function myFunction() { return "hello"; } // valid
// let if = 50; // invalid: 'if' is a keyword
// let for = "loop"; // invalid: 'for' is a keyword

// Examples for Rule 5: Identifiers cannot contain spaces or special characters other than underscores and dollar signs
let first_name = "Doe"; // valid
let total$amount = 500; // valid
// let my name = "John"; // invalid: contains space
// let test@domain = "email"; // invalid: contains @

// Examples for Rule 6: Identifiers can be of any length, but should be meaningful and practical
let a = 1; // valid (short)
let veryLongIdentifierNameThatIsDescriptive = "This is a very long identifier"; // valid (long)

/*
JavaScript Naming Conventions:

- camelCase: Used for variables and functions. First word lowercase, subsequent words capitalized.
- PascalCase: Used for classes and constructors. All words capitalized.
- snake_case: Sometimes used for variables, especially in some libraries. Words separated by underscores.
- UPPER_CASE: Used for constants. All letters uppercase, words separated by underscores.
- kebab-case: Not allowed in JavaScript identifiers (hyphens are invalid).
*/

// camelCase examples
let myVariable = 10;
let userInputValue = "test";
function calculateTotal(price, tax) { return price + tax; }

// PascalCase examples
class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

class DataProcessor {
    process() {
        return "processed";
    }
}

// snake_case examples
let user_name = "John";
let total_amount = 500;
let is_active = true;

// UPPER_CASE examples
const MAX_USERS = 100;
const API_KEY = "abc123";
const DEFAULT_TIMEOUT = 5000;

// kebab-case not allowed
// let user-name = "invalid"; // would cause error
// let my-variable = 5; // would cause error