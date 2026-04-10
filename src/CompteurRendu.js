import { useRef, useEffect } from "react";

function CompteurRendu() {
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });

  return <p>Nombre de rendus: {count.current}</p>;
}

export default CompteurRendu;