import 'jsdom-global/register';
import AstroMath from '../src/js/AstroMath';
import { expect } from "chai";

describe('Testing AstroMath Functions', function() {
  let radii;
  let testMath; 
  beforeEach(function() {
    // setup math class
    radii  = {
      a: 3396190, 
      c: 3376200 
    };
    
    testMath = new AstroMath("mars",radii);
  });
 
  afterEach(function() {
    // do nothing
  })


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
  it('Testing toRadians: 360 degrees should be 2pi', function() {
    // add an assertion
    let majorRadius = testMath.toRadians(360);
    expect(majorRadius).to.be.closeTo((2*Math.PI), 0.01);
  })

    // testing toDegrees function
    it('Testing toDegrees: 2pi degrees should be 360', function() {
      // add an assertion
      let majorRadius = testMath.toDegrees((2*Math.PI));
      expect(majorRadius).to.be.closeTo(360, 1);
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
      let majorRadius = testMath.domainToPositiveWest(-180, false);
      expect(majorRadius).to.equal(180);
    })

    // testing wrapLongitude function
    it('Testing wrapLongitude: 360 should be 0 ', function() {
      // add an assertion
      let majorRadius = testMath.wrapLongitude(360);
      expect(majorRadius).to.equal(0);
    })
});