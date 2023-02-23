import { useEffect } from "react";
const Fetch = () => {
  const myfetch = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      if (response.ok) {
        const res = await response.json();
        console.log(res);
      } else {
        console.log("rr");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    myfetch();
  }, []);
  return <></>;
};
export default Fetch;
