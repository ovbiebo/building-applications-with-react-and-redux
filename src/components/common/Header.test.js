import React from "react";
import Header from "./Header";
import {mount, shallow} from "enzyme";
import {MemoryRouter} from "react-router-dom";

it("contains 3 NavLinks via shallow", () => {
    const numlinks = shallow(<Header/>).find("NavLink").length;
    expect(numlinks).toEqual(3);
});

it("contains 3 anchors via shallow", () => {
    const numAnchors = mount(
        <MemoryRouter>
            <Header/>
        </MemoryRouter>
    ).find("a").length;
    expect(numAnchors).toEqual(3);
});
