#JavaScript Spies, Mocks, and Stubs

* based on ECMAScript
* invented by Netscape!
* create a test suite of javascript tests for:
** capturing wisdom
** exploring weird behaviour
** testing known behaviour in new browsers
** exploring new frameworks
** running performance tests

#Plug-ins vs functions vs libraries
* Function: 1-20 LoC
* Plugin/Namespace: 20-100 LoC
* Open source plugin: >100 LoC

#Stubs vs Mocks
* Test stub (used for providing the tested code with “indirect input”)
* Mock object (used for verifying “indirect output” of the tested code, by first
 defining the expectations before the tested code is executed)
* Test spy (used for verifying “indirect output” of the tested code, by
 asserting the expectations afterwards, without having defined the
  expectations before the tested code is executed)
* Fake object (used as a simpler implementation, e.g. using an in-memory
 database in the tests instead of doing real database access)
* Dummy object (used when a parameter is needed for the tested method but
 without actually needing to use the parameter)

#Jasmine Spy-specific Matchers

When working with spies, these matchers are quite handy:

`expect(x).toHaveBeenCalled()` passes if `x` is a spy and was called

`expect(x).toHaveBeenCalledWith(arguments)` passes if `x` is a spy and was called with the specified arguments

`expect(x).not.toHaveBeenCalled()` passes if `x` is a spy and was not called

`expect(x).not.toHaveBeenCalledWith(arguments)` passes if `x` is a spy and was not called with the specified arguments

<small>The old matchers `wasCalled`, `wasNotCalled`, `wasCalledWith`, and `wasNotCalledWith` have been deprecated and will be removed in a future release. Please change your specs to use `toHaveBeenCalled`, `not.toHaveBeenCalled`, `toHaveBeenCalledWith`, and `not.toHaveBeenCalledWith` respectively.</small>

Spies can be trained to respond in a variety of ways when invoked:

`spyOn(x, 'method').andCallThrough()`: spies on AND calls the original function spied on

`spyOn(x, 'method').andReturn(arguments)`: returns passed arguments when spy is called

`spyOn(x, 'method').andThrow(exception)`: throws passed exception when spy is called

`spyOn(x, 'method').andCallFake(function)`: calls passed function when spy is called

Spies can also be retrained after first being invoked:

`spyOn(x, 'method').andReturn(value1); ... ; x.method.andReturn(value2)`: changes the value returned by `x.method()`

Spies have some useful properties:

`callCount`: returns number of times spy was called

`mostRecentCall.args`: returns argument array from last call to spy.

`argsForCall[i]` returns arguments array for call `i` to spy.

Spies are automatically removed after each spec. They may be set in the beforeEach function.
