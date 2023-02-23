import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Container, Col, Button, Card } from "react-bootstrap";
import { format } from "date-fns";
import { IArticle } from "../interfaces/article";

const ArticleDetails = () => {
  const params = useParams();
  const [artDetails, setArtDetails] = useState<IArticle>();

  const fetchByID = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles/" + params.id);
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        setArtDetails(res);
      } else {
        console.log("eee");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchByID();
  }, []);
  return (
    <>
      <Container>
        {artDetails && (
          <>
            <Row className="my-3">
              <h2>{artDetails.title}</h2>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Row>
                    <Col xs={8}>
                      <Card.Img src={artDetails.imageUrl} />
                    </Col>
                    <Col>
                      <Card.Body>
                        <p>{artDetails.summary}</p>
                        <p>
                          <span>publiscedAt:</span>{" "}
                          {format(new Date(artDetails.publishedAt), "d MMMM yyyy - HH:mm")}
                        </p>
                        <p>
                          {" "}
                          <a href={artDetails.url}>Go to the official site {artDetails.newsSite}</a>
                        </p>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};
export default ArticleDetails;
