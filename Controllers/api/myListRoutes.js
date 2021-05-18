// const router = require('express').Router();
// const { Authors, Books, My_List, Users} = require('../../models');
// const withAuth = require('../../utils/auth')

// // see other people's list 
// router.get('/', withAuth, async (req, res) => {
//   try {
//     console.log(listData)
//     const listData = await My_List.findAll({
//       include: [{ model: Users, Books, Authors}]
//     });

//     const list = listData.map((list) => list.get({ plain: true }));

//     res.render('homepage', {
//       list,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// })

// module.exports = router;