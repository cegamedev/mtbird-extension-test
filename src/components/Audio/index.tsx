import { IComponentProps } from "@mtbird/shared/src/types/Component";
import React from "react";
import manifest from "./manifest";

const AudioComponent = ({ node, style }: IComponentProps) => {
  const { props } = node;
  return (
    <div
      style={style}
      width={props.style.width}
      height={props.style.height}>
      <audio {...props} autoplay={props.autoPlay ? 'autoplay' : false}>
        <source src={props.src as string} type="audio/ogg" />
      </audio>
    </div>
  );
};

AudioComponent.manifest = manifest;

export default AudioComponent;
