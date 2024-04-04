import {describe, expect, it} from '@jest/globals';
import VerifyJson from "./IsSingleAsteriskInRes";
import testObjects from "./testJsonObjects.json";

describe('isSingleAsteriskInRes', () => {
    it('Returns true if the JSON is invalid', () => {
        expect(
            VerifyJson(undefined)
        ).toBe(true);
    });

    it('Returns true if field type is invalid', () => {
        expect(
            VerifyJson(testObjects.invalidData)
        ).toBe(true);
    });

    it('Returns false if asterisk ( * ) is present in the JSON in Resource', () => {
        expect(
            VerifyJson(testObjects.asteriskInSingle)
        ).toBe(false);
    });

    it('Returns false if asterisk ( * ) is present in any object in Resource field inside Statement array', () => {
        expect(
            VerifyJson(testObjects.asteriskInOneOfThree)
        ).toBe(false);
    })

    it('Returns true if asterisk ( * ) is not present in the JSON in Resource', () => {
        expect(
            VerifyJson(testObjects.asteriskNotInSingle)
        ).toBe(true);
    });

    it('Returns true if asterisk ( * ) is not present in any object in Resource field inside Statement array', () => {
        expect(
            VerifyJson(testObjects.asteriskInNoneOfThree)
        ).toBe(true);
    })

    it('Returns true if there are 3 asterisks ( *** )', () => {
        expect(
            VerifyJson(testObjects.threeAsterisksInOne)
        ).toBe(true);
    })

    it('Returns true if there is a field with 1 asterisk ( * )', () => {
        expect(
            VerifyJson(testObjects.threeAsterisksInTwo)
        ).toBe(false);
    })
});