import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ArticleListCard() {
  const router = useRouter();
  const [articleListCard, setArticleListCard] = useState([]);

  // 向伺服器要求資料，設定到狀態中
  const getArticleListCard = async (article_category_id) => {
    const res = await fetch(
      "http://localhost:3005/article/" + article_category_id
    );

    const data = await res.json();

    console.log(data);
    // 設定到狀態中 -> 會觸發重新渲染(re-render)
    if (Array.isArray(data)) setArticleListCard(data);
  };

  // didMount 初次渲染"後", 向伺服器要求資料，設定到狀態中
  useEffect(() => {
    if (router.isReady) {
      // 確保能得到router.query有值
      const { article_category_id } = router.query;
      console.log(article_category_id);
      // 有article_category_id後，向伺服器要求資料，設定到狀態中
      getArticleListCard(article_category_id);
    }
    // eslint-disable-next-line
  }, [router.isReady]);

  return (
    <>
      <div className="article-list-card">
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {articleListCard.map((v, i) => {
            return (
              <>
                <div className="col">
                  <Link
                    href={`/article/${v.article_category_id}/${v.article_id}`}
                  >
                    <div className="card h-100" key={v.article_id}>
                      <img src={v.img} alt="..." />
                      <div className="card-body">
                        <h5 className="card-title size-6 m-size-6">
                          {v.title}
                        </h5>
                        <p className="card-text size-7 m-size-7">
                          {v.published_date}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
