import { Link } from 'react-router-dom';

import type { Posting } from '../../types';

/**
 * Simple utility function to convert isoDateTimeString to localeDateString
 */
const getDateString = (isoDateTimeString: string) =>
  new Date(isoDateTimeString).toLocaleDateString();

type Props = {
  posting: Posting;
};

export function PostingCard({ posting }: Props) {
  return (
    <Link to={`post/${posting.id}`}>
      <div className="flex w-full flex-col justify-between gap-6 rounded-xl border border-zinc-200 p-2 pb-4 shadow hover:shadow-lg sm:flex-row sm:pb-2">
        <div className="w-full">
          <img
            src={posting.imgLinks[0]}
            alt="posting image"
            className="rounded-lg"
          />
        </div>

        <div className="flex min-h-full w-full flex-col justify-between">
          <div>
            <p className="font-medium">{posting.title}</p>
            <p>{posting.location}</p>
          </div>

          <p>Posted on {getDateString(posting.createdAt)}</p>
        </div>

        <div className="w-full">
          {/* @todo add money formatting */}
          <p>${posting.price}/month</p>
        </div>
      </div>
    </Link>
  );
}
