import React from 'react';
import * as Style from './index.styled';
import { FaTimes } from 'react-icons/fa';
import {useState, useEffect} from 'react';

export type CommentProps = {
  id: number;
  userName: string;
  commentText: string;
};

const CommentItem: React.FC<CommentProps & { comments: CommentProps[]; setComments: React.Dispatch<React.SetStateAction<CommentProps[]>> }> 
= ({ id, userName, commentText, comments, setComments }) => {
  const [localComments, setLocalComments] = useState<CommentProps[]>(comments);

  const handleDelete = () => {
    const updatedComments = localComments.filter(comment => comment.id !== id);
    setLocalComments(updatedComments);
    setComments(updatedComments);
    
  }
  return (
    <Style.CommentItem>
      <Style.CommentContent>
        <Style.UserName> {userName} </Style.UserName>
      </Style.CommentContent>
      <Style.CommentContent>
        <Style.CommentText>{commentText}</Style.CommentText>
        <Style.deleteButton onClick={handleDelete}>Удалить</Style.deleteButton>
      </Style.CommentContent>
    </Style.CommentItem>
  );
};

export default CommentItem;