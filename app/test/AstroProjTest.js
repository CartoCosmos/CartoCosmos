import { expect } from "chai";

import AstroProj from "../src/js/AstroProj";

describe("AstroProj", function() {
  it("should return a proj-code and proj-string for a cylindrical projection", function() {
    let testProj = new AstroProj();
    expect(testProj).to.be.an("Object");
    expect(
      testProj.getStringAndCode("cylindrical", { a: 1, c: 2 })["string"]
    ).to.equal("+proj=longlat +a=1 +b=2 +no_defs");
  });

  it("should return a proj-code and proj-string for a north polar projection", function() {
    let testProj = new AstroProj();
    expect(testProj).to.be.an("Object");
    expect(
      testProj.getStringAndCode("northPolar", { a: 1, c: 2 })["string"]
    ).to.equal(
      "+proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=1 +b=2 +units=m +no_defs"
    );
  });

  it("should return a proj-code and proj-string for a south polar projection", function() {
    let testProj = new AstroProj();
    expect(testProj).to.be.an("Object");
    expect(
      testProj.getStringAndCode("southPolar", { a: 1, c: 2 })["string"]
    ).to.equal(
      "+proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=1 +b=2 +units=m +no_defs"
    );
  });

  it("should throw an exception for an unsupported projection.", function() {
    let testProj = new AstroProj();
    expect(testProj).to.be.an("Object");

    expect(function() {
      testProj.getStringAndCode("invalidProjection", { a: 1, c: 2 });
    }).to.throw(
      "No projection found for the projection [invalidProjection] given."
    );
  });
});
