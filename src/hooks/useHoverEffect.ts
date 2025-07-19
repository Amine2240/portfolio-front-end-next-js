import React from "react";
import { useEffect } from "react";
import { hoverfunction } from "@/utils/hoverfunction";

type UseHoverEffectParams = {
  button: React.RefObject<HTMLElement>;
  setxPos: React.Dispatch<React.SetStateAction<number>>;
  setyPos: React.Dispatch<React.SetStateAction<number>>;
};

export const useHoverEffect = ({
  button,
  setxPos,
  setyPos,
}: UseHoverEffectParams) => {
  useEffect(() => {
    if (button.current) {
      hoverfunction(button, setxPos, setyPos);
    }
  }, [button, setxPos, setyPos]);
};
