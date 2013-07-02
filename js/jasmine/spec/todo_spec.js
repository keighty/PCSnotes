describe( "todolist", function () {
  var item;
  var number;

  beforeEach(function () {
    mylist = new ToDoList();
  });

  it( "should be able to add an item", function () {
    mylist.newItem("This is a new item");
    expect(mylist.toDos).toContain("This is a new item");
  });
});