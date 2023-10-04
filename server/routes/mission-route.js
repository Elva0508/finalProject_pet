const router = require("express").Router();
const conn = require("../db");

router.get("/", (req, res) => {
  res.send("mission-route測試成功");
});

// 共用的 SQL 子查詢，找出每個任務的最小 image_id
const commonSubquery = `
  SELECT mission_id, MIN(image_id) AS min_image_id
  FROM image_mission
  GROUP BY mission_id
`;

// 共用的 SQL 查詢模板
const commonQueryTemplate = `
  SELECT md.*, im.file_path AS file_path
  FROM mission_detail AS md
  JOIN (${commonSubquery}) AS min_ids ON md.mission_id = min_ids.mission_id
  JOIN image_mission AS im ON min_ids.mission_id = im.mission_id AND min_ids.min_image_id = im.image_id
`;
// 原本的all-missions
// router.get("/all-missions", (req, res) => {
//   conn.execute(
//     `${commonQueryTemplate};`,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       res.send({ status: 200, data: result });
//     }
//   );
// });

//排序
router.get("/all-missions", (req, res) => {
  // 排序1 (目前可以排刊登時間 無法排價格)
  const sortOrder = req.query.sortOrder || "asc"; 
  let orderBy = "md.post_date"; // 預設按照 post_date 排序
  
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    res.status(400).send({ status: 400, message: "Invalid sortOrder parameter" });
    return;
  }

  if (req.query.sortBy === "price") {
    // 如果 sortBy 參數為 price，則按照 price 排序
    orderBy = "md.price";
  }

  conn.execute(
    `${commonQueryTemplate}
    ORDER BY ${orderBy} ${sortOrder.toUpperCase()}
    `,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send({ status: 200, data: result });
    }
  );

  // 排序2
  // const { orderType, orderWay } = req.query;
  // if(orderType === "post_date"){
  //   conn.execute(
  //     `${commonQueryTemplate}
  //     ORDER BY md.post_date ${orderWay}
  //     `,
  //     (err, result) => {
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       res.send({ status: 200, data: result });
  //     }
  //   );
  // }else if(orderType === "price"){
  //   conn.execute(
  //     `${commonQueryTemplate}
  //     ORDER BY md.price ${orderWay}
  //     `,
  //     (err, result) => {
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       res.send({ status: 200, data: result });
  //     }
  //   );
  // }
});

router.get("/latest-missions", (req, res) => {
  conn.execute(
    `${commonQueryTemplate}
    ORDER BY md.post_date DESC
    LIMIT 8;`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send({ status: 200, data: result });
    }
  );
});

// 可以成功併成一筆資料：
router.get("/mission-details/:mission_id", (req, res) => {
  const mission_id = req.params.mission_id; // 從路由參數中獲取 mission_id
  conn.execute(
    `
    SELECT md.*, u.*, GROUP_CONCAT(DISTINCT im.file_path ORDER BY im.image_id) AS file_paths
    FROM mission_detail AS md 
    JOIN users AS u ON md.post_user_id = u.user_id 
    JOIN image_mission AS im ON md.mission_id = im.mission_id
    WHERE md.mission_id = ?
    GROUP BY md.mission_id;
    `,
    [mission_id],  // 使用 mission_id 進行查詢
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send({ status: 200, data: result });
    }
  );
});

// 可以讓照片正常顯示
router.get("/mission-details-img/:mission_id", (req, res) => {
  const mission_id = req.params.mission_id; // 從路由參數中獲取 mission_id
  conn.execute(
    `SELECT md.*, im.file_path AS file_path
    FROM mission_detail AS md
    JOIN image_mission AS im ON md.mission_id = im.mission_id
    WHERE md.mission_id = ?
    ;`
    , [mission_id],  // 使用 mission_id 進行查詢
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send({ status: 200, data: result });
    }
  );
})

// 按照刊登時間排序
// router.get("/mission-sorted/:sortOrder", (req, res) => {
//   const sortOrder = req.params.sortOrder.toLowerCase(); // 獲取排序順序參數（asc或desc）
//   if (sortOrder !== "asc" && sortOrder !== "desc") {
//     res.status(400).send({ status: 400, message: "Invalid sortOrder parameter" });
//     return;
//   }

//   const orderBy = sortOrder === "asc" ? "ASC" : "DESC";

//   conn.execute(
//     `${commonQueryTemplate}
//     ORDER BY md.post_date ${orderBy}
//     `,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       res.send({ status: 200, data: result });
//     }
//   );
// });




module.exports = router;