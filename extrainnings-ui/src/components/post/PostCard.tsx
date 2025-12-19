import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
  Chip,
} from "@mui/material";
import type { Post } from "../../types/post";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <Card
      sx={{
        mb: 3,
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
      }}
    >
      <CardContent>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src={post.authorAvatar}>
              {post.authorName[0]}
            </Avatar>

            <Box>
              <Typography fontWeight={600}>
                {post.authorName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.timeAgo}
              </Typography>
            </Box>
          </Box>

          <Chip
            label={`${post.totalScore} pts`}
            color="warning"
            size="small"
          />
        </Box>

        {/* Content */}
        <Typography sx={{ my: 2 }}>
          {post.content}
        </Typography>

        {/* Score Buttons */}
        <Box display="flex" gap={1} flexWrap="wrap">
          {[1, 2, 3, 4, 6].map((run) => (
            <Button
              key={run}
              size="small"
              variant="outlined"
              sx={{ minWidth: 36 }}
            >
              {run}
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
