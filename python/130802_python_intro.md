# Python intro

Used Bob warmup to learn python

```bash
pyBob
├── README.md
├── bob.pyc
├── lib
│   ├── __init__.py
│   ├── bob.py
└── test
    ├── __init__.py
    └── test_bob.py
```

```python
#!/usr/bin/python


class Bob:
    def ask(self, input):
        if self.is_silent(input):
            return "Fine, be that way"
        if self.is_shouting(input):
            return "Woah, chill out!"
        if self.is_asking(input):
            return "Sure"
        return "hello"

    def is_shouting(self, input):
        return input == input.upper()

    def is_silent(self, input):
        return input == ""

    def is_asking(self, input):
        return input[-1] == '?'
```

```python
import unittest, os, sys
sys.path.append(os.path.abspath('..'))
from lib.bob import Bob


class TestBob(unittest.TestCase):

    def test_angry_silence(self):
        my_bob = Bob()
        self.assertEqual("Fine, be that way", my_bob.ask(""))

    def test_shouting(self):
        my_bob = Bob()
        self.assertEqual("Woah, chill out!", my_bob.ask("HEY"))

    def test_questioning(self):
        my_bob = Bob()
        self.assertEqual("Sure", my_bob.ask("How are you?"))


def main():
    unittest.main()

if __name__ == '__main__':
    main()
```
