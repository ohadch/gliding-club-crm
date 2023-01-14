import { expect } from "chai";
import UtilsService from "./index";

enum TestEnum {
    A = "value1",
    B = "value2"
}

describe("UtilsService", () => {
  describe("enumStringValuesIterator", () => {
    it("Should return the enum's values", () => {
      const values = UtilsService.enumStringValuesIterator(TestEnum);
      expect(values).to.deep.equal([TestEnum.A, TestEnum.B]);
    });
  });
});
