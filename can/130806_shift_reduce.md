# Shift reduce

```bash
$ racc -o parser.rb grammar.y -v
3 shift/reduce conflicts
```

#What is a shift/reduce conflict

The conflict happens in if/then/elsif/else statements
```
if ( expression ) statement * else statement
```
The star marks the current position of the cursor.
The question the parser must answer is "should I shift, or should I reduce".

Usually, you want to have the longest match, which means you want to shift the "else" token.

Now you want to "tell" your parser generator that "when there is a shift/reduce conflict between the token "else" and the rule "stm -> if ( exp ) stm", then the token must win". To do so, "give a name" to your rule (e.g., "then"), and specify that "then" has less precedence than "else". Something like:

// Precedences go increasing, so "then" < "else".
%nonassoc "then"
%nonassoc "else"
%%
stm: "if" "(" exp ")" stm            %prec "then"
   | "if" "(" exp ")" stm "else" stm
using Bison syntax.

## expect Syntax
[Racc has bison's "expect" directive](http://i.loveruby.net/en/man/racc/grammar.html)
```
# Example

class MyParser
rule
  expect 3
    :
    :
```
> This directive declares "expected" number of shift/reduce conflict. If "expected" number is equal to real number of conflicts, racc does not print confliction warning message.