import { Content } from "@Components/Content/Content";
import { EGrey } from "@Enums/color";
import React from "react";

export const Contact = () => {
  return (
    <Content
      backgroundColor={EGrey._900}
      subtitle={{
        text: "¿Por qué contactarnos?",
        textAlign: "left",
        color: "primary",
      }}
      title={{
        text: "Apoyamos tu crecimiento y desarrollo de manera creativa y profesional.",
        textAlign: "left",
      }}
    >
      Holi
    </Content>
  );
};
