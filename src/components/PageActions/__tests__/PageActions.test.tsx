import { PageActions } from "../PageActions";
import renderer from "react-test-renderer";
import { Item } from "@actionishope/shelley";

// @todo: Need to fix jest for these to run.
describe("PageActions", () => {
  it("renders page actions block with custom className", () => {
    const tree = renderer
      .create(
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
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
