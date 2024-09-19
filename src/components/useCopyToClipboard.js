import { useState } from 'react';

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (value) => {
    // Cria um elemento temporário para copiar o valor
    const tempInput = document.createElement('input');
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Atualiza o estado para indicar que foi copiado
    setIsCopied(true);

    // Após 1 segundo, reseta o estado
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return [isCopied, copyToClipboard];
};

export default useCopyToClipboard;
