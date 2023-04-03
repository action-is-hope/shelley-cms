import { PageActions } from "../PageActions";
import renderer from "react-test-renderer";
import { Item } from "@actionishope/shelley";
// useID breaks snapshots so using the SSrProvider.
import { SSRProvider } from "react-aria";

// @todo: Need to fix jest for these to run.
describe("PageActions", () => {
  it("renders page actions block with custom className", () => {
    const tree = renderer
      .create(
        <SSRProvider>
          <PageActions
            className={"custom-classname"}
            lastSaved="5 mins ago"
            // reviewRequired={reviewRequired}
            status={"draft"}
            onAction={(action) => console.log(action)}
          >
            <Item key="archive">Archive</Item>
            <Item key="unpublish">Unpublish</Item>
          </PageActions>
        </SSRProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
