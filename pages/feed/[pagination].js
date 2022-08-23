import Image from "next/image";
import { useRouter } from "next/router";
import Toolbar from "../../components/toolbar";
import FeedStyles from "../../styles/Feed.module.css";
const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  return (
    <div className={FeedStyles.main}>
      <Toolbar />
      {articles?.map((article, index) => (
        <div key={index} className={FeedStyles.post}>
          {!!article.urlToImage && (
            <div className={FeedStyles.post__img}>
              <img src={article.urlToImage} alt="" />
            </div>
          )}
          <h1 onClick={() => (window.location.href = article.url)}>
            {article.title}
          </h1>
          <p>{article.description}</p>
        </div>
      ))}
      <div className={FeedStyles.pager}>
        <span
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`/feed/${pageNumber - 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={
            pageNumber === 1
              ? FeedStyles.pager__pagesDisabled
              : FeedStyles.pager__pagesActive
          }
        >
          Previous Page
        </span>
        <span
          onClick={() => {
            if (pageNumber < 10) {
              router
                .push(`/feed/${pageNumber + 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={
            pageNumber === 10
              ? FeedStyles.pager__pagesDisabled
              : FeedStyles.pager__pagesActive
          }
        >
          Next Page
        </span>
        <span className={FeedStyles.page__pager}>#{pageNumber}</span>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.pagination;
  if (!pageNumber || pageNumber < 1 || pageNumber > 10) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?sources=bbc-news&pageSize=10&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );
  const apiJson = await apiResponse.json();
  const { articles } = apiJson;
  //console.log(apiJson);
  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
