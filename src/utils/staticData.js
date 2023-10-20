import formName from "@/assets/002-man.png";
import formEmail from "@/assets/003-email.png";
import formAge from "@/assets/001-age.png";
import formComment from "@/assets/004-comments.png";

import gallery1 from "@/assets/image-gallery/image-gallery-1.webp";
import gallery2 from "@/assets/image-gallery/image-gallery-2.webp";
import gallery3 from "@/assets/image-gallery/image-gallery-3.webp";
import gallery4 from "@/assets/image-gallery/image-gallery-4.webp";
import gallery5 from "@/assets/image-gallery/image-gallery-5.webp";

const staticData = {
  navigation: {
    navs: [
      {
        title: "Section A: HTML & CSS",
        desc: "HTML & CSS",
        url: "/",
      },
      {
        title: "Section B: JavaScript Basics",
        desc: "JavaScript Basics",
        url: "/js-basics",
      },
      {
        title: "Section C: DOM Manipulation",
        desc: "DOM Manipulation",
        url: "/dom-manipulation",
      },
    ],
  },
  form: {
    images: { formName, formEmail, formAge, formComment },
  },
  imageGallery: [gallery1, gallery2, gallery3, gallery4, gallery5],
};
export default staticData;
