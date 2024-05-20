import React from "react";
import renderer from "react-test-renderer";
import GuideInfographic from "../src/components/custom/GuideInfographic"

describe("<GuideInfographic />", () => {
  it("renders GuideInfographic", () => {
    const tree = renderer.create(<GuideInfographic />).toJSON();

    // Verifica que el árbol tenga contenido
    expect(tree).toBeTruthy();

    // Verifica que el árbol tenga exactamente tres hijos
    expect(tree.children.length).toBe(3);

    // Verifica que los hijos de GuideInfographic tenga el tipo y props esperados
    const childComponent = tree.children[0];
    expect(childComponent.type).toBe("Image");

  });
});
