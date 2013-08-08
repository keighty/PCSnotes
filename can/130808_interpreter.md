# Interpreter
1. lexer makes tokens
2. parser turns tokens into nodes
3. interpreter evaluates the nodes

The eval method is the "interpreter" part of our language. All nodes know how to eval itself and returns the result of its evaluation by implementing the "eval" method. The "context" variable is the environment in which the node is evaluated (local variables, current class, etc.).

