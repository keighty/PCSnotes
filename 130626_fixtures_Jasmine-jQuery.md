# Creating a fixture using Jasmine-jQuery

why did we have cross-domain browser barfing?

1. make a rails project and clean out the working space
```
$ rails new fixtureProject
$ cd fixtureProject/public
$ rm ./*
```

2. import [Jasmine-jQuery](https://github.com/velesin/jasmine-jquery) into public folder

3. create spec file
```
$ touch ./spec/my_fixtures_spec.js
```

4. add the following to the new spec file
```
describe( "Working with fixtures", function () {
  it( "should add a div to the spec runner page", function () {
    loadFixtures('my_fixture.html');
    expect($('#my-fixture').length).toEqual(1);
  });
});
```
`loadFixtures('my_fixture.html')` preloads the content of your fixture into the
 SpecRunner.html file (or wherever you put your test)

5. create a new file
```
$ touch ./spec/javascript/fixtures/my_fixture.html
```

6. put the following html in the new file
```
<div id="my-fixture">some complex content here</div>
```

7. start your rails server
```
$ rails server
```

8. navigate to [localhost:3000/SpecRunner.html](localhost:3000/SpecRunner.html)
 to view your test