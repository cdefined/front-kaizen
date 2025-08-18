import {
  Zanpakuto,
  zanpakutoCollection,
} from "../../../data/zanpakutoCollection";

function ZanpakutoCard({ zanpakuto }: { zanpakuto: Zanpakuto }) {
  return (
    <>
      <code>Solution.tsx</code>を編集してソリューションを実装
    </>
  );
}

export default function Solution() {
  return <ZanpakutoCard zanpakuto={zanpakutoCollection[0]} />;
}
