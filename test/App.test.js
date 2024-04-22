import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("<App />", () => {
  it("renders App, CurrentActivity and CurrentVideo", () => {
    const tree = renderer.create(<App />).toJSON();

    // Verifica que el árbol tenga contenido
    expect(tree).toBeTruthy();

    // Verifica que el árbol tenga exactamente un hijo
    expect(tree.children.length).toBe(1);

    // Verifica que el hijo de App tenga el tipo y props esperados
    const childComponent = tree.children[0];
    expect(childComponent.type).toBe("View");
    // Añadir más expectativas para validar las props del hijo si es necesario

    // Añadir expectativas para validar otras propiedades o comportamientos del árbol de componentes si es necesario
  });
});
