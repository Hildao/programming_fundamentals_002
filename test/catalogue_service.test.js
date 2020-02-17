const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });

  describe("catalogueService.checkBook", () => {
    test("returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
    });

    test("returns false if the book exists in the list", () => {
      expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
    });
  });

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returnscatalogue the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });

    test("returns 0 if no books begin with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
    });
  });

  describe("catalogueService.countBooksByKeyword", () => {
    test("returns the number of books in the catalog with this keyword", () => {
      expect(catalogueService.countBooksByKeyword('assassin')).toBe(3);
    });

    test("returns the number of books in the catalog with this keyword", () => {
      expect(catalogueService.countBooksByKeyword('normal')).toBe(2);
    });

    test("returns 0 if the book is not found in the catalog with this keyword", () => {
      expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    const expected = [
      "A Tale of Two Cities by Charles Dickens",
      "Oliver Twist by Charles Dickens",
      "Great Expectations by Charles Dickens"
    ]
    test("returns books by a given author from the list", () => {
      expect(catalogueService.getBooksByAuthor(
        [
          "A Tale of Two Cities by Charles Dickens",
          "Oliver Twist by Charles Dickens",
          "Great Expectations by Charles Dickens",
        ])).toEqual(catalogueService.getBooksByAuthor(expected));
    });

    test("returns an emmpty array if there are no books by given author found on the list", () => {
      expect(catalogueService.getBooksByAuthor(
        [
          "A Tale of Two Cities by Charles Dickens",
          "Oliver Twist by Charles Dickens",
          "Great Expectations by Charles Dickens",
        ])).toEqual(catalogueService.getBooksByAuthor(0));
    });

    test("returns books by both Charles Darwin and Charles Dickens from the list", () => {
      expect(catalogueService.getBooksByAuthor(
        [
          "Charles"

        ])).toEqual(catalogueService.getBooksByAuthor(expected));
    });
  });
});
