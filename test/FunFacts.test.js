import React from "react";
import renderer from "react-test-renderer";
import FunFacts from "../src/components/custom/FunFacts"

describe("<FunFacts />", () => {
  it("renders FunFacts button and container", () => {
    const tree = renderer.create(<FunFacts />).toJSON();

    // Verifica que el árbol tenga contenido
    expect(tree).toBeTruthy();

    // Verifica que el árbol tenga exactamente un hijo
    expect(tree.children.length).toBe(1);

    // Verifica que el hijo de FunFacts tenga el tipo y props esperados
    const childComponent = tree.children[0];
    expect(childComponent.type).toBe("View");

  });
});