import { Maybe } from 'src/graphql/graphql';

export default function getEmotion(
  liked: boolean,
  like_type?:
    | 'like'
    | 'wow'
    | 'haha'
    | 'sad'
    | 'angry'
    | undefined
    | Maybe<string>
): {
  icon: string;
  label: string;
} {
  let icon = '001-heart.svg';
  let label = 'Thích';

  if (liked) {
    switch (like_type) {
      case 'like':
        icon = 'heart-circle.svg';
        break;
      case 'haha':
        icon = 'haha-logo.svg';
        label = 'Haha';
        break;
      case 'sad':
        icon = 'sad-icon.svg';
        label = 'Buồn';
        break;
      case 'wow':
        icon = 'wow-logo.svg';
        label = 'Wow';
        break;
      case 'angry':
        icon = 'angry-logo.svg';
        label = 'Phẫn nộ';
        break;
      default:
        icon = '001-heart.svg';
        label = 'Thích';
    }
  }
  return {
    icon,
    label,
  };
}
