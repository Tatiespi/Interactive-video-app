import React from "react";
import renderer from "react-test-renderer";
import CurrentVideo from "../src/components/global/CurrentVideo";

describe("<CurrentVideo />", () => {
  it("renders CurrentVideo and every video", () => {
    const tree = renderer.create(<CurrentVideo />).toJSON();

    // Verifica que el árbol tenga contenido
    expect(tree).toBeTruthy();

    // Verifica que el árbol tenga exactamente un hijo
    expect(tree.children.length).toBe(1);

    // Verifica que el hijo tenga el tipo y props esperados
    const childComponent = tree.children[0];
    expect(childComponent.type).toBe("ViewManagerAdapter_ExpoVideoView");
    // Añadir más expectativas para validar las props del hijo si es necesario

    // Añadir expectativas para validar otras propiedades o comportamientos del árbol de componentes si es necesario
  });
});
