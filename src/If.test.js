import React from 'react';
import { shallow, mount } from "enzyme";
import If from './If';

it("renders with conditional", () => {

    const test = (
        <If test={true}>
            <span>Test</span>
        </If>
    )

    expect(shallow(test)).toMatchSnapshot();
});


it("renders without conditional", () => {

    const test = (
        <If test={false}>
            <span>Test</span>
        </If>
    )

    expect(shallow(test)).toMatchSnapshot();
});