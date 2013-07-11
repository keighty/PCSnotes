# Instance vars controller view

The ActionController#render method executes the template code (erb, haml) within the scope of the current ApplicationController instance. That means that all of the code within your template is executed inside of a method within your ApplicationController, and as such has access to the instance variables of the object it was executed inside of.

If you don't call render then ApplicationController will try to figure out which template to call render with based on the action name