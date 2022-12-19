import React from "react";
import Component from "../Component";

describe("Test2.cy.ts", () => {
	it("playground1", () => {
		const broCode = "Bros b4 Hoes";
		cy.mount(<Component broCode={broCode} />);
		cy.get("h1").contains(broCode);
	});

	it("playground2", () => {
		cy.mount(<Component />);
		cy.get("div").contains("You aint a bro");
	});
});
