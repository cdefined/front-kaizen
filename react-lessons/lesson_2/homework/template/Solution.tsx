import { useState } from "react";
import { Zanpakuto } from "../../../data/zanpakutoCollection";

function ZanpakutoForm() {
  const [zanpakuto, setZanpakuto] = useState<Partial<Zanpakuto>>({
    name: "",
    owner: "",
    type: "melee",
    powerLevel: 1,
    isReleased: false,
    bankai: "",
  });

  return (
    <>
      <code>Solution.tsx</code>を編集してソリューションを実装
    </>
  );
}

export default function Solution() {
  return <ZanpakutoForm />;
}
