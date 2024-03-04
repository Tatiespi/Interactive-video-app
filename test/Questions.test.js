import React from "react";
import renderer from "react-test-renderer";
import Questions from "../src/components/global/Questions";

describe("<Questions />", () => {
  it("renders Questions functionality", () => {
    const tree = renderer.create(<Questions />).toJSON();

    // Verifica que el árbol tenga contenido
    expect(tree).toBeTruthy();

    // Verifica que el árbol tenga exactamente dos hijos
    expect(tree.children.length).toBe(2);

    // Verifica que el hijo de Questions tenga el tipo y props esperados
    const childComponent = tree.children[0];
    expect(childComponent.type).toBe("View");
    // Añadir más expectativas para validar las props del hijo si es necesario

    // Añadir expectativas para validar otras propiedades o comportamientos del árbol de componentes si es necesario
  });
});
