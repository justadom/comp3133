const expect = require("chai").expect;
const calculator = require("../calculator");

describe("Calculator Tests", function () {

    describe("Add function", function () {
        it("should add 5 and 2 correctly", function () {
            expect(calculator.add(5, 2)).to.equal(7);
        });

        it("should fail when wrong add result is expected", function () {
            expect(calculator.add(5, 2)).to.not.equal(8);
        });
    });

    describe("Subtract function", function () {
        it("should subtract 2 from 5 correctly", function () {
            expect(calculator.sub(5, 2)).to.equal(3);
        });

        it("should fail when wrong subtract result is expected", function () {
            expect(calculator.sub(5, 2)).to.not.equal(5);
        });
    });

    describe("Multiply function", function () {
        it("should multiply 5 and 2 correctly", function () {
            expect(calculator.mul(5, 2)).to.equal(10);
        });

        it("should fail when wrong multiply result is expected", function () {
            expect(calculator.mul(5, 2)).to.not.equal(12);
        });
    });

    describe("Divide function", function () {
        it("should divide 10 by 2 correctly", function () {
            expect(calculator.div(10, 2)).to.equal(5);
        });

        it("should fail when wrong division result is expected", function () {
            expect(calculator.div(10, 2)).to.not.equal(2);
        });
    });

});
