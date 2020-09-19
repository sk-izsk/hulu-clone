import { AiFillHome } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';
import { IoMdFlash } from 'react-icons/io';
import { IconType } from 'react-icons/lib';
import { MdLiveTv, MdPersonOutline, MdVideoLibrary } from 'react-icons/md';

export interface HeaderIcon {
  Icon: IconType;
  text: string;
}

const headerIcons: HeaderIcon[] = [
  {
    Icon: AiFillHome,
    text: 'Home',
  },
  {
    Icon: IoMdFlash,
    text: 'Trending',
  },
  {
    Icon: MdLiveTv,
    text: 'Verified',
  },
  {
    Icon: MdVideoLibrary,
    text: 'Collections',
  },
  {
    Icon: ImSearch,
    text: 'Search',
  },
  {
    Icon: MdPersonOutline,
    text: 'Account',
  },
];

export { headerIcons };
