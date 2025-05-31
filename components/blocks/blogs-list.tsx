import BlogCard from '@/common/blog-card'

const BlogsList = ({ blogs }: { blogs: PostData[] }) => {
  return (
    <div className='flex flex-col gap-4'>
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog.slug} {...blog} />)
      ) : (
        <p className='text-sm text-center py-4'>No blogs found</p>
      )}
    </div>
  )
}

export default BlogsList
