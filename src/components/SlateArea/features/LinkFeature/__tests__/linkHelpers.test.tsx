import { addMissingHTTP } from "../linkHelpers";

test("addMissingHTTP() adds http:// to absolute links", () => {
  expect(addMissingHTTP("www.example.com")).toEqual("http://www.example.com");
  expect(addMissingHTTP("example.com")).toEqual("http://example.com");
});

test("addMissingHTTP() does not add http:// if the string starts with http://", () => {
  expect(addMissingHTTP("http://www.example.com")).toEqual("http://www.example.com");
});

test("addMissingHTTP() does not add http:// if the string starts with https://", () => {
  expect(addMissingHTTP("https://www.example.com")).toEqual("https://www.example.com");
});

test("addMissingHTTP() does not add http:// if the string starts with mailto:", () => {
  expect(addMissingHTTP("mailto:alice@example.com")).toEqual("mailto:alice@example.com");
});

test("addMissingHTTP() does not add http:// if the string starts with ftp://", () => {
  expect(addMissingHTTP("ftp://example.com")).toEqual("ftp://example.com");
});

test("addMissingHTTP() does not add http:// if the string starts with tel://", () => {
  expect(addMissingHTTP("tel:+44-00-1234-4567")).toEqual("tel:+44-00-1234-4567");
});

test("addMissingHTTP() considers a link to be relative if it starts with /", () => {
  expect(addMissingHTTP("/about-us")).toEqual("/about-us");
});
