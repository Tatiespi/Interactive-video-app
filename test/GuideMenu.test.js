import React from "react";
import renderer from "react-test-renderer";
import GuideMenu from "../src/components/custom/GuideMenu"

describe("<GuideMenu />", () => {
  it("renders GuideMenu and GuideInfographic", () => {
    const tree = renderer.create(<GuideMenu />).toJSON();

    // Verifica que el árbol tenga contenido
    expect(tree).toBeTruthy();

    // Verifica que el árbol tenga exactamente un hijo
    expect(tree.children.length).toBe(5);

    // Verifica que los hijos de GuideMenu tenga el tipo y props esperados
    const childComponent = tree.children[0];
    expect(childComponent.type).toBe("View");

  });
});
