# Django models

It’s important to add __unicode__() methods to your models, not only for your own sanity when dealing with the interactive prompt, but also because objects’ representations are used throughout Django’s automatically-generated admin.

```python
class Poll(models.Model):
    # ...
    def __unicode__(self):
        return self.question

class Choice(models.Model):
    # ...
    def __unicode__(self):
        return self.choice_text
```