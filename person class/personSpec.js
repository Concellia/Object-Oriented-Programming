describe("it should be able to create a new person", function() {
  it("it should return a name if asked for a persons name", function() {
    let person = new Person("Tiyiselani", 25, "female", ["movies", "music"]);
    expect(person.name).toBe("Tiyiselani");
  });
  it("it should return a age if asked for a persons age", function() {
    let person = new Person("Tiyiselani", 25, "female", ["movies", "music"]);
    expect(person.age).toBe(25);
  });
  it("it should return a gender if asked for a persons gender", function() {
    let person = new Person("Tiyiselani", 25, "female", ["movies", "music"]);
    expect(person.gender).toBe("female");
  });
  it("it should return interests if asked for a persons interests", function() {
    let person = new Person("Tiyiselani", 25, "female", ["movies", "music"]);
    expect(person.interests).toEqual(["movies", "music"]);
  });
  it("should be able to give an introduction of a person", function() {
    let greet = new Person("Tiyiselani", 25, "female", ["movies", "music"]);
    expect(greet.greet()).toBe(
      "Hi my name is Tiyiselani, I am 25 years old. I am a female I love movies and music."
    );
  });
});
