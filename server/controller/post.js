const Post = require("../models/Post");
const path = require('path')
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");


// @desc          Get Post
// @route         GET /api/v1/posts
// @route         GET /api/v1/post/:postId/
// @access        Public

exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find().sort({createdAt:-1});
  return res.status(200).json({
    success: true,
    count: posts.length,
    data: posts,
  });
});


// @desc          Get Signle Post
// @route         GET /api/v1/post/:id
// @access        Public

exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id)
  if (!post) {
    return next(
      new ErrorResponse(`No post with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: post,
  });
});

// @desc          Add a Post
// @route         POST /api/v1/post/
// @access        Private

exports.addPost = asyncHandler(async (req, res, next) => {

const post = await Post.create(req.body);

  res.status(201).json({
    success: true,
    data: post,
  });
});

// @desc          Update a Courses
// @route         PUT /api/v1/courses/:id
// @access        Private

exports.updatePost = asyncHandler(async (req, res, next) => {
 let post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  
  res.status(201).json({
    success: true,
    data: post,
  });
          if (!post) {
            return next(
              new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
            );
          }
});

// @desc          Delete a Post
// @route         DELETE /api/v1/post/:id
// @access        Private

exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
    );
  }

  await post.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc          Upload a photo
// @route         PUT /api/v1/post/:id/photo
// @access        Private

exports.uploadPhoto = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  console.log(req.file,'-----------------------------------------')
  console.log(post,'post')
  if (!post) {
    return next(
      new ErrorResponse(`No photo with the id of ${req.params.id}`, 404)
    );
  }
  if(!req.files){
    return next( new ErrorResponse('Please Upload a Photo',400) )
  }

  const file = req.files.file
console.log(file)

  if(!file.mimetype.startsWith('image')){
    return next( new ErrorResponse('Please Upload a image file',400) )
  }

  if(file.size> process.env.MAX_FILE_UPLOAD){
    return next( new ErrorResponse('Please Upload a image less than 100mb',400) )
  }

  file.name = `photo_${post._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err =>{
    if(err){
      console.log(err);
      return next(new ErrorResponse('problem with file upload', 500));

    }

    await Post.findByIdAndUpdate(req.params.id,{banner:file.name})

    res.status(200).json({
      success:true,
      data: file.name
    })

  })
});
