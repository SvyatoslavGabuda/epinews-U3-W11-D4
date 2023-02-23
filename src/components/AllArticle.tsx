import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { IArticle } from "../interfaces/article";
import Article from "./Article";

const AllArticle = () => {
  const [article, setArticle] = useState<IArticle[]>([]);
  const fetchArticles = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        setArticle(res);
      } else {
        console.log("rr");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <Row className="row-cols-2">
        {article.map((art) => (
          <Article key={art.id} article={art} />
        ))}
      </Row>
    </>
  );
};
export default AllArticle;
