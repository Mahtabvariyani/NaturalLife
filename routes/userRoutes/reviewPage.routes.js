const router = require("express").Router();
const Comment = require("../../models/Comment.model");

router.get("/reviewPage", (req, res, next) => {
  Comment.find()
    .then((comments) => {
      res.render("userView/reviewPage", { comments });
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/reviewPage", (req, res, next) => {
  const { name, text } = req.body;
  const newComment = new Comment({
    Name: name,
    text: text,
  });
  newComment
    .save()
    .then(() => {
      res.redirect("/userView/reviewPage");
    })
    .catch((error) => {
      next(error);
    });
});
//editCommens
router.get('/editComments/:id',(req,res,next)=>{
    const commentId = req.params.id;
    Comment.findById(commentId)
    .then(upComment=>{
        res.render("userview/editComments",{
            upComment
        });
    })
    .catch(error=>{
        console.log(error);
        next(error);
    });
});


router.post('/editComments/:id', (req, res, next) => {
    const editedText = req.body.editedText;
    const commentId = req.params.id;
    Comment.findByIdAndUpdate(commentId, { text: editedText }, { new: true })
    .then(edited => {
      console.log(edited);
      console.log(editedText);
      res.redirect('/userView/reviewPage'); 
    })

    .catch(error => {
        next(error);
      });
  });


  router.post('/reviewPage/:commentId/delete', (req, res, next) => {
    const commentId = req.params.commentId; // Match the parameter name
    Comment.findByIdAndDelete(commentId)
        .then(() => res.redirect('/userView/reviewPage')) // Updated redirect path
        .catch(error => next(error));
});




module.exports = router;
