import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function extractCodeFromString(message: string) {
  if (message.includes("```")) {
    const blocks = message.split("```").filter(Boolean);  // Also remove empty strings
    return blocks;
  }
  return [];  // Always return an array, even if there's no code block
}

function isCodeBlock(str: string) {
  const codeIndicators = ["=", ";", "[", "]", "{", "}", "#", "//"];
  return codeIndicators.some(indicator => str.includes(indicator));
}

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();

  // Function to safely get initials from a potentially malformed name
  const getUserInitials = () => {
    if (auth?.user?.name) {
      const parts = auth.user.name.split(" ");
      const initials = parts.length >= 2 ? parts.map(part => part[0]).join("") : parts[0][0];
      return initials;
    }
    return "";  // Return empty string if no name is available
  };

  return (
    <Box
      sx={{
        display: "flex",
        p: 2,
        bgcolor: role === "assistant" ? "black" : "#FF6600", // Black for assistant, Burnt Orange for user
        color: role === "assistant" ? "white" : "black", // White text for assistant, Black text for user
        gap: 2,
        borderRadius: 2,
        my: 1,
        alignItems: "center",
      }}
    >
      <Avatar sx={{ ml: "0", bgcolor: role === "user" ? "black" : "transparent", color: "white" }}>
        {role === "assistant" ? (
          <img src="openai.png" alt="openai" width={"30px"} />
        ) : (
          getUserInitials()
        )}
      </Avatar>
      <Box>
        {messageBlocks.length === 0 && (
          <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
        )}
        {messageBlocks.map((block, index) => (
          isCodeBlock(block) ? (
            <SyntaxHighlighter key={index} style={coldarkDark} language="javascript">
              {block}
            </SyntaxHighlighter>
          ) : (
            <Typography key={index} sx={{ fontSize: "20px" }}>{block}</Typography>
          )
        ))}
      </Box>
    </Box>
  );
};

export default ChatItem;
