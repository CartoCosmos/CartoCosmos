import 'jsdom-global/register';
import AstroMath from '../src/js/AstroMath';
import { expect } from "chai";

// global class AstroMath variable
let testMath = new AstroMath("mars");

describe('Testing AstroMath Functions', function() {

  // testing AstroMath created a class object
  it('Testing AstroMath Object', function() {
    // add an assertion
    
    expect(testMath).to.be.an('Object');
  })

  // testing getMajorRadius function
  it('Testing getMajorRadius: Mars should be 3396190', function() {
    // add an assertion
    let majorRadius = testMath.getMajorRadius();
    expect(majorRadius).to.equal(3396190);
  })

  // testing getMinorRadius function
  it('Testing getMinorRadius: Mars should be 3376200', function() {
    // add an assertion
    let majorRadius = testMath.getMinorRadius();
    expect(majorRadius).to.equal(3376200);
  })

  // testing toRadians function
  it('Testing toRadians: 360 degrees should be 6.283185307179586', function() {
    // add an assertion
    let majorRadius = testMath.toRadians(360);
    expect(majorRadius).to.equal(6.283185307179586);
  })

    // testing toDegrees function
    it('Testing toDegrees: 6.283185307179586 degrees should be 360', function() {
      // add an assertion
      let majorRadius = testMath.toDegrees(6.283185307179586);
      expect(majorRadius).to.equal(360);
    })

    // testing latToPlanetOgraphic function
    it('Testing latToPlanetOgraphic: 80 should be 80.11504513783566 ', function() {
      // add an assertion
      let majorRadius = testMath.latToPlanetOgraphic(80);
      expect(majorRadius).to.equal(80.11504513783566);
    })

    // testing lonTo360 function
    it('Testing lonTo360 Cylindrical: 0 should be 180 ', function() {
      // add an assertion
      let majorRadius = testMath.lonTo360(0, "EPSG:4326");
      expect(majorRadius).to.equal(180);
    })

    // testing lonTo360 function
    it('Testing lonTo360 Non-Cylindrical: -180 should be 180 ', function() {
      // add an assertion
      let majorRadius = testMath.lonTo360(-180, "");
      expect(majorRadius).to.equal(180);
    })

    // testing domainToPositiveWest function
    it('Testing domainToPositiveWest Normal Range: -180 should be 180 ', function() {
      // add an assertion
      let majorRadius = testMath.domainToPositiveWest(-180, true);
      expect(majorRadius).to.equal(180);
    })

    // testing domainToPositiveWest function
    it('Testing domainToPositiveWest Not Normal Range: 0 should be 360 ', function() {
      // add an assertion
      let majorRadius = testMath.domainToPositiveWest(0, false);
      expect(majorRadius).to.equal(360);
    })

    // testing wrapLongitude function
    it('Testing wrapLongitude: 360 should be 0 ', function() {
      // add an assertion
      let majorRadius = testMath.wrapLongitude(360);
      expect(majorRadius).to.equal(0);
    })
});