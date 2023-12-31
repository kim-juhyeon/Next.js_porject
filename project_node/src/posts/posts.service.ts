import { Injectable } from '@nestjs/common';

interface PostModel{
    id : number;
    author : String;
    title : String;
    content : String;
    likeCount : number;
    commentCount : number;
  }
  
  let posts : PostModel[] = [
    {
      id : 1,
      author : 'newjeans_official',
      title : '뉴진스 민지',
      content : '메이크업 고치고 있는 민지',
      likeCount : 100000,
      commentCount : 99999,
    },
    {
      id : 2,
      author : 'newjeans_official',
      title : '뉴진스 해린',
      content : '노래연습하고 있는 민지',
      likeCount : 100000,
      commentCount : 99999,
    },
    {
      id : 3,
      author : 'blackpink_official',
      title : '블랙핑크 로제',
      content : '종합운동장에서 웃고 있는 로제',
      likeCount : 100000,
      commentCount : 99999,
    },
  ];

@Injectable()
export class PostsService {}
