# LALR parser
In computer science, an LALR parser[a] or Look-Ahead LR parser is a simplified version of a Canonical LR parser, to parse (separate and analyze) a text according to a set of production rules specified by a formal grammar for a computer language. The LALR parser technique was invented by Frank DeRemer for his 1969 PhD dissertation, Practical Translators for LR(k) languages,[1] in order to address the practical difficulties of that time of implementing Canonical LR parsers. The simplification that takes place results in a parser with significantly reduced memory requirements but decreased language-recognition power.[1] However, this power is enough for many mainstream computer languages, including Java.[2] The addition of some hand-written code, specific to the language being parsed, can improve the power of the LALR parser.
In practice LALR parsers are not written by hand, instead being automatically generated from the grammar by a LALR parser generator such as Yacc or GNU Bison. The automatically generated code may be augmented by hand-written code to augment the power of the resulting parser.