import wordings from "@/wordings";

const { home: { categories: { room, walk, breastfeeding, toys} } } = wordings;

export const categories = [
  { url: '/images/category/toys.jpeg', title: toys, id: 'MLA1392' },
  { url: '/images/category/stroller.jpeg', title: walk, id: 'MLA418189' },
  { url: '/images/category/room.jpeg', title: room, id: 'MLA5362' },
  { url: '/images/category/breastfeeding.jpeg', title: breastfeeding, id: 'MLA5360' },
];
