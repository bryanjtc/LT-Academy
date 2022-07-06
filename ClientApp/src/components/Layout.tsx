import { ReactNode, Component } from "react";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

export class Layout extends Component<{ children: ReactNode }, {}> {
  static displayName = Layout.name;

  render() {
    return (
      <div className="layout">
        <NavMenu />
        <div className="content container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
