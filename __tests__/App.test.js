import * as renderer from "react-test-renderer";

jest.doMock("../navigation/RootNavigator", () => () => <RootNavigator/>);


import App from '../App';

describe("Snapshot", () => {
    it('renders correctly', () => {
        const tree = renderer
                        .create(<App />)
                        .toJSON();
        expect(tree).toMatchSnapshot();
    });
})

