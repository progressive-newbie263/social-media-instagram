/*
  kế hoạch: build các interface sau:
    + Interface cho các link thanh nav (INavLink)
    + Interface cập nhật cho toàn bộ user (PUT/update) (IUpdateUser)
    + Interface tạo bài viết/post mới (INewPost)
    + Interface cập nhật bài viết mới (dùng api PUT/update) (IUpdatePost)
    + Interface cho User/NewUser (phân chia theo state đã đki chưa ?)
*/

export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

//k cần set location/tags cho post
export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};

//k cần set location/tags cho post
export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
};

export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};