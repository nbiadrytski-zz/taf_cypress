import constants from "../../_cypress/support/constants";
import selectors from "../../_cypress/support/selectors";
import {
  listLengthShouldBe,
  linksShouldOpenInNewTab,
  attributeValueShouldBe,
} from "../../_cypress/support/custom-asserts";
import { goToUrl } from "../../_cypress/support/commands";

context("Public html", function () {
  beforeEach(() => {
    goToUrl(constants.publicUrls.integrationUrl);
  });

  it("checks header links: DR University, Community, DR site", () => {
    // There are 3 links in the header
    listLengthShouldBe(selectors.header.linksList, 3);

    const headerLinks = [
      {
        href: "https://university.datarobot.com",
        elementText: "DataRobot University",
      },
      {
        href: "https://community.datarobot.com",
        elementText: "Community",
      },
      {
        href: "https://www.datarobot.com",
        elementText: "DataRobot.com",
      },
    ];

    headerLinks.forEach((link) =>
      attributeValueShouldBe(
        selectors.header.button,
        "href",
        link.href,
        link.elementText
      )
    );

    // All 3 links should be opened in a new tab
    linksShouldOpenInNewTab(`${selectors.header.linksList}>li>a`);
  });

  it("checks footer links: Legal, Privacy, Trust", () => {
    // There are 3 links in the header
    listLengthShouldBe(selectors.footer.linksList, 3);

    const footerLinks = [
      {
        href: "https://www.datarobot.com/legal/",
        title: "Legal",
      },
      {
        href: "https://www.datarobot.com/privacy/",
        title: "Privacy",
      },
      {
        href: "https://www.datarobot.com/trust-package/",
        title: "Trust",
      },
    ];

    footerLinks.forEach((link) =>
      attributeValueShouldBe(
        selectors.footer.button,
        "href",
        link.href,
        link.title
      )
    );

    // All 3 links should be opened in a new tab
    linksShouldOpenInNewTab(`${selectors.footer.linksList}>li>a`);
  });
});
