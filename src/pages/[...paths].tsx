import React, { Fragment } from "react";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { postHandler } from "../libs/postHandler";
import { PostDetail, Props as PostDetailProps } from "../components/PostDetail";
import { CustomHead } from "../components/CustomHead";

type PageQuery = {
  paths: string[];
};

export const getStaticPaths: GetStaticPaths<PageQuery> = async () => {
  const allPosts = await postHandler.getAllPosts();

  return {
    fallback: false,
    paths: allPosts.map((post) => ({
      params: {
        paths: post.frontMatter.path.split("/").filter((path) => path !== ""),
      },
    })),
  };
};

type PageProps = {
  postDetail: PostDetailProps;
  description: string;
};

export const getStaticProps: GetStaticProps<PageProps, PageQuery> = async (
  context
) => {
  const path = context.params?.paths as string[];
  const post = await postHandler.getPostFromPath(`/${path.join("/")}`);
  if (!post)
    throw new Error(
      "Failed to find the target post when executing getPostFromPath()"
    );

  return {
    props: {
      postDetail: postHandler.postsToPostDetail(post),
      description: post.current.frontMatter.description,
    },
  };
};

const Page: NextPage<PageProps> = (props) => {
  return (
    <Fragment>
      <CustomHead
        title={props.postDetail.title}
        description={props.description}
      />
      <PostDetail {...props.postDetail} />
    </Fragment>
  );
};

export default Page;
