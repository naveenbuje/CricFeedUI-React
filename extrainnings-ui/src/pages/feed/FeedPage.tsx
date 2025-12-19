import { Box, Typography } from "@mui/material";
import PostCard from "../../components/post/PostCard";
import type { Post } from "../../types/post"

const posts: Post[] = [
  {
    id: 1,
    authorName: "Sarah Chen",
    timeAgo: "2h ago",
    content:
      "Just completed an amazing tournament run! The final match was intense 🔥",
    totalScore: 28,
  },
  {
    id: 2,
    authorName: "Mike Rodriguez",
    timeAgo: "4h ago",
    content:
      "Training session highlights from today. Working on new strategies!",
    totalScore: 35,
  },
];

const FeedPage = () => {
  return (
      <Box
  sx={{
    maxWidth: 900,
    width: "100%",      // 🔥 THIS IS THE FIX
    mx: "auto",
    px: { xs: 1, sm: 2 },
  }}
>


      <Typography
        variant="h5"
        sx={{ mb: 3, textAlign: "center" }}
      >
        Latest Posts
      </Typography>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default FeedPage;
