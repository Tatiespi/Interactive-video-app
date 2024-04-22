import React from "react";
import renderer from "react-test-renderer";
import DragDropLight from "../src/components/custom/Drag&DropLight";

describe("<Drag&DropLight />", () => {
  it("renders Drag&DropLight component", () => {
    const tree = renderer.create(<DragDropLight />).toJSON();

    // Verifica que el árbol tenga contenido
    expect(tree).toBeTruthy();

    // Verifica que el árbol tenga exactamente dos hijos
    expect(tree.children.length).toBe(2);

    // Verifica que cada hijo tenga el tipo y props esperados
    const childComponentOne = tree.children[0];
    expect(childComponentOne.type).toBe("View");
    const childComponentTwo = tree.children[1];
    expect(childComponentTwo.type).toBe("Text");
    // Añadir más expectativas para validar las props del hijo si es necesario

    // Añadir expectativas para validar otras propiedades o comportamientos del árbol de componentes si es necesario
  });
});
