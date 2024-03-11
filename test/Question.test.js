import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import QuestionWithAnswers from "../src/components/global/Questions";

describe("QuestionWithAnswers Component", () => {
  test("should handle answer selection correctly", () => {
    const onAnswerChangeMock = jest.fn();
    const onFeedbackChangeMock = jest.fn();

    render(
      <QuestionWithAnswers
        onAnswerChange={onAnswerChangeMock}
        onFeedbackChange={onFeedbackChangeMock}
      />
    );

    // Simula la selección de la opción A, que es la correcta
    const optionAButton = screen.getByTestId("buttonA");
    fireEvent.press(optionAButton);

    // Verifica que onAnswerChange se llamó con true porque la opción A es correcta
    expect(onAnswerChangeMock).toHaveBeenCalledWith(true);
    // Verifica que onFeedbackChange se llamó con true, indicando que se ha seleccionado una respuesta
    expect(onFeedbackChangeMock).toHaveBeenCalledWith(true);
  });
});
