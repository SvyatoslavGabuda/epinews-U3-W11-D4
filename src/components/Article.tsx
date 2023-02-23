import { IArticle } from "../interfaces/article";
import { Col, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface ArticleProps {
  article: IArticle;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <>
      <Link to={"/details/" + article.id} className="text-decoration-none my-2">
        <Card className="h-100 myCard">
          <Row className="h-100">
            <Col xs={4} className="d-flex justify-content-center align-items-center">
              <Card.Img src={article.imageUrl} />
            </Col>
            <Col xs={8} className="myCardText my-auto">
              <Card.Title className="my-1">{article.title}</Card.Title>
              <p className="my-1">{article.summary}</p>
              <p className="my-1">
                {"UpdatedAt: " + format(new Date(article.updatedAt), "d MMMM yyyy - HH:mm")}
              </p>
            </Col>
          </Row>
        </Card>
      </Link>
    </>
  );
};
export default Article;
