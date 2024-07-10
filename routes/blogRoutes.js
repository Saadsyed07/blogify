import express from 'express';

const router = express.Router();
let blogs = [];

router.get('/', (req, res) => {
  res.render('blogs', { blogs: blogs });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
  const newBlog = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content
  };
  blogs.push(newBlog);
  res.redirect('/blogs');
});

router.get('/edit/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find(blog => blog.id === blogId);
  if (blog) {
    res.render('edit', { blog: blog });
  } else {
    res.redirect('/blogs');
  }
});

router.post('/edit/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blogIndex = blogs.findIndex(blog => blog.id === blogId);
  if (blogIndex > -1) {
    blogs[blogIndex].title = req.body.title;
    blogs[blogIndex].content = req.body.content;
  }
  res.redirect('/blogs');
});

router.post('/delete/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  blogs = blogs.filter(blog => blog.id !== blogId);
  res.redirect('/blogs');
});

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

export default router;
