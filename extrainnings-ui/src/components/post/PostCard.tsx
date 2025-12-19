import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
  Chip,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useState } from "react";
import type { Post } from "../../types/post";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  // ✅ Hooks MUST be inside component
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [score, setScore] = useState<number>(post.totalScore);

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

          {/* Total Score */}
          <Chip
            label={`${score} pts`}
            color="warning"
            size="small"
          />
        </Box>

        {/* Content */}
        <Typography sx={{ my: 2 }}>
          {post.content}
        </Typography>

        {/* Icons Row */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            color: "text.secondary",
            mb: 2,
          }}
        >
          <Box display="flex" alignItems="center" gap={0.5}>
            <FavoriteBorderIcon fontSize="small" />
            <Typography variant="body2">{post.likes}</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={0.5}>
            <ChatBubbleOutlineIcon fontSize="small" />
            <Typography variant="body2">{post.comments}</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={0.5}>
            <ShareOutlinedIcon fontSize="small" />
            <Typography variant="body2">{post.shares}</Typography>
          </Box>
        </Box>

        {/* Score Buttons */}
        <Box display="flex" gap={1} flexWrap="wrap">
          {[1, 2, 3, 4, 6].map((run) => (
            <Button
              key={run}
              size="small"
              variant={selectedScore === run ? "contained" : "outlined"}
              onClick={() => {
                setSelectedScore(run);
                setScore(post.totalScore + run);
              }}
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
