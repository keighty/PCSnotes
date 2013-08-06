class Parser

  # Declare tokens produced by the lexer
  token AS
  token CONSTANT
  token NEWLINE

rule
# All rules are declared in this format:

  # rule_name:

  #   OtherRule TOKEN AnotherRule {}

  # | OtherRule {}

  # ;

# All parsing will end in this rule, being the trunk of the AST
  Root:
    /* nothing */   { result = Nodes.new([]) }
    Expressions     { result = val[0] }
  ;

# Any list of expressions, class or method body, separated by line breaks
  Expressions:
    Expression      { result = Nodes.new(val) }
  | Expressions Terminator Expression   { result = val[0] << val[2] }
  # To ignore trailing line breaks
  | Expressions Terminator      { result = Nodes.new([val[0]]) }
  ;

# All types of expressions in CAN
  Expression:
    Class
  | Constant  {}
  ;

# All tokens that can terminate an expression
  Terminator:
    NEWLINE
  | ";"
  ;

  Constant:
    CONSTANT {}
  ;

  Class:
    AS CONSTANT {}
  ;
end