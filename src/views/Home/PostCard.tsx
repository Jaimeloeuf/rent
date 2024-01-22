import { Link } from 'react-router-dom';

import { moneyFormatter } from '../../utils';
import type { Post } from '../../types';

/**
 * Simple utility function to convert isoDateTimeString to localeDateString
 */
const getDateString = (isoDateTimeString: string) =>
  new Date(isoDateTimeString).toLocaleDateString();

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  return (
    <Link to={`post/${post.id}`}>
      <div className="flex w-full flex-col justify-between gap-6 rounded-xl border border-zinc-200 p-2 pb-4 shadow hover:shadow-lg sm:flex-row sm:pb-2">
        <div className="w-full">
          <img
            src={post.imgLinks[0]}
            alt="default post image"
            className="rounded-lg"
          />
        </div>

        <div className="flex min-h-full w-full flex-col justify-between">
          <div>
            <p className="font-medium">{post.title}</p>
            <p>{post.location}</p>
          </div>

          <p>Posted on {getDateString(post.createdAt)}</p>
        </div>

        <div className="w-full">
          <p>{moneyFormatter(post.price)} / month</p>
        </div>
      </div>
    </Link>
  );
}
