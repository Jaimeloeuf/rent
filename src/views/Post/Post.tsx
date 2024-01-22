import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Post } from '../../types';
import { getPost, moneyFormatter } from '../../utils';

export function Post() {
  const { postID } = useParams<{ postID?: string }>();

  if (postID === undefined) {
    throw new Error('Did not get postID from router');
  }

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function fetchData() {
      // @todo remove !
      setPost(await getPost(postID!));
    }

    fetchData();
  }, [postID]);

  const mapLink = useMemo(
    () =>
      post === null
        ? ''
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(post.location)}`,
    [post],
  );

  return (
    <>
      {/* @todo Refactor into a sticky navbar component */}
      <div className="pb-4">
        <p className="text-4xl font-extrabold tracking-tighter">RENT</p>
        <p className="-mt-2 text-sm font-light">simple renting</p>
      </div>

      {post === null ? (
        <p>loading...</p>
      ) : (
        <div>
          <div className="max-h-[40dvh]">
            <div className="flex w-full flex-row flex-nowrap items-center gap-2 overflow-x-scroll scroll-smooth">
              {post.imgLinks.map((imgLink) => (
                // @todo Number every single image at top left corner
                <img
                  key={imgLink + Math.random()}
                  src={imgLink}
                  alt="post image"
                  className="h-[40dvh] rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-screen-md pt-4 sm:pt-8">
            <div className="flex flex-col justify-between pb-2 lg:flex-row">
              <p className="text-3xl font-medium">{post.title}</p>

              <p className="text-2xl tracking-tight">
                {moneyFormatter(post.price)} / month
              </p>
            </div>

            <a
              className="text-xl underline decoration-zinc-400 decoration-1 underline-offset-4"
              href={mapLink}
              target="_blank"
            >
              {post.location}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
