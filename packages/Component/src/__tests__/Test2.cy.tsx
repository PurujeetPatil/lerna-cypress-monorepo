import React from "react";
import Component from "../Component";

describe("Test2.cy.ts", () => {
	it("playground", () => {
		cy.mount(<Component />);
		cy.get("div").contains("Component");
	});
});
