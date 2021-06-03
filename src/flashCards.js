import React from "react";
import { useDencrypt } from "use-dencrypt-effect";

export function FlashCardA(){  

  let values = ["2020 社會企業認知度", "2020 社會創新認知度", "2020 SDGs認知度", "2020 社企理念支持度"];
  let { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    let action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 12000);

    return () => clearInterval(action);
  }, []);

  return <div>{result}</div>;
};

export function FlashCardB(){

    let values = ["33.7%", "15%", "18%", "77%"];
    let { result, dencrypt } = useDencrypt();
  
    React.useEffect(() => {
      let i = 0;
  
      let action = setInterval(() => {
        dencrypt(values[i]);
  
        i = i === values.length - 1 ? 0 : i + 1;
      }, 12000);
  
      return () => clearInterval(action);
    }, []);
  
    return <div>{result}</div>;
  };

export function FlashCardC(){

    let values = ["▲3.1%", "", "", "▲1.7%"];
    let { result, dencrypt } = useDencrypt();
  
    React.useEffect(() => {
      let i = 0;
  
      let action = setInterval(() => {
        dencrypt(values[i]);
  
        i = i === values.length - 1 ? 0 : i + 1;
      }, 12000);
  
      return () => clearInterval(action);
    }, []);
  
    return <div>{result}</div>;
  };


  export function FlashCardD(){  

    let values = ["社會創新夥伴", "Buying Power累計採購", "帶動就業人數", "社創中心活動"];
    let { result, dencrypt } = useDencrypt();
  
    React.useEffect(() => {
      let i = 0;
  
      let action = setInterval(() => {
        dencrypt(values[i]);
  
        i = i === values.length - 1 ? 0 : i + 1;
      }, 12000);
  
      return () => clearInterval(action);
    }, []);
  
    return <div>{result}</div>;
  };

  
  export function FlashCardE(){  

    let values = ["91 家", "11.4億元", "1.7萬人", "5880+ 場"];
    let { result, dencrypt } = useDencrypt();
  
    React.useEffect(() => {
      let i = 0;
  
      let action = setInterval(() => {
        dencrypt(values[i]);
  
        i = i === values.length - 1 ? 0 : i + 1;
      }, 12000);
  
      return () => clearInterval(action);
    }, []);
  
    return <div>{result}</div>;
  };
  