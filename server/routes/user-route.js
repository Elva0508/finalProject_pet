
const router = require("express").Router();
const connection = require("../db");

// router.get("/user-coupon", (req, res) => {
  
// });
router.get("/user-coupon", (req,res)=>{
  //const currentId = req.decoded.user_id;
  connection.query(
    `SELECT *
    FROM users_coupon
    LEFT JOIN coupon ON users_coupon.coupon_id = coupon.coupon_id
    WHERE users_coupon.user_id = 1
    LIMIT 0, 100;`
  ,(err,results)=>{
    if(err){
      console.error('資料庫-查詢錯誤：', err);
      res.status(500).json({message: '資料庫查詢錯誤', code: '500'});
    }else{
      if(results.length>0){
        res.status(200).json({message:'success',code:'200',results:results})
      }
    }
  })
})


// router.get('/user-info/:user_id', (req, res) => {
//   const userId = req.body.user_id;
  
//   // 查詢 MySQL 數據庫以獲取會員資料
//   connection.query('SELECT * FROM userinfo WHERE user_id = ?', [userId ], (err, results) => {
//     if (err) {
//       console.error('查詢數據庫時出錯:', err);
//       return res.status(500).json({ error: '內部伺服器錯誤' });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({ error: '找不到該會員' });
//     }

//     const memberData = results[0];
//     res.json(memberData);
//   });
// });

router.put('/update-user-data', (req, res) => {
  const { name, phone, city, area, address, birthday, pet_number } = req.body;
  const userId = 1; // replace with the actual user ID

  connection.query(
    'UPDATE userinfo SET name = ?, phone = ?, city = ?, area = ?, address = ?, birthday = ?, pet_number = ? WHERE user_id = ?',
    [name, phone, city, area, address, birthday, pet_number, userId],
    (err, results) => {
      if (err) {
        console.error('資料庫-更新錯誤：', err);
        res.status(500).json({ message: '資料庫更新錯誤', code: '500' });
      } else {
        res.status(200).json({ message: 'success', code: '200' });
      }
    }
  );
});
router.get('/user-info', (req, res) => {
  //const userId = req.body.user_id;
  
  // 查詢 MySQL 數據庫以獲取會員資料
  
connection.query('SELECT * FROM userinfo WHERE user_id = 1', (err,results)=>{
  if(err){
    console.error('資料庫-查詢錯誤：', err);
    res.status(500).json({message: '資料庫查詢錯誤', code: '500'});
  }else{
    if(results.length>0){
      res.status(200).json({message:'success',code:'200',results:results})
    }
  }
})
})
router.put('/change-password', (req, res) => {
  //const { user_id, new_password } = req.body;
  const { newPassword } = req.body;
  connection.query('UPDATE userinfo SET password = ? WHERE user_id = ?', [newPassword, 1], (err, results) => {
    if (err) {
      console.error('資料庫-更新錯誤：', err);
      res.status(500).json({ message: '資料庫更新錯誤', code: '500' });
    } else {
      res.status(200).json({ message: 'success', code: '200' });
    }
  });
});


module.exports = router;
