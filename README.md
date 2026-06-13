# LearnPlaywrightBatch2x

A comprehensive learning repository for JavaScript basics and Playwright automation testing concepts.

## Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Chapter Breakdown](#chapter-breakdown)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Resources](#resources)

## Overview

This repository contains educational materials for learning JavaScript fundamentals and preparing for Playwright automation testing. It includes code examples, best practices, and keyboard shortcuts for development.

## Folder Structure

```
LearnPlaywrightBatch2x/
├── chapter_01_Basics/
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JS_Verify_Setup.js
│   ├── 04_HotCode.js
│   ├── 05_Basics_01.js
│   ├── practice01.js
│   └── practice02.js
├── chapter_02_JS_Concepts/
│   └── 05_JS_Basics.js
├── chapter_03_Identifier_Literals/
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Part2.js
│   ├── 08_Comments.js
│   ├── ArraysPractice01.js
│   └── VS_Code_keyboard_shortcut_win.md
├── chapter_04_Javascript_Concepts/
│   ├── 09_var_let_const.js
│   ├── 10_functions.js
│   ├── 11_var_explained.js
│   ├── 12_let_peope_love.js
│   ├── 13_const_explained.js
│   ├── 14_var_functionscope.js
│   ├── 15_let_scope.js
│   ├── 16_Hoisting.js
│   ├── 17_hoisting_fn.js
│   ├── 18_let_hoisting.js
│   ├── 19_let_hoisting_block.js
│   ├── 20_let_const.js
│   └── 21_Jr_QA.js
├── chapter_05_Literal/
│   ├── 22_Literal.js
│   ├── 23_null_undefined.js
│   ├── 24_null.js
│   ├── 25_Literal_all.js
│   ├── 26_Literal_Number_all.js
│   ├── 27_Strings.js
│   ├── 28_Template_Literal.js
│   └── 29_Backtick_single_double.js
├── chapter_06_Opretors/
│   ├── 30_Opretors.js
│   ├── 31_Arithmetic_Operators.js
│   ├── 32_Modulus_OP.js
│   ├── 33_Expo_OP.js
│   ├── 34_IQ.js
│   ├── 35_Comparsion_OP.js
│   ├── 36_Comparsion_Strict_loose.js
│   ├── 37_IQ_Loose_Strict.js
│   ├── 38_Confusing_Comparsion.js
│   ├── 39_Logical_Op.js
│   ├── 40_String_Con_Op.js
│   ├── 41_Ternary_Op.js
│   ├── 42_Type_Op.js
│   ├── 43_Incre_Decre_Op.js
│   ├── 44_Null_Op.js
│   ├── 45_Post_Incriment.js
│   ├── 46_IQ_Incriment_D.js
│   ├── 47_Advance_Incriment_Decriment.js
├── chapter_07_If_Else/
│   ├── 48_If_Else.js
│   ├── 49_If_elseif_else.js
│   ├── 50_REAL_IF_ELSE.js
│   ├── 51_API_If_Else.js
│   ├── 52_IQ_IF_ELSE.js
│   ├── 53_IF_ELSE_real.js
│   ├── 54_IQ.js
│   ├── 55_If.js
│   ├── 56_IQ_Even_Odd.js
│   ├── 57_Grade_Calc.js
│   ├── 58_Leap_Year.js
│   ├── Task_01.js
│   └── Task_02.js
├── chapter_08_Switch_Statement/
│   ├── 59_Switch.js
│   ├── 60_No_Break.js
│   ├── 61_Default.js
│   ├── 62_Real_Time_Example.js
│   ├── 63_Switch_Group.js
│   ├── 64_IQ.js
│   ├── 65_IQ2.js
│   ├── 66_IQ3.js
│   └── 67_IQ4.js
├── chapter_09_UserInput/
│   ├── 68_User_Input.js
│   ├── 69_Node_readline.js
│   └── 70_Prompt_sync.js
├── chapter_10_Loops/
│   ├── 71_For_loop.js
│   ├── 72_For_loop.js
│   ├── 73_For_Loop2.js
│   ├── 74_IQ.js
│   ├── 75_For_Of_In_Each.js
│   ├── 76_While.js
│   ├── 77_Do_While.js
│   ├── 78_Do_While.js
│   ├── 79_IQ.js
│   ├── 80_IQ.js
│   ├── 81_IQ.js
│   ├── 82_IQ.js
│   ├── Task_01.js
│   └── Task_02.js
├── chapter_11_Arrays/
│   ├── 83_Arrays.js
│   ├── 84_Arrays.js
│   ├── 85_Access_Array.js
│   ├── 86_Arrays_Adding_Remove.js
│   ├── 87_Adding_Remove2.js
│   ├── 88_REAL_Example.js
│   ├── 89_Searching.js
│   ├── 90_Iterate.js
│   ├── 91_Transform_Array.js
│   ├── 92_Arrays.js
│   ├── 93_Array_Slicing.js
│   ├── 94_Concat_array.js
│   ├── 95_Array_Checking.js
│   └── ArraysNotes.md
├── chapter_12_Funtions/
│   ├── 96_Functions.js
│   ├── 97_Type1_Fn_Basic_Functions.js
│   ├── 98_Type2_Fn_With_Param_No_Return.js
│   ├── 99_Type3_Fn_without_Param_Return_Type.js
│   ├── 100_Type4_Fn_With_Param_With_Return.js
│   ├── 101_Template_literal.js
│   ├── 102_Fn_Expression.js
│   ├── 103_Arrow_Fn.js
│   ├── 104_Arrow_Fn_REAL.js
│   ├── 105_IIFE.js
│   ├── 106_Default_Param_Fn.js
│   ├── 107_IQ.js
│   ├── 108_Rest_Param_Fn.js
│   ├── 109_IQ.js
│   ├── 110_Spread_IQ.js
│   ├── 111_Scope.js
│   ├── 112_IQ.js
│   ├── 113_Closure.js
│   ├── 114_Closure.js
│   ├── 115_API_REAL_Closure.js
│   ├── 116_Higher_Order_Fn.js
│   └── 117_Pure_Fn.js
├── chapter_13_Strings/
│   ├── 118_Strings.js
│   ├── 119_String_Properties.js
│   ├── 120_Search_Check_Str.js
│   ├── 121_Substring.js
│   ├── 122_Transform_Str.js
│   ├── 123_SC.js
│   └── Task_030620206.js
├── chapter_14_Objects/
│   ├── 124_Objects.js
│   ├── 125_Objects2.js
│   ├── 126_Objects_Creation.js
│   ├── 127_Objects_REAL.js
│   ├── 128_Primitive_Ref.js
│   ├── 129_Ob_Examples.js
│   ├── 130_IQ.js
│   ├── 131_Object_Fn.js
│   ├── 132_Obj_Decon.js
│   ├── 133_Spead.js
│   ├── 134_Objects_GET_SET_Methods.js
│   ├── 135_IQ.js
│   ├── 136_Obj_REAL.js
│   └── 137_Let_const_obj.js
├── chapter_15_2D_Array/
│   ├── 138_2D_Array.js
│   ├── 139_2d.js
│   ├── 140_REAL.js
│   ├── 141_2d_Array_Fn.js
│   └── 142_IQ_Right_Pattern_Py.js
├── chapter_16_Callback/
│   ├── 143_Callback.js
│   ├── 144_CB.js
│   ├── 145_CB_Fn.js
│   ├── 146_PW_CB.js
│   ├── 147_JS_CB.js
│   ├── 148_Sync_CB.js
│   ├── 149_Async_CB.js
│   ├── 150_CB_Hell.js
│   ├── 151_CB_Hell_20_Steps.js
│   ├── 152_CB_Parameter.js
│   └── 153_CB_Return.js
├── chapter_17_Promise/
│   ├── 154_Promise.js
│   ├── 155_Promise_Real_API.js
│   ├── 156_Promise_Real_API_part2.js
│   ├── 157_Finally.js
│   ├── 158_Call_Py_Problem.js
│   ├── 159_Promise_All.js
│   └── 160_Promise_IQ.js
├── Practice_JS/
│   ├── Arrays/
│   │   ├── 01_Arrays_Creations.js
│   │   ├── 02_Arrays_Access_Modify.js
│   │   ├── 03_Arrays_Add_Remove.js
│   │   ├── 04_Array_Real_Use.js
│   │   ├── 05_Arrays_Searching.js
│   │   ├── 06_Arrays_Itarating.js
│   │   ├── 07_Arrays_Transfroming_Arrays.js
│   │   └── 08_Arrays_Sorting.js
│   ├── Functions/
│   │   ├── F1.js
│   │   ├── F2.js
│   │   ├── Function03_IIFE.js
│   │   ├── F4_Default_Parameter.js
│   │   └── F5_Rest_Parameters.js
│   ├── MultiDimentionlArrays/
│   │   ├── 01_MD_Arrays.js
│   │   ├── 02_MD_Arrays.js
│   │   ├── 03_MD_Arrays_Functions.js
│   │   └── 04_MD_Arrays_Patteerns.js
│   ├── Callback/
│   │   ├── 01_Callback.js
│   │   ├── 02_Sync_Callback.js
│   │   ├── 03_Async_Callback.js
│   │   ├── 04_Callback_hell.js
│   │   ├── 05_Callback_Ex01.js
│   │   └── 06_Callback_Return.js
   │   └── Promise/
   │       ├── 01_Promise.js
   │       ├── 02_Promise_API.js
   │       ├── 03_Promise_Catch.js
   │       ├── 04_Promise_Finally.js
   │       ├── 05_Promise_Real.js
   │       ├── 06_Promise_All.js
   │       ├── 07_Promise_AllSettled.js
   │       └── 08_Promise_race.js
   │   └── Async_Await/
   │       ├── 01_Async_Await.js
   │       ├── 02_Converted_Code_Async_Await.js
   │       ├── 03_Async_Await.js
   │       ├── 04_Try_Catch.js
   │       ├── 05_Sequential_Execution.js
   │       ├── 06_Parallel_Execution.js
   │       ├── 07_IQ.js
   │       └── 08_API_Real_Flaky.js
   └── README.md
```

## Chapter Breakdown

### Chapter 1: Basics
Introduction to JavaScript fundamentals including basic setup verification and initial coding concepts.

**Files:**
- `01_Basics.js` - Basic JavaScript concepts
- `02_JS.js` - JavaScript fundamentals
- `03_JS_Verify_Setup.js` - Setup verification
- `04_HotCode.js` - Hot code examples
- `05_Basics_01.js` - Basic concepts part 1
- `practice01.js` - Practice exercises 1
- `practice02.js` - Practice exercises 2

### Chapter 2: JavaScript Concepts
Deeper dive into JavaScript core concepts and features.

**Files:**
- `05_JS_Basics.js` - JavaScript basics

### Chapter 3: Identifiers and Literals
Understanding JavaScript identifiers, naming conventions, and literal values.

**Files:**
- `06_Identifier_Rules.js` - Rules for JavaScript identifiers
- `07_Identifier_Part2.js` - Identifier rules with examples and naming conventions
- `08_Comments.js` - Comments in JavaScript
- `ArraysPractice01.js` - Array practice exercises
- `VS_Code_keyboard_shortcut_win.md` - Windows keyboard shortcuts for VS Code

### Chapter 4: JavaScript Concepts
Advanced JavaScript concepts including variables, functions, scoping, and hoisting.

**Files:**
- `09_var_let_const.js` - Variable declarations with var, let, and const
- `10_functions.js` - Function declarations and expressions
- `11_var_explained.js` - Detailed explanation of var
- `12_let_peope_love.js` - Understanding let keyword
- `13_const_explained.js` - Understanding const keyword
- `14_var_functionscope.js` - Function scope with var
- `15_let_scope.js` - Block scope with let
- `16_Hoisting.js` - Variable and function hoisting
- `17_hoisting_fn.js` - Hoisting with functions
- `18_let_hoisting.js` - Let hoisting behavior
- `19_let_hoisting_block.js` - Let hoisting inside blocks
- `20_let_const.js` - Let and const comparison
- `21_Jr_QA.js` - Junior QA concept exercises

### Chapter 5: Literals
Exploring JavaScript literals including numbers, strings, null, undefined, and template literals.

**Files:**
- `22_Literal.js` - Introduction to literals
- `23_null_undefined.js` - Difference between null and undefined
- `24_null.js` - Understanding null
- `25_Literal_all.js` - All literal types overview
- `26_Literal_Number_all.js` - All number types in JavaScript
- `27_Strings.js` - String literals and methods
- `28_Template_Literal.js` - Template literals with backticks
- `29_Backtick_single_double.js` - Difference between backtick, single, and double quotes

### Chapter 6: Operators
Understanding JavaScript operators including arithmetic, comparison, strict vs loose equality, and edge cases.

**Files:**
- `30_Opretors.js` - Introduction to operators
- `31_Arithmetic_Operators.js` - Arithmetic operators
- `32_Modulus_OP.js` - Modulus operator
- `33_Expo_OP.js` - Exponentiation operator
- `34_IQ.js` - Interview questions on operators
- `35_Comparsion_OP.js` - Comparison operators
- `36_Comparsion_Strict_loose.js` - Strict vs loose comparison
- `37_IQ_Loose_Strict.js` - Interview questions on loose and strict equality
- `38_Confusing_Comparsion.js` - Confusing comparison edge cases with == and ===
- `39_Logical_Op.js` - Logical operators (AND, OR, NOT)
- `40_String_Con_Op.js` - String concatenation operators
- `41_Ternary_Op.js` - Ternary operator with nested examples
- `42_Type_Op.js` - Typeof operator for checking data types
- `43_Incre_Decre_Op.js` - Pre-increment and pre-decrement operators
- `44_Null_Op.js` - Nullish coalescing operator (??)
- `45_Post_Incriment.js` - Post-increment and post-decrement operators
- `46_IQ_Incriment_D.js` - Interview questions on increment/decrement
- `47_Advance_Incriment_Decriment.js` - Advanced increment and decrement expressions

### Chapter 7: If Else
Mastering conditional statements with if, else if, and else blocks along with real-world examples and interview questions.

**Files:**
- `48_If_Else.js` - Introduction to if-else statements
- `49_If_elseif_else.js` - If-else if-else ladder
- `50_REAL_IF_ELSE.js` - Real-world if-else examples
- `51_API_If_Else.js` - API-related if-else scenarios
- `52_IQ_IF_ELSE.js` - Interview questions on if-else
- `53_IF_ELSE_real.js` - More real-world if-else examples
- `54_IQ.js` - Additional interview questions
- `55_If.js` - Basic if statement examples
- `56_IQ_Even_Odd.js` - Even/odd check interview question
- `57_Grade_Calc.js` - Grade calculator example
- `58_Leap_Year.js` - Leap year checker example
- `Task_01.js` - Practice task 1
- `Task_02.js` - Practice task 2

### Chapter 8: Switch Statement
Learning switch-case statements including grouping cases, default handling, and real-time examples.

**Files:**
- `59_Switch.js` - Introduction to switch statements
- `60_No_Break.js` - Switch without break (fall-through behavior)
- `61_Default.js` - Default case in switch
- `62_Real_Time_Example.js` - Real-world switch examples
- `63_Switch_Group.js` - Grouping multiple cases
- `64_IQ.js` - Interview questions on switch
- `65_IQ2.js` - More interview questions
- `66_IQ3.js` - Additional switch interview questions
- `67_IQ4.js` - Advanced switch interview questions

### Chapter 9: User Input
Handling user input in Node.js using readline and prompt-sync modules.

**Files:**
- `68_User_Input.js` - Introduction to user input handling
- `69_Node_readline.js` - Using Node.js readline module
- `70_Prompt_sync.js` - Using prompt-sync for synchronous input

### Chapter 10: Loops
Mastering JavaScript loops including for, for...of, for...in, while, do...while, and related interview questions.

**Files:**
- `71_For_loop.js` - Introduction to for loops
- `72_For_loop.js` - More for loop examples
- `73_For_Loop2.js` - Advanced for loop concepts with practice examples (odd/even, sum, multiplication table, star patterns, right-aligned triangles)
- `74_IQ.js` - Interview questions on loops
- `75_For_Of_In_Each.js` - For...of, for...in, and forEach loops
- `76_While.js` - Introduction to while loops with practice examples (countdown, sum, factorial)
- `77_Do_While.js` - Introduction to do...while loops
- `78_Do_While.js` - More do...while examples with real-world scenarios (fuel check, number growth, timer, PIN authentication)
- `79_IQ.js` - Loop interview questions
- `80_IQ.js` - More loop interview questions
- `81_IQ.js` - Additional loop interview questions with continue keyword and practice examples
- `82_IQ.js` - Advanced loop interview questions
- `Task_01.js` - Triangle classification task
- `Task_02.js` - FizzBuzz classic programming task

### Chapter 11: Arrays
Comprehensive coverage of JavaScript arrays including creation, access, modification, searching, iteration, and transformation methods.

**Files:**
- `83_Arrays.js` - Introduction to arrays and array creation
- `84_Arrays.js` - Array basics and methods overview
- `85_Access_Array.js` - Accessing and modifying array elements
- `86_Arrays_Adding_Remove.js` - Adding and removing elements from arrays
- `87_Adding_Remove2.js` - More array manipulation methods
- `88_REAL_Example.js` - Real-world array use cases
- `89_Searching.js` - Array searching methods (indexOf, includes, find, findIndex)
- `90_Iterate.js` - Array iteration techniques (forEach, map, filter, reduce)
- `91_Transform_Array.js` - Array transformation methods (map, filter, reduce, sort, flat)
- `92_Arrays.js` - Array sorting methods (natural sorting, lexicographic sorting, ascending/descending)
- `93_Array_Slicing.js` - Array slicing and combining methods (slice, negative indexing)
- `94_Concat_array.js` - Array concatenation and join methods (concat, spread operator, join)
- `95_Array_Checking.js` - Array checking methods (isArray, every, some)
- `ArraysNotes.md` - Detailed notes on array methods with Playwright automation use cases and examples

### Chapter 12: Functions
Comprehensive coverage of JavaScript functions including basic functions, parameters, return types, template literals, function expressions, and arrow functions.

**Files:**
- `96_Functions.js` - Introduction to functions (declaration and calling)
- `97_Type1_Fn_Basic_Functions.js` - Basic functions without parameters or return
- `98_Type2_Fn_With_Param_No_Return.js` - Functions with parameters but no return
- `99_Type3_Fn_without_Param_Return_Type.js` - Functions without parameters but with return values
- `100_Type4_Fn_With_Param_With_Return.js` - Functions with both parameters and return values
- `101_Template_literal.js` - Template literals in function contexts
- `102_Fn_Expression.js` - Function expressions
- `103_Arrow_Fn.js` - Arrow functions and syntax
- `104_Arrow_Fn_REAL.js` - Real-world arrow function examples
- `105_IIFE.js` - Immediately Invoked Function Expressions (IIFE)
- `106_Default_Param_Fn.js` - Functions with default parameters
- `107_IQ.js` - Interview questions on default parameters
- `108_Rest_Param_Fn.js` - Rest parameters in functions
- `109_IQ.js` - Interview questions on rest parameters
- `110_Spread_IQ.js` - Spread operator interview questions
- `111_Scope.js` - Function scope and block scope deep dive
- `112_IQ.js` - Scope-related interview questions
- `113_Closure.js` - Introduction to closures
- `114_Closure.js` - Advanced closure concepts
- `115_API_REAL_Closure.js` - Real-world API and closure examples
- `116_Higher_Order_Fn.js` - Higher-order functions and callbacks
- `117_Pure_Fn.js` - Pure functions and side effects

### Chapter 13: Strings
Exploring JavaScript strings including properties, searching, checking, substrings, transformations, and case conversion.

**Files:**
- `118_Strings.js` - Introduction to JavaScript strings
- `119_String_Properties.js` - String properties and length with real-world Playwright examples (order ID extraction, text cleanup, URL assertion, masking validation, dynamic locator building)
- `120_Search_Check_Str.js` - String searching and checking methods with Playwright testing scenarios (environment checker, error log scanner, breadcrumb validator, case-insensitive matcher, token expiry checker)
- `121_Substring.js` - Substring extraction methods with Playwright use cases (activation code extraction, URL slug parser, date range splitter, price parser, text preview truncation)
- `122_Transform_Str.js` - String transformation techniques
- `123_SC.js` - String case conversion and additional methods
- `Task_030620206.js` - String manipulation practice task

### Chapter 14: Objects
Deep dive into JavaScript objects including creation, primitive vs reference types, object methods, destructuring, spread operator, getters/setters, and real-world examples.

**Files:**
- `124_Objects.js` - Introduction to JavaScript objects
- `125_Objects2.js` - Object properties and dot vs bracket notation
- `126_Objects_Creation.js` - Object creation patterns and methods
- `127_Objects_REAL.js` - Real-world object use cases
- `128_Primitive_Ref.js` - Primitive vs reference types
- `129_Ob_Examples.js` - Object examples and exercises
- `130_IQ.js` - Interview questions on objects
- `131_Object_Fn.js` - Object methods and functions
- `132_Obj_Decon.js` - Object destructuring
- `133_Spead.js` - Spread operator with objects
- `134_Objects_GET_SET_Methods.js` - Getter and setter methods
- `135_IQ.js` - More interview questions on objects
- `136_Obj_REAL.js` - Real-world object examples
- `137_Let_const_obj.js` - Let vs const with objects

### Chapter 15: 2D Arrays
Understanding two-dimensional arrays, matrix operations, grid traversal, nested loops, and practical pattern exercises including real-world automation test matrix examples.

**Files:**
- `138_2D_Array.js` - Introduction to 2D arrays and nested loop traversal
- `139_2d.js` - Matrix basics, rows, columns, and grid concepts
- `140_REAL.js` - Real-world test matrix example (test case status tracking)
- `141_2d_Array_Fn.js` - 2D array functions: column extraction, row finder by key, grid coordinates search, matrix comparison/diff checker, HTML table data extractor, column sorting validator, low-stock highlighting, and flattening form values
- `142_IQ_Right_Pattern_Py.js` - Pattern programming exercises (right triangle, inverted triangle, pyramid)

### Chapter 16: Callbacks
Comprehensive coverage of callback functions including basic callbacks, synchronous and asynchronous callbacks, callback hell, and real-world examples.

**Files:**
- `143_Callback.js` - Introduction to callback functions with anonymous and arrow function examples
- `144_CB.js` - Basic callback test example
- `145_CB_Fn.js` - Callback functions with real-world cafe ordering examples
- `146_PW_CB.js` - Playwright-specific callback examples
- `147_JS_CB.js` - JavaScript callback patterns and examples
- `148_Sync_CB.js` - Synchronous callback execution patterns
- `149_Async_CB.js` - Asynchronous callback execution patterns
- `150_CB_Hell.js` - Callback hell introduction and examples
- `151_CB_Hell_20_Steps.js` - Deep callback nesting with 20 steps example
- `152_CB_Parameter.js` - Callback functions with parameters
- `153_CB_Return.js` - Callback return values and patterns

### Chapter 17: Promises
Comprehensive coverage of JavaScript Promises including creation, real-world API examples, error handling, finally blocks, Promise.all, Promise.allSettled, and interview questions.

**Files:**
- `154_Promise.js` - Introduction to Promises with creation and basic chaining
- `155_Promise_Real_API.js` - Real-world API Promise examples with fetch and status handling
- `156_Promise_Real_API_part2.js` - Advanced API Promise patterns and multiple request handling
- `157_Finally.js` - Promise finally block for cleanup and final execution
- `158_Call_Py_Problem.js` - Practical problem solving with Promises
- `159_Promise_All.js` - Promise.all and Promise.allSettled for concurrent execution and test report scenarios
- `160_Promise_IQ.js` - Promise interview questions covering resolve, reject, chaining, error handling, and Promise combinators

### Practice JS: Arrays & Functions
Hands-on practice modules for JavaScript arrays and functions.

**Arrays Files:**
- `01_Arrays_Creations.js` - Array creation methods
- `02_Arrays_Access_Modify.js` - Accessing and modifying array elements
- `03_Arrays_Add_Remove.js` - Adding and removing elements from arrays
- `04_Array_Real_Use.js` - Real-world array use cases
- `05_Arrays_Searching.js` - Array searching methods
- `06_Arrays_Itarating.js` - Array iteration techniques
- `07_Arrays_Transfroming_Arrays.js` - Array transformation methods
- `08_Arrays_Sorting.js` - Array sorting techniques

**Functions Files:**
- `F1.js` - Function basics and examples
- `F2.js` - Function declarations, expressions, arrow functions, and HTTP status code validation
- `Function03_IIFE.js` - Immediately Invoked Function Expressions (IIFE)
- `F4_Default_Parameter.js` - Functions with default parameters
- `F5_Rest_Parameters.js` - Rest parameters, spread operator, and hoisting behavior

**MultiDimentionlArrays Files:**
- `01_MD_Arrays.js` - Introduction to multi-dimensional arrays
- `02_MD_Arrays.js` - Accessing and modifying multi-dimensional arrays
- `03_MD_Arrays_Functions.js` - Array functions and methods with multi-dimensional arrays
- `04_MD_Arrays_Patteerns.js` - Common patterns and exercises with multi-dimensional arrays

### Practice JS: Callback
Understanding callback functions, synchronous and asynchronous callbacks, callback hell, and practical examples.

**Files:**
- `01_Callback.js` - Introduction to callback functions (including network delay simulation with timeout callback)
- `02_Sync_Callback.js` - Synchronous callback examples (element clicker, UI status checker, test data sanitizer, custom filter, and API response mock reporter)
- `03_Async_Callback.js` - Asynchronous callback examples
- `04_Callback_hell.js` - Callback hell and nested callbacks
- `05_Callback_Ex01.js` - Callback exercise and examples
- `06_Callback_Return.js` - Callback return values and patterns

### Practice JS: Promise
Mastering JavaScript Promises including creation, chaining, error handling with catch, finally block, real-world API examples, and advanced Promise combinators.

**Files:**
- `01_Promise.js` - Introduction to Promises
- `02_Promise_API.js` - Promise API and methods
- `03_Promise_Catch.js` - Error handling with Promise catch
- `04_Promise_Finally.js` - Promise finally block
- `05_Promise_Real.js` - Real-world Promise examples
- `06_Promise_All.js` - Promise.all and concurrent execution
- `07_Promise_AllSettled.js` - Promise.allSettled for test report scenarios
- `08_Promise_race.js` - Promise.race for timeout and fast-response scenarios

### Practice JS: Async/Await
Mastering JavaScript async/await syntax including basic async functions, error handling with try/catch/finally, sequential and parallel execution, and real-world retry patterns.

**Files:**
- `01_Async_Await.js` - Basic async/await syntax and converting Promise chains to async/await
- `02_Converted_Code_Async_Await.js` - Converting login flow promises to clean async/await syntax
- `03_Async_Await.js` - Async function return behavior and sequential await patterns
- `04_Try_Catch.js` - Error handling with try/catch/finally in async functions
- `05_Sequential_Execution.js` - Sequential test execution with dependent async steps
- `06_Parallel_Execution.js` - Parallel execution using Promise.all with async/await
- `07_IQ.js` - Async/await interview questions covering execution order, error handling, Promise.all, and async IIFE
- `08_API_Real_Flaky.js` - Real-world flaky test retry pattern with async/await

## Getting Started

### Prerequisites

- Node.js installed on your system
- Visual Studio Code (recommended)
- Git for version control

### Usage

1. Clone the repository:
```bash
git clone https://github.com/pankajc-07/LearnPlaywrightBatch2x.git
cd LearnPlaywrightBatch2x
```

2. Open in VS Code:
```bash
code .
```

3. Run JavaScript files using Node.js:
```bash
node chapter_01_Basics/01_Basics.js
```

## Resources

- [JavaScript MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [VS Code Official Documentation](https://code.visualstudio.com/docs)
- [Playwright Documentation](https://playwright.dev/)

## Learning Path

1. Start with Chapter 1 to understand JavaScript basics
2. Move to Chapter 2 for deeper JavaScript concepts
3. Review Chapter 3 for proper identifier naming and coding conventions
4. Explore Chapter 4 for advanced JavaScript concepts like hoisting and scope
5. Study Chapter 5 to master literals, strings, and number types
6. Dive into Chapter 6 to learn operators and avoid common == vs === pitfalls
7. Practice Chapter 7 to master if-else conditional logic
8. Learn Chapter 8 for switch-case statement patterns
9. Explore Chapter 9 to handle user input in Node.js
10. Study Chapter 10 to master loops and iteration patterns
11. Master Chapter 11 to work with arrays effectively
12. Study Chapter 12 to understand functions, parameters, return types, and arrow functions
13. Explore Chapter 13 to master JavaScript strings, searching, and transformations
14. Study Chapter 14 to understand objects, object methods, destructuring, and primitive vs reference types
15. Explore Callback section to understand callback functions, synchronous and asynchronous patterns
16. Study Promise section to master Promise creation, chaining, error handling, and concurrent execution
17. Study Chapter 15 to understand 2D arrays, matrix traversal, and pattern programming
18. Study Chapter 16 to master callback functions, callback hell, and real-world callback patterns
19. Study Chapter 17 to master JavaScript Promises, real-world API handling, and Promise chaining
20. Study the Async/Await practice section to master async/await syntax, error handling, sequential and parallel execution, and real-world retry patterns

## Interview Notes

- `interview.md` - Curated JavaScript interview questions and answers from this curriculum. Recently enhanced with formatted code blocks, tables, and detailed explanations for topics like objects, `const` vs `let` for object references, and common gotchas.

## Tips for Success

- Practice each concept with the provided examples
- Try to modify the code and experiment with different values
- Use the keyboard shortcuts to speed up your development workflow
- Follow the naming conventions when writing your own code
- Review `interview.md` for common interview questions and explanations

## Contributing

Feel free to extend this repository with additional examples and improvements.

## License

This educational repository is provided for learning purposes.

---

**Last Updated:** June 13, 2026
